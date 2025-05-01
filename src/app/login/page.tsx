import LoginForm from '@/components/login-form';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Login | Dogs',
  description: 'Logue sua conta no site Dogs',
};
const PageLogin = () => {
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginForm />
    </section>
  );
};

export default PageLogin;
