import App from 'next/app';
import Head from 'next/head';
import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import Layout from '../components/Layout'

import '../style.css';

class MyApp extends App {
  render(){
    const { Component, pageProps, router } = this.props;

    return(
      <div>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@200;400;700&display=swap" rel="stylesheet" type="text/css" />
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </div>
    )
  }
}

export default MyApp
