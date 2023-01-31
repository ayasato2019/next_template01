/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app'
import Nav from './Nav'

import { css , keyframes }  from '@emotion/react'


export default function Header() {
	return (
		<header className={header}>
			<a href="/" class={logoStyle}>
				ブランド名
			</a>
			<Nav />
		</header>
	);
}

const header = css({
	overflow: "hidden",
	margin: "0",
	padding: "30px",
	width: "100%",
	height: "60px",
})

const logoStyle = css({
	fontSize: "24px",
})

