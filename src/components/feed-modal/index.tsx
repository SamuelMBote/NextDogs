'use client';
import { PhotoData } from '@/actions/photo-get';
import React from 'react';
import PhotoContent from '../photo-content';
import style from './style.module.css';
import { usePathname, useRouter } from 'next/navigation';

const FeedModal = ({ photo }: { photo: PhotoData }) => {
  const router = useRouter();
  const pathname = usePathname();
  if (!pathname.includes('foto')) {
    return null;
  }
  function handleOutsideClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) router.back();
  }
  return (
    <div className={style.modal} onClick={handleOutsideClick}>
      <PhotoContent data={photo} single={false} />
    </div>
  );
};

export default FeedModal;
