import HeaderConta from '@/components/header-conta';
import React from 'react';

const LayoutConta = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <HeaderConta />
      {children}
    </div>
  );
};

export default LayoutConta;
