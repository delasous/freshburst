import Link from 'next/link'

export default function Logo () {
  return (
    <div className='flex sm:justify-start md:justify-center row-span-1 col-span-1'>
      <div className='block w-110'>
        <Link href='/'>
          <a>
            <img className='w-150 h-150 max-w-none' src='/explode-crop-1.gif' alt='exploding burst' />
          </a>
        </Link>
      </div>
      <div className='w-110 block'>
        <h1 className='font-normal text-4xl text-secondary my-5 -ml-8 w-10'>fresh burst</h1>
      </div>
    </div>
  )
}
