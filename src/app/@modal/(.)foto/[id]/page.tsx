import photoGet from '@/actions/photo-get';
import FeedModal from '@/components/feed-modal';
import { notFound } from 'next/navigation';
import React from 'react';
type PhotoIdParams = {
  params: {
    id: string;
  };
};
export async function generateMetadata({ params }: PhotoIdParams) {
  const { data } = await photoGet(params.id);
  if (!data) return { title: 'Fotos' };
  return { title: data?.photo.title };
}
const PageIdFoto = async ({ params: { id } }: { params: { id: string } }) => {
  const { data } = await photoGet(id);
  if (!data) return notFound();
  return <FeedModal photo={data} />;
};

export default PageIdFoto;
