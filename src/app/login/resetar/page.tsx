import LoginResetarForm from '@/components/login-resetar-form';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Resete a senha | Dogs',
  description: 'Resete sua conta no site Dogs',
};
type ResetarSearchParams = {
  searchParams: Promise<{ key: string; login: string }>;
};
const PageResetar = async ({ searchParams }: ResetarSearchParams) => {
  const { key, login } = await searchParams;
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a senha</h1>
      <LoginResetarForm keyToken={key} login={login} />
    </div>
  );
};

export default PageResetar;
