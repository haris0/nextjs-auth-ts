import '@styles/globals.scss';
import '@components/navbar.scss';
import type { AppProps } from 'next/app';
import Navbar from '@components/navbar';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Navbar />
    <Component {...pageProps} />
  </>
);

export default MyApp;
