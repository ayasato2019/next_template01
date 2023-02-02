import Link from "next/link";
import styles from '../styles/Home.module.scss';
import ContactParts from './ContactHeaderparts'

export default function Nav() {
	return (
		<ul className={styles.nav_footer}>
			<li className={styles.nav_footer__item}>
				<Link href="/company">
					運営会社について
				</Link>
			</li>
			<li className={styles.nav_footer__item}>
				<Link href="/service">
					サービスについて
				</Link>
			</li>
			<li className={styles.nav_footer__item}>
				<Link href="/system">
					システム
				</Link>
			</li>
			<li className={styles.nav_footer__item}>
				<Link href="/product">
					商品例
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
	)
}
