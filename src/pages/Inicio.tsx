import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <section>
        <h1>Hola, soy Franco González</h1>
        <p>Bienvenido a mi portafolio. Soy un Estudiante de Ingeniería Civil en Informática. resiliente</p>
        <Link to="/proyectos">Mira mis proyectos →</Link>
    </section>
  )
}

export default Inicio