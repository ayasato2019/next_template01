import Link from "next/link";
import styles from '../styles/Home.module.scss';
import React, { FC, useState } from "react";

export const HeaderNav = () => {
	
	const [openMenu, setOpenMenu] = useState(false);
	const handleMenuOpen = () => {
	setOpenMenu(!openMenu);
	};

	return (
		<>
		<button onClick={handleMenuOpen} type="button" className={styles['p-header-nav__trigger']}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
		<ul
		className={`${styles['l-header-nav__contents']} ${openMenu ? styles['open'] : styles['clouse']}`
		}>
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
	</>
	);
}
