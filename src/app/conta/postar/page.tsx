import ContaPhotoPost from '@/components/conta-photo-post';
import { Metadata } from 'next';
import React from 'react';
export const runtime = 'edge';
export const metadata: Metadata = {
  title: 'Postar | Minha Conta',
  description: 'Poste sua foto no site Dogs',
};
const PagePostar = () => {
  return <ContaPhotoPost />;
};

export default PagePostar;
