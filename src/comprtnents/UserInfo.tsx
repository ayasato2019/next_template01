import React from 'react';
import styles from '../styles/Home.module.scss';
import{ css } from '@emotion/react'

const userProfile = {
	name: "太郎",
	dataNext: "2022/02/02",
	dataChange: "2022/01/02",
	course: "1/4コース",
};

export const UserInfo = () => {
	return (
		<div className={styles['p-userInfo__wrap']}>
			<ul>
				<li className={styles['c-userinfo__name']}>
					<p>ようこそ<span>{userProfile.name}</span>さん！</p>
				</li>
				<li className={styles['c-userinfo__course']}>
					<p><span>{userProfile.course}</span></p>
				</li>
				<li className={styles['c-userinfo__delivary-data']}>
					<p><span>{userProfile.dataNext}</span></p>
				</li>
			</ul>
			<a href="#" className={styles['c-userinfo__to-maypage']}>マイページへ</a>
		</div>
	);
}