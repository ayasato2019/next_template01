import Link from "next/link";
import styles from '../styles/Home.module.scss';
import React, { FC } from "react";

// type Props = {
// 	open: boolean;
// 	id: string;
// };

export const HeaderNav = () => {

	return (
		<ul className={styles['l-header-nav__contents']}>
			<li className={styles['p-header-nav__contents-item']}>
				<Link href="/about" className={styles['c-header-nav__contents-item-link']}>
					Make it!について
					<span>About</span>
				</Link>
			</li>
			<li className={styles['p-header-nav__contents-item']}>
				<Link href="/courses" className={styles['c-header-nav__contents-item-link']}>
					コース紹介
					<span>Courses</span>
				</Link>
			</li>
			<li className={styles['p-header-nav__contents-item']}>
				<Link href="/product" className={styles['c-header-nav__contents-item-link']}>
					商品例
					<span>Product</span>
				</Link>
			</li>
			<li className={styles['p-header-nav__contents-item']}>
				<Link href="/blog" className={styles['c-header-nav__contents-item-link']}>
					商品開発ブログ
					<span>Blog</span>
				</Link>
			</li>
			<li className={styles['p-header-nav__contents-item']}>
				<Link href="/faq" className={styles['c-header-nav__contents-item-link']}>
					よくある質問
					<span>FAQ</span>
				</Link>
			</li>
			<li className={styles['p-header-nav__contents-item']}>
				<Link href="/contact" className={styles['c-header-nav__contents-item-link']}>
					お問合せ
					<span>Contact</span>
				</Link>
			</li>
		</ul>
	);
}
