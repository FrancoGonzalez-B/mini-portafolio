import { NavLink } from 'react-router-dom'

type Props = { nombre: string }

function Header({ nombre }: Props) {
  return (
    <header className="header">
      <span className="logo">{nombre}</span>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/sobre-mi">Sobre mí</NavLink>
        <NavLink to="/habilidades">Habilidades</NavLink>
        <NavLink to="/proyectos">Proyectos</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  )
}

export default Header