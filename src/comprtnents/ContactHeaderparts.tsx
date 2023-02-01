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
			<a href="">メールフォームへ進む</a>
		</li>
		<li>
			<span>TEL</span>
			<a href="#"></a>
		</li>
		<li>
			<span>FAX</span>
		</li>
	</ul>
	</div>
	)
}