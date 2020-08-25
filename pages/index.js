import Head from 'next/head'

import Logo from '../components/Logo'
import Nav from '../components/Nav'
import ShortsList from '../components/ShortsList'
import getAllPostPreviews from '../components/getAllPostPreviews'

const posts = getAllPostPreviews();

const Home = () => {
  return(
  <>
    <Head>
      <title>The Fresh Burst</title>
      <link rel='icon' href='lemicon.png' />
    </Head>
      <body>
        <div className='container'>
          <Logo />
            <Nav />
          <ShortsList content={posts} />
        </div>
      </body>
      <style jsx>{`
        .container {
          height: 100vh;
          display: grid;
          grid-template-columns: 200px 1fr 1fr;
          grid-template-rows: 1fr 1fr minmax(50px, auto)  1fr 1fr;
        }
      `}</style>
      <style jsx global>{`
        html,
        body,
        h2 {
          padding: 0;
          margin: 0;
          background-color: #f7f7f7;
          font-family: 'Hepta Slab', serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
  </>
 )
}

export default Home;
