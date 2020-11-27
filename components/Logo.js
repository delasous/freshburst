import Link from 'next/link'

export default function Logo () {
  return (
      <div className='w-40 max-h-24'>
        <Link href='/'>
        <h1 className='p-10 font-bold text-4xl text-center leading-10 cursor-pointer xsm:grid xsm:grid-rows-2'>
          <span className='bg-cliptext-swirl hover:text-secondary md:py-10'> fresh</span>
          <span className='bg-cliptext-swirl hover:text-secondary md:py-10'>burst</span>
        </h1>
        </Link>
      </div>
  )
}

//