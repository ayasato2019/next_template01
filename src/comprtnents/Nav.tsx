/** @jsxImportSource @emotion/react */
import Link from "next/link";
import { css , keyframes }  from '@emotion/react'
import styles from '../../styles/Home.module.scss'

export default function Nav() {
	return (
		<ul class={nav}>
			<li>
				<Link href="/company">company</Link>
			</li>
			<li>
				<Link href="/business">business</Link>
			</li>
			<li>
				<Link href="/blog">blog</Link>
			</li>
			<li>
				<Link href="/contact">contact</Link>
			</li>
		</ul>
	)
}

const nav = css({
	display: "flex",
	width: "50%"
})
