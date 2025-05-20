import React from 'react';
import style from './style.module.css';
import photoDelete from '@/actions/photo-delete';
const PhotoDelete = ({ id }: { id: string }) => {
  const [loading, setLoading] = React.useState(false);
  async function handleClick() {
    setLoading(true);
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      await photoDelete(id);
    }
    setLoading(false);
  }
  return (
    <>
      {loading ? (
        <button className={style.delete} disabled>
          Deletar
        </button>
      ) : (
        <button className={style.delete} onClick={handleClick}>
          Deletar{' '}
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
