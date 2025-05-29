'use server';

import { TOKEN_VALIDADE_POST } from '@/functions/api';
import apiError from '@/functions/api-error';
import { cookies } from 'next/headers';

export type StatsData = {
  id: number;
  title: string;
  acessos: string;
};
export default async function validateToken() {
  try {
    const token = (await cookies()).get('token')?.value;
    if (!token) throw new Error('Acesso negado');
    const { url } = TOKEN_VALIDADE_POST();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    if (!response.ok) throw new Error('Erro ao validar token');
    const data = (await response.json()) as Array<StatsData>;
    return { data, ok: true, error: '' };
  } catch (error) {
    return apiError(error);
  }
}
