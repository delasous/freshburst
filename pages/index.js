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
      <div className='flex items-start sm:justify-start md:justify-end sm:items-end md:items-start sm:items-end sm:row-start-2 md:row-start-3 sm:col-end-2 md:col-span-1 sm:ml-4'>
        <Nav />
      </div>
      <div className='row-start-3 sm:col-start-1 sm:col-span-1 md:col-start-2 md:col-span-2'>
        <ShortsList content={posts} />
      </div>
    </>
 )
}

Home.getLayout = page => <Layout>{page}</Layout>;

export default Home;
