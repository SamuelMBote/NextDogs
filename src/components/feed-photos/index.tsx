import { Photo } from '@/actions/photos-get';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './style.module.css';
const FeedPhotos = ({ photos }: { photos: Array<Photo> }) => {
  return (
    <ul className={`${style.feed} animeLeft`}>
      {photos.map((photo, index) => (
        <li key={photo.id + index} className={style.photo}>
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              width={1500}
              height={1500}
              alt={photo.title}
              sizes="80vw"
            />
            <span className={style.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FeedPhotos;
