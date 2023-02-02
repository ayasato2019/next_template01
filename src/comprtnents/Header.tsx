/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app'
import Nav from './Nav';
import styles from '../styles/Home.module.scss';

import { css } from '@emotion/react'



export default function Header() {
	return (
		<header className={styles.header}>
			<a href="/">
				<p className={styles.logoDescription}>ブランド概要</p>
				<p className={styles.logo}></p>ブランド名
			</a>
			<Nav />
		</header>
	);
}
