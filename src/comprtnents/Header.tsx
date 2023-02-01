/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app'
import Nav from './Nav';
import styles from '../styles/Home.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<a href="/"  className={styles.logoStyle}>
				ブランド名
			</a>
			<Nav />
		</header>
	);
}
