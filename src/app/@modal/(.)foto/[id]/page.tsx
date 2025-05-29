import photoGet from '@/actions/photo-get';
import FeedModal from '@/components/feed-modal';
import { notFound } from 'next/navigation';
import React from 'react';

const PageIdFoto = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { data } = await photoGet(id);
  if (!data) return notFound();
  return <FeedModal photo={data} />;
};

export default PageIdFoto;
