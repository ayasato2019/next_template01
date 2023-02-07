import { client } from "../../libs/client";
import Head from 'next/head';
import Header from '../../comprtnents/Header';
import Footer from '../../comprtnents/Footer';
import styles from '../../styles/News.module.scss';
import commonStyles from '../../styles/Home.module.scss';
import ShopNav from '../../comprtnents/UserInfo';

export default function BlogId({ blog }) {
	const date = new Date(blog.publishedAt).toLocaleDateString();

	return (
		<>
		<Head>
			{/* <title>{props.query.photo_id}|{props.query.brandName}</title> */}
			<title></title>
			<meta propety='discription' content='キーワード＆ページタイトル'></meta>
			<meta propety='og:title' content='ページタイトル'></meta>
		</Head>
		<Header />
		<main className={`${commonStyles['l-main']} ${styles['p-article']}`}>
			<h1 className={styles['c-article__title']}>{blog.title}</h1>
			<p className={styles['c-article__time']}>{date}</p>
			<div className={styles['c-article__contents']}
				dangerouslySetInnerHTML={{
					__html: `${blog.body}`,
				}}
				/>
		</main>
		<Footer />
		</>
	);
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};