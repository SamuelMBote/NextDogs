'use client';
import { Comment } from '@/actions/photo-get';
import style from './style.module.css';
import React, { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import EnviarIcon from '@/icons/enviar-icon';
import ErrorMessage from '../helper/error-message';
import commentPost from '@/actions/comment-post';
function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className={style.button}
      aria-label="Enviar comentário"
    >
      <EnviarIcon />
    </button>
  );
}
const PhotoCommentsForm = ({
  single,
  id,
  setComments,
}: {
  single: boolean;
  id: string;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}) => {
  const [state, action] = useActionState(commentPost, {
    ok: false,
    data: null,
    error: '',
  });
  React.useEffect(() => {
    if (state.ok && state.data) {
      setComments((comments) => [...comments, state.data]);
      setComment('');
    }
  }, [state, setComments]);
  const [comment, setComment] = React.useState<string>('');
  return (
    <form
      action={action}
      className={`${style.form} ${single ? style.single : ''}`}
    >
      <input type="hidden" name="id" id="id" value={id} />
      <textarea
        className={style.textarea}
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <FormButton />
      <ErrorMessage error={state.error} />
    </form>
  );
};

export default PhotoCommentsForm;
