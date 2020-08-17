import App from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@200;400;700&display=swap" rel="stylesheet" type="text/css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
