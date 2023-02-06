import styles from '../styles/Home.module.scss';
import{ css } from '@emotion/react'


export const UserInfo = () => {
	return (
		<div className={styles['p-userInfo__wrap']}>
			<ul>
				<li className={styles['c-userinfo__name']}>
					<p>ようこそ〇〇さん！</p>
				</li>
				<li className={styles['c-userinfo__cpirse']}>
					<p>Bacic</p>
				</li>
				<li className={styles['c-userinfo__delivary-data']}>
					<p>次回配送予定日：00/00</p>
				</li>
				<li className={styles['c-userinfo__delivary-data-cahnge']}>
					<p>配送変更期限：00/00</p>
					<p>変更は<a href="#">こちら</a></p>
				</li>
			</ul>
			<p><a href="#">マイページへ</a></p>
		</div>
	);
}