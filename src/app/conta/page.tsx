'use client';
import { useUser } from '@/context/user-context';
import React from 'react';

const PageConta = () => {
  const { user } = useUser();
  return (
    <main>
      <h1 className="title">Conta {user?.nome}</h1>
    </main>
  );
};

export default PageConta;
