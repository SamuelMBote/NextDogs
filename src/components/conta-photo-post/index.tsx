'use client';
import React, { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Button from '../form-button';
import Input from '../form-input';
import ErrorMessage from '../helper/error-message';
import style from './style.module.css';
import photoPost from '@/actions/photo-post';
function FormButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>{pending ? 'Enviando...' : 'Enviar'}</Button>
  );
}
const ContaPhotoPost = () => {
  const [state, action] = useActionState(photoPost, {
    ok: false,
    error: '',
    data: null,
  });
  const [img, setImg] = React.useState('');
  function handleImageChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  }
  return (
    <section className={`${style.photoPost} animeLeft`}>
      <form action={action}>
        <Input label="Nome" name="nome" placeholder="Nome" type="text" />
        <Input label="Peso" name="peso" placeholder="Peso" type="number" />
        <Input label="Idade" name="idade" placeholder="Idade" type="number" />
        <input
          onChange={handleImageChange}
          type="file"
          name="img"
          id="img"
          className={style.file}
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <div>
        <div
          className={style.preview}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </section>
  );
};

export default ContaPhotoPost;
