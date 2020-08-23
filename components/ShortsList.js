import Link from 'next/link'

export default function ShortsList (posts) {
  const content = posts.content.map((t, ix) => {
    return (
      <>
        <li key={ix} className='title'>
          <Link  href={t.link}>
            <a>{t.module.meta.title}</a>
          </Link>
        </li>
        <style jsx>{`
          .title {
            width: auto;
            padding: 0 10px;
            font-weight: 200;
            font-size: 30px;
          }

          a {
            text-decoration: none;
            color: #2a2a2a;
            background-color: #f7f7f7;
          }

          li > a:hover {
            background-color: #3332cc;
            color: white;
          }
        `}</style>
      </>
    );
  })
  //add <article> tags?

  return (
    <>
    <div className='title-container'>
      <ul className='title-list'>
        {content}
      </ul>
    </div>
    <style jsx>{`
      .title-container {
        grid-row: 3;
        grid-column: 2 / 4;
      },
      .title-list {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: start;
        justify-content: space-around;
        flex: 2 1 auto;
        width: auto;
        height: auto;
        margin: 0;
      }
    `}</style>
    </>
  );
}
