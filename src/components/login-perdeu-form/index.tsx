'use client';
import React, { useActionState, useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';
import Button from '../form-button';
import Input from '../form-input';
import ErrorMessage from '../helper/error-message';
import style from './style.module.css';
import passwordLost from '@/actions/password-lost';
function FormButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>
      {pending ? 'Enviando...' : 'Enviar E-mail'}
    </Button>
  );
}
const LoginPerdeuForm = () => {
  const [state, action] = useActionState(passwordLost, {
    ok: false,
    error: '',
    data: null,
  });
  const [url, setUrl] = useState('');
  useEffect(() => {
    // if (state.ok) window.location.href = '/conta';
  }, [state.ok]);
  useEffect(() => {
    setUrl(window.location.href.replace('perdeu', 'resetar'));
  }, []);
  return (
    <>
      <form action={action} className={style.form}>
        <Input
          label="E-mail / Usuário"
          name="login"
          placeholder="E-mail / Usuário"
          type="text"
        />
        <input type="hidden" name="url" value={url} />

        <ErrorMessage error={state.error} />
        {state.data ? (
          <p style={{ color: '#4c1' }}>Email enviado</p>
        ) : (
          <FormButton />
        )}
      </form>
    </>
  );
};

export default LoginPerdeuForm;
