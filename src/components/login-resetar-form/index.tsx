'use client';
import React, { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Button from '../form-button';
import Input from '../form-input';
import ErrorMessage from '../helper/error-message';
import style from './style.module.css';
import passwordReset from '@/actions/password-reset';
function FormButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>
      {pending ? 'Resetando...' : 'Resetar Senha'}
    </Button>
  );
}
const LoginResetarForm = ({
  keyToken,
  login,
}: {
  keyToken: string;
  login: string;
}) => {
  const [state, action] = useActionState(passwordReset, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <>
      <form action={action} className={style.form}>
        <Input
          label="Nova Senha"
          name="password"
          placeholder="Nova Senha"
          type="password"
        />
        <input type="hidden" name="key" value={keyToken} />
        <input type="hidden" name="login" value={login} />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
};

export default LoginResetarForm;
