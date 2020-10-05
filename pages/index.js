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
      <div className='flex items-start justify-end row-start-3 col-span-1'>
        <Nav />
      </div>
      <div className='row-start-3 col-start-2 col-span-2'>
        <ShortsList content={posts} />
      </div>
    </>
 )
}

Home.getLayout = page => <Layout>{page}</Layout>;

export default Home;
