import Link from 'next/link'

export default function ShortsList (posts) {
  const content = posts.content.map((t, ix) => {
    return (
      <li key={ix} class='text-3xl font-thin py-0 px-1 mx-3'>
        <article>
          <Link href={t.link}>
            <a class='no-underline bg-primary hover:bg-blue text-secondary hover:text-white'>{t.module.meta.title}</a>
          </Link>
        </article>
      </li>
    );
  })

  return (
    <ul class='flex flex-wrap items-start flex-2 list-none sm:justify-start md:justify-around m-0'>
      {content}
    </ul>
  );
}
