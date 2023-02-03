import { client } from "../../libs/client";
import Head from 'next/head';
import Header from '../../comprtnents/Header';
import styles from '../../styles/News.module.scss';
import ShopNav from '../../comprtnents/ShopNav';

export default function BlogId({ blog }) {
  return (
	<>
	<Head>
		{/* <title>{props.query.photo_id}|{props.query.brandName}</title> */}
		<title></title>
		<meta propety='discription' content='キーワード＆ページタイトル'></meta>
		<meta propety='og:title' content='ページタイトル'></meta>
	</Head>
	<ShopNav />
	<Header />

	<main className={styles.article}>
		<h1 className={styles.article__title}>{blog.title}</h1>
		<p className={styles.article__time}>{blog.publishedAt}</p>
		<div className={styles.articles__contents}
			dangerouslySetInnerHTML={{
				__html: `${blog.body}`,
			}}
			/>
	</main>
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