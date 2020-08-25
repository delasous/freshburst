import Logo from './Logo'

const Layout = ({ children }) => {
  return(
    <>
    <main>
      <div className='container'>
        <Logo />
        {children}
      </div>
    </main>
      <style jsx>{`
        .container {
          height: 100vh;
          display: grid;
          grid-template-columns: 250px 1fr 1fr;
          grid-template-rows: 1fr 1fr minmax(50px, auto)  1fr 1fr;
        }
      `}</style>
      <style jsx global>{`
        html,
        body,
        h2 {
          padding: 0;
          margin: 0;
          background-color: #f7f7f7;
          font-family: 'Hepta Slab', serif;
        }
        * {
          box-sizing: border-box;
        }
    `}</style>
    </>
  )
};

export default Layout;
