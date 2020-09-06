import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'

const components = {
  h1: props => <h1 class='col-start-2 text-blue font-thin text-5xl' {...props} />,
  p: props => <p class='col-start-2 font-thin leading-7' {...props} />,
}

export default function Post({ meta, children }){
  return(
    <article class='grid grid-cols-1 col-start-2 col-span-2 row-start-4'>
      <Head>
        <title>{meta.title}</title>
      </Head>
        <MDXProvider components={components}>{children}</MDXProvider>
    </article>
  )
}
