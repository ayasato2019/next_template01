import type { AppProps } from 'next/app'
import { Global } from '@emotion/react';
import { style } from '../styles/global';
import styles from '../styles/Home.module.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.body}>
    <Global styles={style} />
    <Component {...pageProps} />
    </div>
  )
}

