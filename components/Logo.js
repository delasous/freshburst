import Link from 'next/link'

export default function Logo () {
  return (
      <div className='w-40 max-h-24'>
        <Link href='/'>
        <h1 className='p-10 font-bold text-4xl text-center leading-10 cursor-pointer xsm:inline-block xsm:bg-cliptext-swirl'>
          <span className='w-auto xsm:float-left md:bg-cliptext-swirl hover:text-secondary'> fresh</span>
          <span className='w-auto xsm:clear-left md:bg-cliptext-swirl hover:text-secondary'>burst</span>
        </h1>
        </Link>
      </div>
  )
}