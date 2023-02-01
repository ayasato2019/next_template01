import Link from "next/link";
import { useRouter } from "next/router";
// import { client } from "../../libs/client";
import Header from '../../comprtnents/Header';
// import { css } from '../styles/global.css';
import styles from '../../styles/Home.module.scss';

export default function Setting({ query }) {
	const router = useRouter();
	return (
		<div>
			<Header />
			<main>
				<h1 className={styles.article__title}>お{router.query.pageTitle}</h1>
			</main>
		</div>
	);
}

export async function getServerSideProps({ query }) {
	return {
		props: { query }
	}
}
