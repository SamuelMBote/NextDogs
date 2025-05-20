'use client';
import React from 'react';
import FeedPhotos from '../feed-photos';
import photosGet, { Photo } from '@/actions/photos-get';
import Loading from '../loading';
import style from './style.module.css';
const Feed = ({
  photos,
  user,
}: {
  photos: Array<Photo>;
  user?: 0 | string;
}) => {
  const [photosFeed, setPhotosFeed] = React.useState<Array<Photo>>(photos);
  const [page, setPage] = React.useState<number>(1);
  const fetching = React.useRef(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [infinite, setInfinite] = React.useState<boolean>(
    photos.length < 6 ? true : false,
  );

  React.useEffect(() => {
    if (infinite) {
      window.addEventListener('scroll', infiniteScroll);
      window.addEventListener('wheel', infiniteScroll);
    } else {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    }
    return () => {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    };
  }, [infinite]);
  function infiniteScroll() {
    if (fetching.current) return;
    fetching.current = true;
    setLoading(true);
    setTimeout(() => {
      setPage((currentPage) => currentPage + 1);
      fetching.current = false;
      setLoading(false);
    }, 1000);
  }
  React.useEffect(() => {
    if (page === 1) return;
    async function getPagePhotos(page: number) {
      const actionData = await photosGet({ page, total: 6, user });
      if (actionData && actionData.data !== null) {
        const { data } = actionData;
        setPhotosFeed((currentPhotos) => [...currentPhotos, ...data]);
        if (data.length < 6) setInfinite(false);
      }
    }
    getPagePhotos(page);
  }, [page, user]);
  return (
    <div>
      <FeedPhotos photos={photosFeed} />

      <div className={style.loadingWrapper}>
        {infinite ? loading && <Loading /> : <p>Não existe mais postagens</p>}
      </div>
    </div>
  );
};

export default Feed;
