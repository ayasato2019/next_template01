/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app'
import Link from "next/link";
import styles from '../styles/Home.module.scss';
import { UserInfo } from './UserInfo';
import { HeaderNav } from './Nav-Header';
import { ToggleButton } from './ToggleButton';
import { css } from '@emotion/react'

export default function Header() {
	return (
		<header className={styles['l-header']}>
			<UserInfo />
			<div className={styles['l-header-logo-nav__wrap']}>
				<a href="/" className={styles['p-headerlogo__link']}>
					<p className={styles['c-logo-description']}>こだわり手作りパンのサブスク</p>
					<p className={styles['c-logo']}>Make it!</p>
				</a>
				<nav className={styles['l-header-nav__wrap']}>
					<ToggleButton />
					<HeaderNav />
				</nav>
			</div>
		</header>
	);
}
