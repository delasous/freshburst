import App from 'next/app';
import Head from 'next/head';
import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import Layout from '../components/Layout'

const components = {
  wrapper: props => (
      <main style={{
        'display': 'grid',
        'grid-template-columns': '1fr',
        'font-family': 'Hepta Slab, serif',
        'grid-column': '2 / 4',
        'grid-row': '2',
    }}{...props} />
  ),
  h1: props => <h1 style={{'grid-column': '2', 'color':'#3332cc', 'font-weight': '200', 'font-size': '60px'}} {...props} />,
  p: props => <p style={{'grid-column': '2', 'font-weight': '200', 'line-height': '1.5em'}} {...props} />,
}

class MyApp extends App {
  render(){
    const { Component, pageProps, router } = this.props;

    return(
      <>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@200;400;700&display=swap" rel="stylesheet" type="text/css" />
        </Head>
        <Layout>
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </Layout>
      </>
    )
  }
}

export default MyApp
