import App from 'next/app';
import Head from 'next/head';
import React from 'react';

import { StoreProvider } from 'easy-peasy';

import store from '../store/store';
import Layout from '../components/Layout';

import '../style.css';

class FreshApp extends App {
  render(){
    const { Component, pageProps } = this.props;

    const getLayout = Component.getLayout || (page => <Layout children={page} />)

    return getLayout(
      <>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@200;300;400;700&display=swap" rel="stylesheet" type="text/css" />
          <link href='https://fonts.googleapis.com/css2?family=Shrikhand&display=swap' rel="stylesheet" type="text/css" />
          <link href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,600;0,700;1,300;1,400;1,600&display=swap' rel="stylesheet" type="text/css" />
        </Head>
        <StoreProvider store={store}>
          <Component {...pageProps} />
        </StoreProvider>
      </>
    ) 
  }
}

export default FreshApp
