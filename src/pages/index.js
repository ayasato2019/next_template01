import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head';
import { client } from "../libs/client";
import Header from '../comprtnents/Header';
import Footer from '../comprtnents/Footer';
import styles from '../styles/Home.module.scss';
// import { fetcher } from '@/comprtnents/CommonMeta';

// export async function getServerSideProps({ query }) {
// 	const data = await fetcher('${API_URL}/')
// }

// const myLoader = ({ src, width, quality }) => {
// 	return `https://example.com/${src}?w=${width}&q=${quality || 75}`
//   }

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
		<main className={styles['l-main']}>
			<div className={styles['l-first-view']}>
				<p className={styles['l-first-view__text']}>
					<span>作るって楽しい<br />食べるって嬉しい</span>
					毎月出会う、新しいアレンジパン
				</p>
			</div>
			<section>
				<h1 className={styles['c-page__title']}>What 『Make it!』?</h1>
				<figure className={styles['p-toppage__whatMakeIt-figure']}>
					<Image
					src="/images/bread-725873_1920.jpg"
					alt="こだわりパンを自分で作ってみる"
					width={1980}
					height={1150}
					sizes="100%"
					className={styles['c-toppage__whatMakeIt-img']}
					/>
					<figcaption>
						<ul>
							<li>こだわりの食材を使って、人気店のパン作りに挑戦</li>
							<li>新しいパンにきっと出会える</li>
							<li>初めての味に、もっとパンが好きになる</li>
							<li>楽しいを増やすお手伝い</li>
							</ul>
					</figcaption>
				</figure>
			</section>
			<section>
				<h1 className={styles['c-page__title']}>News</h1>
				<ul className={styles['p-news']}>
			{blog.map((blog) => (
				<li key={blog.id} className={styles['p-news__item']}>
					<Link href={`/blog/${blog.id}`}>
						<p>{blog.category && blog.category.name}</p>
						<h3>{blog.title}</h3>
					</Link>
				</li>
			))}
		</ul>
			</section>
		</main>
		<Footer />
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