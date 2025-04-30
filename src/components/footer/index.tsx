import Image from 'next/image';
import React from 'react';
import style from './style.module.css';
const Footer = () => {
  return (
    <div className={style.footer}>
      <Image
        src={'/assets/imgs/dogs-footer.svg'}
        width={28}
        height={22}
        alt="Dogs"
      />
      <p>Dogs. Alguns direitos reservados</p>
    </div>
  );
};

export default Footer;
