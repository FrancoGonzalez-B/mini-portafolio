import TarjetaProyecto from '../components/TarjetaProyecto'

const proyectos = [
  {
    titulo: 'Portafolio Personal',
    descripcion: 'Un portafolio web que muestra mis proyectos y habilidades.',
    enlace: 'https://github.com/FrancoGonzalez-B/portafolio-franco.git',
  },
  {
    titulo: 'Videojuego Arcade',
    descripcion: 'Un videojuego clásico de tipo arcade desarrollado con math y pygame.',
    enlace: 'https://github.com/FrancoGonzalez-B/EID1.git',
  },
]

function Proyectos() {
  return (
    <section>
      <h1>Proyectos</h1>
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