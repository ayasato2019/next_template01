import Link from "next/link";
import { client } from "../../libs/client";
import Header from '../../comprtnents/Header';
import styles from '../../styles/Home.module.scss';

export default function Home({ blog, query }) {
return (
	<div>
		<Header />
	<main className={styles.main}>
		<h1 className={styles.page__title}>商品開発</h1>
		<ul className={styles.article}>
			{blog.map((blog) => (
				<li key={blog.id} className={styles.article__item}>
				<Link href={`/blog/${blog.id}`}>{blog.title}</Link>
			</li>
			))}
		</ul>
	</main>
	</div>
);
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
const data = await client.get({ endpoint: "blog" });

return {
	props: {
	blog: data.contents,
	},
};
};
