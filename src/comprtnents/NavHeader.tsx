import Link from "next/link";
import styles from '../styles/Home.module.scss';
import ContactParts from './ContactHeaderparts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCroissant } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
	return (
		<ul className={styles.nav_header}>
			<li className={styles.nav_header__item}>
				<Link href="/about">
				<FontAwesomeIcon icon={faCroissant} />
					Make it!について
					<span>About</span>
				</Link>
			</li>
			<li className={styles.nav_header__item}>
				<Link href="/courses">
					コース紹介
					<span>Courses</span>
				</Link>
			</li>
			<li className={styles.nav_header__item}>
				<Link href="/product">
					商品例
					<span>Product</span>
				</Link>
			</li>
			<li className={styles.nav_header__item}>
				<Link href="/blog">
					商品開発ブログ
					<span>Blog</span>
				</Link>
			</li>
			<li className={styles.nav_header__item}>
				<Link href="/faq">
					よくある質問
					<span>FAQ</span>
				</Link>
			</li>
			<li className={styles.nav_header__item}>
				<Link href="/contact">
					お問合せ
					<span>Contact</span>
				</Link>
			</li>
			{/* <li>
				<ContactParts />
			</li> */}
		</ul>
	)
}
