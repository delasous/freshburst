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
    </>
  )
};

export default Layout;
