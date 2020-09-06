import Link from 'next/link'

export default function Logo () {
  return (
    <div class='flex justify-center row-span-1 col-span-1'>
      <div class='block w-110 h-110'>
        <Link href='/'>
          <a>
            <img class='w-150 h-150 max-w-none' src='/explode-crop-1.gif' alt='exploding burst' />
          </a>
        </Link>
      </div>
      <div class='block w-110 h-110'>
        <h1 class='font-normal text-4xl text-secondary my-5 -ml-8'>fresh burst</h1>
      </div>
    </div>
  )
}
