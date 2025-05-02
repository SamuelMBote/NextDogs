import LoginResetarForm from '@/components/login-resetar-form';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Resete a senha | Dogs',
  description: 'Resete sua conta no site Dogs',
};
type ResetarSearchParams = {
  searchParams: { key: string; login: string };
};
const PageResetar = ({ searchParams }: ResetarSearchParams) => {
  console.log(searchParams);
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a senha</h1>
      <LoginResetarForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </div>
  );
};

export default PageResetar;
