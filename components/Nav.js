import Link from 'next/link'

export default function Nav () {
  return (
    <ul>
      <li>
        <Link href='shorts'>
          <a className='text-3xl text-blue hover:text-white hover:bg-blue'>
            shorts//
          </a>
        </Link>
      </li>
    </ul>
  )
}
