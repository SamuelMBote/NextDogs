import React from 'react';
import style from './style.module.css';
type InputPros = {
  label: string;
  error?: string;
} & React.ComponentProps<'input'>;
const Input = ({ label, name, error, ...props }: InputPros) => {
  return (
    <div className={style.wrapper}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        className={style.input}
        {...props}
      />
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
};

export default Input;
