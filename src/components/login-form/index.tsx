'use client';
import login from '@/actions/login';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '../form-button';
function FormButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>{pending ? 'Enviando...' : 'Entrar'}</Button>
  );
}
const LoginForm = () => {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null,
  });
  return (
    <>
      <form action={action}>
        <input type="text" name="username" placeholder="usuário" />{' '}
        <input type="password" name="password" placeholder="senha" />
        <FormButton />
        <p>{state.error}</p>
      </form>
    </>
  );
};

export default LoginForm;
