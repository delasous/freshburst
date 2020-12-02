import Link from 'next/link'

export default function Nav () {
  return (
    <ul className='xsm:px-10'>
      <li>
        <Link href='shorts'>
          <h3 className='text-3xl text-blue hover:text-white hover:bg-blue'>
          <a>
            shorts//
          </a>
          </h3>
        </Link>
      </li>
    </ul>
  )
}
