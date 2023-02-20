import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { StoreProvider } from "../src/components/store-context";
import { theme } from "../src/styles/theme";
import GlobalStyle from "../src/styles/global";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Team Awesome webapp</title>
      </Head>
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
