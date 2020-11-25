import Link from 'next/link'

export default function Nav () {
  return (
    <ul className='xsm:px-10'>
      <li>
        <Link href='shorts'>
          <a className='text-3xl font-normal text-blue hover:text-white hover:bg-blue'>
            shorts//
          </a>
        </Link>
      </li>
    </ul>
  )
}
