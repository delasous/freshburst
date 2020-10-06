import Logo from './Logo'

const Layout = ({ children }) => {
  return(
    <main>
      <div className='h-screen grid grid-rows-center sm:grid-cols-1 md:grid-cols-main grid-flow-row m-1'>
        <Logo />
        {children}
      </div>
    </main>
  )
};

export default Layout;
