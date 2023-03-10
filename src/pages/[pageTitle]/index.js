import Link from "next/link";
import { useRouter } from "next/router";
import Head from 'next/head';
import Header from '../../comprtnents/Header';
import Footer from '../../comprtnents/Footer';
import styles from '../../styles/Home.module.scss';
import ShopNav from '../../comprtnents/UserInfo';

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
			<main className={styles['l-main']}>
				<h1 className={styles['c-page__title']}>{router.query.pageTitle}</h1>
				<p className={styles['c-page__text']}>動的に生成される下層ページ</p>
			</main>
		<Footer />
		</>
	);
}

export async function getServerSideProps({ query }) {
	return {
		props: { query }
	}
}
