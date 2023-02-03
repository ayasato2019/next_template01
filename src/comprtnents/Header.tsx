/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app'
import Link from "next/link";
import styles from '../styles/Home.module.scss';
import UserInfo from './UserInfo';
import { css } from '@emotion/react'

export default function Header() {
	return (
		<header className={styles['l-header']}>
			<UserInfo />
			<div className={styles['p-headerLogoNav']}>
				<a href="/" className={styles['c-headerlogo-link']}>
					<p className={styles['c-logo-description']}>こだわり手作りパンのサブスク</p>
					<p className={styles['c-logo']}>Make it!</p>
				</a>
				<nav className={styles['p-header-nav']}>
					<button className={styles['c-menu-trigger']}>
						<span></span>
						<span></span>
						<span></span>
					</button>
					<ul className={styles['p-header-nav-contents']}>
						<li className={styles['c-header-nav-contents-item']}>
							<Link href="/about" className={styles['c-header-nav-contents-item-link']}>
								Make it!について
								<span>About</span>
							</Link>
						</li>
						<li className={styles['c-header-nav-contents-item']}>
							<Link href="/courses" className={styles['c-header-nav-contents-item-link']}>
								コース紹介
								<span>Courses</span>
							</Link>
						</li>
						<li className={styles['c-header-nav-contents-item']}>
							<Link href="/product" className={styles['c-header-nav-contents-item-link']}>
								商品例
								<span>Product</span>
							</Link>
						</li>
						<li className={styles['c-header-nav-contents-item']}>
							<Link href="/blog" className={styles['c-header-nav-contents-item-link']}>
								商品開発ブログ
								<span>Blog</span>
							</Link>
						</li>
						<li className={styles['c-header-nav-contents-item']}>
							<Link href="/faq" className={styles['c-header-nav-contents-item-link']}>
								よくある質問
								<span>FAQ</span>
							</Link>
						</li>
						<li className={styles['c-header-nav-contents-item']}>
							<Link href="/contact" className={styles['c-header-nav-contents-item-link']}>
								お問合せ
								<span>Contact</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
