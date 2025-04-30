'use server';

import { TOKEN_POST } from '@/functions/api';
import apiError from '@/functions/api-error';
import { cookies } from 'next/headers';

export default async function login(
  state: { ok: boolean; error: string; data: null },
  formdata: FormData,
) {
  const username = formdata.get('username') as string | null;
  const password = formdata.get('password') as string | null;

  try {
    if (!username || !password) throw new Error('Preencha os dados');
    const { url } = TOKEN_POST();
    const response = await fetch(url, {
      method: 'POST',
      body: formdata,
    });
    if (!response.ok) throw new Error('Senha ou usuário inválidos');
    const data = await response.json();
    (await cookies()).set('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
    });
    return { ok: true, data: null, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
