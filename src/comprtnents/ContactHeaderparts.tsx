/** @jsxImportSource @emotion/react */
import Link from "next/link";
import styles from '../styles/Home.module.scss';

export default function Contact() {
	return (
	<div className={styles.nav__contact}>
	<h3>お問合せ</h3>
	<ul>
		<li>
			<span>MAIL</span>
			<a href="/">メールフォームへ</a>
		</li>
		<li>
			<span>TEL</span>
			<a href="/">000-000-0000</a>
		</li>
		<li>
			<span>FAX</span>
			<a href="/">000-000-0000</a>
		</li>
	</ul>
	</div>
	)
}