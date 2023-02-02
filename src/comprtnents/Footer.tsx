/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app'
import Nav from './NavFooter';
import styles from '../styles/Home.module.scss';

import { css } from '@emotion/react'



export default function Footer() {
	return (
		<footer className={styles.footer}>
			<a href="/">
				<p className={styles.logoDescription}>こだわり手作りパンのサブスク</p>
				<p className={styles.logo}>Make it!</p>
			</a>
			<Nav />
		</footer>
	);
}
