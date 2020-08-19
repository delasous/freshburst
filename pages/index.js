import Head from 'next/head'
import Link from 'next/link'
//import About from '../components/banner';
//import Logo from '../components/Logo'

const mock = [
  { title: 'mt. baker', path: 'mt.-baker'},
  { title: 'a juicy second', path: 'a-juicy-second'},
  { title: 'a load of mackeral', path: 'a-load-of-mackerel'},
  { title: 'notes from a cafe#2', path: 'notes-from-a-cafe-2'},
  { title: 'tofino', path: 'tofino'},
]

function Logo () {
  return (
  <>
    <div className='logo-container'>
      <img src='/explode.gif' alt='exploding burst' className='logo'/>
    </div>
    <style jsx>{`
    .logo {
      display: block;
      max-width: 100%;
      height: auto;
    }

    .logo-container {
      display: block;
      grid-row: 1;
      grid-column: 1 / 1;
    }
  `}</style>
  </>
  )
}

function Nav () {
  return (
    <>
      <div className='nav-container'>
        <h2> shorts// </h2>
      </div>
      <style jsx>{`
      .nav-container {
        display: flex;
        align-items: start;
        justify-content: right;
        grid-row: 3;
        grid-column: 1 / 1;
      }

      .nav-container > h2 {
        font-size: 30px;
      }
    `}</style>
  </>
  )
}

function Titles (props) {
  const content = props.content.map((t, ix) => {
    return (
      <>
        <li key={ix} className='title'>
          <Link  href={`/posts/${t.path}.mdx`}>
            <a>{t.title}</a>
          </Link>
        </li>
        <style jsx>{`
          .title {
            width: auto;
            padding: 0 10px;
            font-weight: 200;
            font-size: 30px;
          },
          a {
            text-decoration: none;
            color: #2a2a2a;
          }
        `}</style>
      </>
    );
  })
  //add <article> tags?

  return (
    <>
    <div className='title-container'>
      <ul className='title-list'>
        {content}
      </ul>
    </div>
    <style jsx>{`
      .title-container {
        grid-row: 3;
        grid-column: 2 / 4;
      },
      .title-list {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: start;
        justify-content: space-around;
        flex: 2 1 auto;
        width: auto;
        height: auto;
        margin: 0;
      }
    `}</style>
    </>
  );
}

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
          <Titles content={mock} />
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
