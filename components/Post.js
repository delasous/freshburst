import Head from 'next/head'
import Link from 'next/link'
import { MDXProvider } from '@mdx-js/react'

const components = {
  h1: props => <h1 className='col-start-2 text-blue font-thin text-5xl' {...props} />,
  p: props => <p className='col-start-2 font-thin leading-7' {...props} />,
}

export default function Post({ meta, children }){
  return(
    <article className='grid grid-cols-center justify-center col-start-2 col-span-2 row-start-4 pb-10 pr-10'>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className='col-span-5'>
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
      <div className='col-start-3 py-5'>
        <Link href='/'>
          <a>
            <img className='w-10 h-10 max-w-none' src='/lemicon.png' alt='next article fruiticon' />
          </a>
        </Link>
      </div>
    </article>
  )
}
