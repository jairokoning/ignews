import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

import logoImg from '../../../public/images/logo.svg';
import { SignInButton } from '../SignInButton';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoImg} alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a className={styles.active}>Home</a>
          </ActiveLink>
          <ActiveLink  activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}