'use server';

import { PASSWORD_LOST } from '@/functions/api';
import apiError from '@/functions/api-error';

export default async function passwordReset(
  state: { ok: boolean; error: string; data: null },
  formdata: FormData,
) {
  const login = formdata.get('login') as string | null;
  const urlPerdeu = formdata.get('url') as string | null;
  try {
    if (!login) throw new Error('Preencha os dados');
    const { url } = PASSWORD_LOST();
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login, url: urlPerdeu }),
    });
    if (!response.ok) throw new Error('Email ou usuário já cadastrado');
    return { ok: true, data: null, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
