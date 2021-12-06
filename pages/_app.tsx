import '@styles/globals.scss';
import '@components/navbar.scss';
import type { AppProps } from 'next/app';
import Navbar from '@components/navbar';
import { SessionProvider } from 'next-auth/react';

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => (
  <SessionProvider session={session}>
    <Navbar />
    <Component {...pageProps} />
  </SessionProvider>
);

export default MyApp;
