'use server';

import { COMMENT_POST } from '@/functions/api';
import apiError from '@/functions/api-error';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { Comment } from './photo-get';

export default async function commentPost(
  state: { ok: boolean; error: string; data: Comment | null },
  formdata: FormData,
) {
  const token = (await cookies()).get('token')?.value;
  const comment = formdata.get('comment') as string | null;
  const id = formdata.get('id') as string | null;

  try {
    if (!token || !comment || !id) throw new Error('Preencha os dados');

    const { url } = COMMENT_POST(id);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formdata,
    });
    if (!response.ok) throw new Error('Erro ao enviar comentário');
    const data = (await response.json()) as Comment;
    revalidateTag('comment');
    return { data, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
