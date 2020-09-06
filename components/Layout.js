import Logo from './Logo'

const Layout = ({ children }) => {
  return(
    <main>
      <div className='h-screen grid grid-rows-center grid-cols-main m-1'>
        <Logo />
        {children}
      </div>
    </main>
  )
};

export default Layout;
