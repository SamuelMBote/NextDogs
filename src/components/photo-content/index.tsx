'use client';
import React from 'react';
import style from './style.module.css';
import Link from 'next/link';
import { useUser } from '@/context/user-context';
import Image from 'next/image';
import PhotoDelete from '../photo-delete';
import { PhotoData } from '@/actions/photo-get';
import PhotoComments from '../photo-comments';
const PhotoContent = ({
  data,
  single,
}: {
  data: PhotoData;
  single: boolean;
}) => {
  const { photo, comments } = data;
  const user = useUser();
  return (
    <div className={`${style.photo} ${single ? style.single : ''}`}>
      <div className={style.img}>
        <Image src={photo.src} alt={photo.title} width={1000} height={1000} />
      </div>
      <div className={style.details}>
        <div>
          <p className={style.author}>
            {user ? (
              <PhotoDelete id={String(photo.id)} />
            ) : (
              <Link href={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={style.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link href={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={style.attributes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade <= 1 ? `${photo.idade} ano` : `${photo.idade} anos`}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments
        single={single}
        id={String(photo.id)}
        comments={comments}
      />
    </div>
  );
};

export default PhotoContent;
