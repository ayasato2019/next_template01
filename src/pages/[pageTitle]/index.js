import Link from "next/link";
import { useRouter } from "next/router";
import Head from 'next/head';
import Header from '../../comprtnents/Header';
import styles from '../../styles/Home.module.scss';

export default function Setting({ query }) {
	const router = useRouter();
	return (
		<>
		<Head>
			{/* <title>{props.query.photo_id}|{props.query.brandName}</title> */}
			<title></title>
			<meta propety='discription' content='キーワード＆ページタイトル'></meta>
			<meta propety='og:title' content='ページタイトル'></meta>
		</Head>
		<Header />
			<main className={styles.main}>
				<h1 className={styles.page__title}>{router.query.pageTitle}</h1>
			</main>
		</>
	);
}

export async function getServerSideProps({ query }) {
	return {
		props: { query }
	}
}
