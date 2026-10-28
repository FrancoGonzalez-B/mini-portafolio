import { Link } from 'react-router-dom'

const destacados = [
  { icono: '</>', titulo: 'Desarrollo Frontend' },
  { icono: '🖥️', titulo: 'Proyectos Reales' },
  { icono: '📚', titulo: 'Aprendizaje Continuo' },
  { icono: '⭐', titulo: 'Compromiso y Pasión' },
]

function Inicio() {
  return (
    <>
      <section className="hero">
        <div className="hero-texto">
          <h1>Hola, soy Franco</h1>
          <h2>Desarrollador/a Frontend</h2>
          <p>
            Bienvenido a mi portafolio. Aquí puedes conocer más sobre mí,
            mis habilidades y proyectos.
          </p>
          <Link to="/proyectos" className="boton">Explorar</Link>
        </div>
        <div className="imagen-placeholder">🖼️</div>
      </section>

      <section className="destacados">
        {destacados.map((d) => (
          <div key={d.titulo} className="destacado">
            <span className="icono">{d.icono}</span>
            <p>{d.titulo}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default Inicio