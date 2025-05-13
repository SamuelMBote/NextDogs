import React from 'react';
import FeedPhotos from '../feed-photos';
import { Photo } from '@/actions/photos-get';

const Feed = ({ photos }: { photos: Array<Photo> }) => {
  return (
    <div>
      <h1>Feed</h1>
      {photos && <FeedPhotos photos={photos} />}
    </div>
  );
};

export default Feed;
