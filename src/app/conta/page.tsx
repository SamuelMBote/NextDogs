'use client';
import { useUser } from '@/context/user-context';
import React from 'react';

const PageConta = () => {
  const { user } = useUser();
  return (
    <div>
      <h1 className="title" onClick={() => console.log()}>
        Conta {user?.nome}
      </h1>
    </div>
  );
};

export default PageConta;
