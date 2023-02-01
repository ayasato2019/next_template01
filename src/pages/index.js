import Link from 'next/link';
import Head from 'next/head';
import { client } from "../libs/client";
import Header from '../comprtnents/Header';
// import { fetcher } from '@/comprtnents/CommonMeta';

// export async function getServerSideProps({ query }) {
// 	const data = await fetcher('${API_URL}/')
// }

export default function Home() {
return (
	<>
		<Head>
			{/* <title>{props.query.photo_id}|{props.query.brandName}</title> */}
			<title>仮</title>
			<meta propety='discription' content='キーワード＆ページタイトル'></meta>
			<meta propety='og:title' content='ページタイトル'></meta>
		</Head>
		<Header />
		<main>
			<section>
				<h1>main page</h1>
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