export default function Nav () {
  return (
    <>
      <div className='nav-container'>
        <h2> shorts// </h2>
      </div>
      <style jsx>{`
      .nav-container {
        display: flex;
        align-items: start;
        justify-content: right;
        grid-row: 3;
        grid-column: 1 / 1;
      }

      .nav-container > h2 {
        font-size: 30px;
      }

    `}</style>
  </>
  )
}
