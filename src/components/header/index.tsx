import Link from 'next/link';
import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
const Header = () => {
  const user = true;
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
        {user ? (
          <Link className={styles.login} href={'/conta'}>
            dogs
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
