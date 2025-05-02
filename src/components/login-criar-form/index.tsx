'use client';
import React, { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import Button from '../form-button';
import Input from '../form-input';
import ErrorMessage from '../helper/error-message';
import style from './style.module.css';
import userPost from '@/actions/user-post';
function FormButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>
      {pending ? 'Cadastrando...' : 'Cadastrar'}
    </Button>
  );
}
const LoginCriarForm = () => {
  const [state, action] = useActionState(userPost, {
    ok: false,
    error: '',
    data: null,
  });
  useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);
  return (
    <>
      <form action={action} className={style.form}>
        <Input
          label="Usuário"
          name="username"
          placeholder="Usuário"
          type="text"
        />{' '}
        <Input label="E-mail" name="email" placeholder="E-mail" type="email" />
        <Input
          label="Senha"
          name="password"
          placeholder="Senha"
          type="password"
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
};

export default LoginCriarForm;
