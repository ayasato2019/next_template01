import Link from "next/link";
import styles from '../styles/Home.module.scss';
import ContactParts from '../comprtnents/ContactHeaderparts'

export default function Nav() {
	return (
		<ul className={styles.nav}>
			<li className={styles.nav__item}>
				<Link href="/company">
					会社概要
					<span>Company</span>
				</Link>
			</li>
			<li className={styles.nav__item}>
				<Link href="/business">
					事業内容
					<span>Business</span>
				</Link>
			</li>
			<li className={styles.nav__item}>
				<Link href="/product">
					商品例
					<span>Product</span>
				</Link>
			</li>
			<li>
				<ContactParts />
			</li>
		</ul>
	)
}
