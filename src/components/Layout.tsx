import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  const nombre = 'Franco González'
  return (
    <>
      <Header nombre={nombre} />
      <main className="contenedor">
        <Outlet />
      </main>
      <Footer nombre={nombre} />
    </>
  )
}

export default Layout