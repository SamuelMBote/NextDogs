import LoginPerdeuForm from '@/components/login-perdeu-form';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Perdeu a senha | Dogs',
  description: 'Recupere sua conta no site Dogs',
};
// export const dynamic = 'force-dynamic'
const PagePerdeuLogin = () => {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <LoginPerdeuForm />
    </div>
  );
};

export default PagePerdeuLogin;
