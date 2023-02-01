import Link from "next/link";
import { useRouter } from "next/router";
import Header from '../../comprtnents/Header';
import styles from '../../styles/Home.module.scss';

export default function Setting({ query }) {
	const router = useRouter();
	return (
		<div>
			<Header />
			<main className={styles.main}>
				<h1 className={styles.page__title}>{router.query.pageTitle}</h1>
			</main>
		</div>
	);
}

export async function getServerSideProps({ query }) {
	return {
		props: { query }
	}
}
