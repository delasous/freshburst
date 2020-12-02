import Head from 'next/head';
import Link from 'next/link';

import { MDXProvider } from '@mdx-js/react';

const components = {
    h1: props => <h1 className='col-start-2 text-secondary text-3xl xsm:px-10' {...props} />,
    p: props => <p className='col-start-2 font-extralight text-lg leading-8 xsm:px-10 mb-6' {...props} />,
};

export default function PostLayout({ children, meta, next }){
    return (
     <article className='grid grid-cols-center justify-center col-start-2 col-span-2 row-start-4 pb-10 md:pr-10 xsm:ml-3 xsm:mr-0 md:mr-40 xl:mr-80'>
        <Head>
        <title>{meta.title}</title>
        </Head>
        <div className='col-span-5'>
        <MDXProvider components={components}>{children}</MDXProvider>
        </div>
        <div className='col-start-3 py-5'>
        <Link href={next.link}>
            <a>
            <img className='w-10 h-10 max-w-none' src='/lemicon.png' alt='next article fruiticon' />
            </a>
        </Link>
        </div>
     </article>
    )
}