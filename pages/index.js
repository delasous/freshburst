import Head from 'next/head'

import Layout from '../components/Layout';

import Nav from '../components/Nav'
import ShortsList from '../components/ShortsList'

import { getRandomPostPreviews } from '../components/PostPreviews'
const posts = getRandomPostPreviews();

const Home = function() {
  return(
    <>
      <Head>
        <title>The Fresh Burst</title>
        <link rel='icon' href='lemicon.png' />
      </Head>
      <div className='flex items-start xsm:justify-start md:justify-end xsm:items-end md:items-start xsm:items-end xsm:row-start-2 md:row-start-3 xsm:col-end-2 md:col-span-1 '>
        <Nav />
      </div>
      <div className='row-start-3 xsm:col-start-1 xsm:col-span-1 md:col-start-2 md:col-span-4'>
        <ShortsList content={posts} />
      </div>
    </>
 )
}

Home.getLayout = page => <Layout>{page}</Layout>;

export default Home;
