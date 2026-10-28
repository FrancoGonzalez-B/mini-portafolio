import TarjetaProyecto from '../components/TarjetaProyecto'

const proyectos = [
  {
    titulo: 'Portafolio Personal',
    descripcion: 'Portafolio Personal es un sitio web personal que muestra mis habilidades y proyectos como desarrollador frontend. Está construido con React, TypeScript y React Router.',
    enlace: 'https://github.com/FrancoGonzalez-B/portafolio-franco.git',
  },
  {
    titulo: 'Juego Arcade',
    descripcion: 'Un juego de arcade simple hecho con pygame y math.',
    enlace: 'https://github.com/FrancoGonzalez-B/EID1.git',
  },
]

function Proyectos() {
  return (
    <section>
      <h1>Mis Proyectos</h1>
      <p>Algunos de los proyectos en los que he trabajado.</p>
      {proyectos.map((p) => (
        <TarjetaProyecto
          key={p.titulo}
          titulo={p.titulo}
          descripcion={p.descripcion}
          enlace={p.enlace}
        />
      ))}
    </section>
  )
}

export default Proyectos