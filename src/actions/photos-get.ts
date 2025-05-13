'use server';

import { PHOTOS_GET } from '@/functions/api';
import apiError from '@/functions/api-error';

export type Photo = {
  id: number;
  author: string;
  title: string;
  date: string | Date;
  src: string;
  peso: string | number;
  idade: string | number;
  acessos: string | number;
  total_comments: string | number;
};
type PhotoGetParams = {
  page?: number;
  total?: number;
  user?: 0 | string;
};
export default async function photosGet({
  page = 1,
  total = 6,
  user = 0,
}: PhotoGetParams = {}) {
  try {
    const { url } = PHOTOS_GET({ page, total, user });
    const response = await fetch(url, {
      next: { revalidate: 10, tags: ['photos'] },
    });
    if (!response.ok) throw new Error('Erro ao buscar as fotos');
    const data = (await response.json()) as Array<Photo>;
    return { data, ok: true, error: '' };
  } catch (error) {
    return apiError(error);
  }
}
