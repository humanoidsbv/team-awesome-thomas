import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import close from '../public/icons/close.svg';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to team-awesome-web!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
