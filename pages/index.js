import Head from 'next/head'

import Logo from '../components/Logo'
import Nav from '../components/Nav'
import ShortsList from '../components/ShortsList'
import { getRandomPostPreviews } from '../components/PostPreviews'

const posts = getRandomPostPreviews();

export default function Home() {
  return(
  <>
    <Head>
      <title>The Fresh Burst</title>
      <link rel='icon' href='lemicon.png' />
    </Head>
    <Nav />
    <ShortsList content={posts} />
  </>
 )
}
