import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'

const components = {
  h1: props => <h1 className='col-start-2 text-blue font-thin text-5xl' {...props} />,
  p: props => <p className='col-start-2 font-thin leading-7' {...props} />,
}

export default function Post({ meta, children }){
  return(
    <article className='grid grid-cols-1 col-start-2 col-span-2 row-start-4 pb-10 pr-10'>
      <Head>
        <title>{meta.title}</title>
      </Head>
        <MDXProvider components={components}>{children}</MDXProvider>
    </article>
  )
}
