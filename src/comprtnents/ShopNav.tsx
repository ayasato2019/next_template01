import styles from '../styles/Home.module.scss';

export default function ShopNav() {
	return (
		<div className={styles.shopnNav}>
			<ul>
				<li>
					<p>ようこそ〇〇さん！</p>
				</li>
				<li>
					<p>ランク：Bacic</p>
				</li>
				<li>
					<p>次回配送予定日：00/00</p>
				</li>
				<li>
					<p>配送変更期限：00/00</p>
					<p>変更は<a href="#">こちら</a></p>
				</li>
			</ul>
			<p><a href="#">マイページへ</a></p>
		</div>
	);
}