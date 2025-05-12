'use client';
import React from 'react';
import style from './style.module.css';
import { usePathname } from 'next/navigation';
import useMedia from '@/hooks/useMedia';
import AdicionarIcon from '@/icons/adicionar-icon';
import SairIcon from '@/icons/sair-icon';
import EstatisticasIcon from '@/icons/estatisticas-icon';
import FeedIcon from '@/icons/feed-icon';
import Link from 'next/link';

function getTitle(pathname: string) {
  switch (pathname) {
    case '/conta/postar':
      return 'Poste sua foto';
      break;
    case '/conta/estatisticas':
      return 'Estatísticas';
      break;
    default:
      return 'Minha Conta';
      break;
  }
}
const HeaderConta = () => {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {}
  return (
    <header className={style.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${style.mobileButton} ${
            mobileMenu && style.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? style.navMobile : style.nav}
        ${mobileMenu && style.navMobileActive}`}
      >
        <Link href={'/conta'} className={pathname === '/conta' ? 'active' : ''}>
          <FeedIcon />
          {mobile && 'Minhas Fotos'}
        </Link>
        <Link
          href={'/conta/estatisticas'}
          className={pathname === '/conta/estatisticas' ? 'active' : ''}
        >
          <EstatisticasIcon />
          {mobile && 'Estatisticas'}
        </Link>
        <Link
          href={'/conta/postar'}
          className={pathname === '/conta/postar' ? 'active' : ''}
        >
          <AdicionarIcon />
          {mobile && 'Adicionar Foto'}
        </Link>
        <button onClick={handleLogout}>
          <SairIcon />
          {mobile && 'Sair'}
        </button>
      </nav>
    </header>
  );
};

export default HeaderConta;
