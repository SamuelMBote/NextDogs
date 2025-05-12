import Link from 'next/link';
import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import userGet from '@/actions/user-get';
const Header = async () => {
  const { data } = await userGet();
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href={'/'}>
          <Image
            src={'/assets/imgs/dogs.svg'}
            alt="Dogs"
            width={28}
            height={22}
          />
        </Link>
        {data ? (
          <Link className={styles.login} href={'/conta'}>
            {data.username}
          </Link>
        ) : (
          <Link className={styles.login} href={'/login'}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
