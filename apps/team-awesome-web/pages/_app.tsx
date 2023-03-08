import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

import { client } from "../src/services";
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
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </StoreProvider>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
