import Link from "next/link";
import { client } from "../libs/client";
import Header from '../comprtnents/Header';
// import { css } from '../styles/global.css';

export default function Home({ blog }) {
return (
	<div>
		<Header />
	<main>
		<section>
			<h1>main page</h1>
		</section>
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