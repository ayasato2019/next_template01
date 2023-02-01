import Link from 'next/link';
import Head from 'next/head';
import { client } from "../libs/client";
import Header from '../comprtnents/Header';
import { StylesProvider } from '@material-ui/core';
import styles from '../styles/Home.module.scss';

// import { fetcher } from '@/comprtnents/CommonMeta';

// export async function getServerSideProps({ query }) {
// 	const data = await fetcher('${API_URL}/')
// }

export default function Home({ blog, query }) {
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
			<div className={styles.first_view}>
				
			</div>
			<section>
				<h1 className={styles.page__title}>About me?</h1>
			</section>
			<section>
				<h1 className={styles.page__title}>News</h1>
				<ul className={styles.article}>
			{blog.map((blog) => (
				<li key={blog.id} className={styles.article__item}>
				<Link href={`/blog/${blog.id}`}>{blog.title}</Link>
			</li>
			))}
		</ul>

			</section>
		</main>
	</>
);
}

// ！！消さない！！
// ！！Blogページだけでなく、ここにも必要！！
export const getStaticProps = async () => {
const data = await client.get({ endpoint: "blog" });

return {
	props: {
	blog: data.contents,
	},
};
};