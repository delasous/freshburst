import Link from 'next/link'

export default function Nav () {
  return (
    <>
      <div class='flex items-start justify-end row-start-3 col-span-1'>
        <h2 class='text-3xl text-secondary'>
          <Link href='shorts'>
            <a>
              shorts//
            </a>
          </Link>
         </h2>
      </div>
  </>
  )
}
