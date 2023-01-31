import Link from "next/link";
import { client } from "../../libs/client";
import Header from '../../comprtnents/Header';
// import { css } from '../styles/global.css';

export default function Home({ blog }) {
return (
	<div>
		<Header />
	<main>
		{blog.map((blog) => (
		<li key={blog.id}>
			<Link href={`/blog/${blog.id}`}>{blog.title}</Link>
		</li>
		))}
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