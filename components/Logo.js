export default function Logo () {
  return (
  <>
    <div className='logo-container'>
      <img src='/explode-crop-1.gif' alt='exploding burst' className='logo'/>
    </div>
    <style jsx>{`
    .logo {
      display: block;
      width: auto;
      height: auto;
    }

    .logo-container {
      display: flex;
      grid-row: 1;
      justify-content: center;
      grid-column: 1 / 1;
    }

  `}</style>
  </>
  )
}
