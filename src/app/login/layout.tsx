import React from 'react';
import style from './layout.module.css';
const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={style.login}>
      <div className={style.forms}>{children}</div>
    </div>
  );
};

export default LoginLayout;
