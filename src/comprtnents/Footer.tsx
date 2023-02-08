/** @jsxImportSource @emotion/react */
import Link from "next/link";
import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.scss';

import { css } from '@emotion/react'



export default function Footer() {
	return (
		<footer className={styles.footer}>
			<a href="/">
				<p className={styles.logoDescription}>こだわり手作りパンのサブスク</p>
				<p className={styles.logo}>Make it!</p>
			</a>
			<nav>
				<ul className={styles.nav_footer}>
					<li className={styles.nav_footer__item}>
						<Link href="/company">
							Make it!ってなに？
						</Link>
						<ol>
							<li>
								<Link href="/company">
									運営会社について
								</Link>
							</li>
							<li>
								<Link href="/service">
									サービスについて
								</Link>
							</li>
							<li>
								<Link href="/system">
									注文システム
								</Link>
							</li>
						</ol>
					</li>
					<li className={styles.nav_footer__item}>
						<Link href="/product">
							商品例
						</Link>
					</li>
					<li className={styles.nav_footer__item}>
						<Link href="/cancel_skip">
							キャンセル・スキップについて
						</Link>
					</li>
					<li className={styles.nav_footer__item}>
						<Link href="/delivery">
							配送方法
						</Link>
					</li>
					<li className={styles.nav_footer__item}>
						<Link href="/privacy">
							プライバシーポリシー
						</Link>
					</li>
					<li className={styles.nav_footer__item}>
						<Link href="/contact">
							お問合せ
						</Link>
					</li>
					{/* <li>
						<ContactParts />
					</li> */}
				</ul>
			</nav>
		</footer>
	);
}
