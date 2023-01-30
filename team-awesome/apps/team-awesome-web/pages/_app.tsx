import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../src/styles/global";
import { theme } from "../src/styles/theme";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle />
      <Head>
        <title>Welcome to team-awesome-web!</title>
      </Head>
      <main className="app">
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
