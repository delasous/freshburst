import Link from 'next/link'

export default function Logo () {
  return (
      <div className='w-40 max-h-30'>
        <Link href='/'>
        <h1 className='p-10 font-shrikhand font-bold text-5xl text-center leading-12 cursor-pointer xsm:grid xsm:grid-rows-2'>
          <span className='bg-cliptext-swirl hover:text-secondary md:py-10'> fresh</span>
          <span className='bg-cliptext-swirl hover:text-secondary md:py-10'>burst</span>
        </h1>
        </Link>
      </div>
  )
}