export default function Logo () {
  return (
  <>
    <div className='container'>
      <div className='logo-container'>
        <img src='/explode-crop-1.gif' alt='exploding burst' className='logo'/>
      </div>
      <h1>fresh burst</h1>
    </div>
    <style jsx>{`
    .logo-container {
      display: block;
      width: 110px;
      height: 110px;
    }

    .logo {
      max-width: 150px;
      max-height: 150px
    }

    .container {
      display: flex;
      justify-content: center;
      grid-row: 1;
      grid-column: 1 / 1;
    }

    .container h1 {
      font-weight: 400;
      color: #212121;
      font-size: 2.5em;
      margin: 10px 0 10px 5px;
    }

  `}</style>
  </>
  )
}
