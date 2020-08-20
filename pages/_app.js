import App from 'next/app';
import Head from 'next/head';
import React from 'react'
import {MDXProvider} from '@mdx-js/react'

const components = {
  wrapper: props => (
      <main style={{
        'display': 'grid',
        'grid-template-columns': '200px 1fr',
        'font-family': 'Hepta Slab, serif'
    }}{...props} />
  ),
  h1: props => <h1 style={{'grid-column': '2', 'color':'#3332cc', 'font-weight': '200', 'font-size': '60px'}} {...props} />,
  p: props => <p style={{'grid-column': '2', 'font-weight': '200', 'line-height': '1.5em'}} {...props} />,
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@200;400;700&display=swap" rel="stylesheet" type="text/css" />
      </Head>
      <MDXProvider components={components}>
        <main {...pageProps} />
        <Component {...pageProps} />
      </MDXProvider>
    </>
  )
}

export default MyApp
