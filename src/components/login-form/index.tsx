'use client';
import login from '@/actions/login';
import React, { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '../form-button';
import Input from '../form-input';
import ErrorMessage from '../helper/error-message';
import Link from 'next/link';
import style from './style.module.css';
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
      <form action={action} className={style.form}>
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
      <Link href={'/login/perdeu'} className={style.perdeu}>
        Perdeu a senha?
      </Link>
      <div className={style.cadastro}>
        <h2 className={style.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link href={'/login/criar'} className="button">
          Cadastro
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
