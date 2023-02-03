/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app'
import Nav from './NavHeader';
import styles from '../styles/Home.module.scss';
import { css } from '@emotion/react'

export default function Header() {
	return (
		<header className={styles.header}>
			<a href="/">
				<p className={styles.logoDescription}>こだわり手作りパンのサブスク</p>
				<p className={styles.logo}>Make it!</p>
			</a>
			<Nav />
			
		</header>
	);
}
