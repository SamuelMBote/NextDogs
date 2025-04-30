import React from 'react';
import style from './style.module.css';
type FormButtonType = {} & React.ComponentProps<'button'>;
const Button = ({ children, ...props }: FormButtonType) => {
  return (
    <button {...props} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
