import photoGet from '@/actions/photo-get';
import PhotoContent from '@/components/photo-content';
import { notFound } from 'next/navigation';
import React from 'react';
type PhotoIdParams = {
  params: Promise<{ id: string }>;
};
export async function generateMetadata({ params }: PhotoIdParams) {
  const { id } = await params;
  const { data } = await photoGet(id);
  if (!data) return { title: 'Fotos' };
  return { title: data?.photo.title };
}
const PageIdFoto = async ({ params }: PhotoIdParams) => {
  const { id } = await params;
  const { data } = await photoGet(id);
  if (!data) return notFound();
  return (
    <div className="container mainContainer">
      <PhotoContent data={data} single={true} />
    </div>
  );
};

export default PageIdFoto;
