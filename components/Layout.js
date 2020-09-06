import Logo from './Logo'

const Layout = ({ children }) => {
  return(
    <main>
      <div class='h-screen grid grid-rows-main grid-cols-main m-1'>
        <Logo />
        {children}
      </div>
    </main>
  )
};

export default Layout;
