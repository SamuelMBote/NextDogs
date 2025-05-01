'use client';
import login from '@/actions/login';
import React, { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '../form-button';
import Input from '../form-input';
import ErrorMessage from '../helper/error-message';
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
  useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);
  return (
    <>
      <form action={action}>
        <Input
          label="Usuário"
          name="username"
          placeholder="Usuário"
          type="text"
        />
        <Input
          label="Senha"
          name="password"
          placeholder="Senha"
          type="password"
        />{' '}
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
};

export default LoginForm;
