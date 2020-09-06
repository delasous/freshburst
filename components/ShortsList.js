import Link from 'next/link'

export default function ShortsList (posts) {
  const content = posts.content.map((t, ix) => {
    return (
      <>
        <li key={ix} class='text-3xl font-thin py-0 px-1 mx-3'>
          <Link href={t.link}>
            <a class='no-underline bg-primary hover:bg-blue text-secondary hover:text-white'>{t.module.meta.title}</a>
          </Link>
        </li>
      </>
    );
  })
  //add <article> tags?

  return (
    <>
    <div class='row-start-3 col-start-2 col-span-2'>
      <ul class='flex flex-wrap items-start sm:justify-start md:justify-around flex-2 list-none m-0'>
        {content}
      </ul>
    </div>
    </>
  );
}
