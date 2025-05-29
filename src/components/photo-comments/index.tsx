'use client';
import { useUser } from '@/context/user-context';
import React from 'react';
import style from './style.module.css';
import PhotoCommentsForm from '../photo-comments-form';
import { Comment } from '@/actions/photo-get';
const PhotoComments = (props: {
  single: boolean;
  id: string;
  comments: Comment[];
}) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef<HTMLUListElement>(null);
  const user = useUser();

  React.useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [comments]);
  return (
    <>
      <ul
        ref={commentsSection}
        className={`${style.comments} ${props.single ? style.single : ''}`}
      >
        {comments &&
          comments.map((comment) => {
            return (
              <li key={comment.comment_ID}>
                <b>{comment.comment_author}:</b>
                <span>{comment.comment_content}</span>
              </li>
            );
          })}
      </ul>
      {user && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
