type Habilidad = { nombre: string; nivel: string }

const habilidades: Habilidad[] = [
  { nombre: 'HTML', nivel: 'Intermedio' },
  { nombre: 'CSS', nivel: 'Intermedio' },
  { nombre: 'JavaScript', nivel: 'Básico' },
  { nombre: 'React', nivel: 'Básico' },
  // agrega las tuyas con un nivel honesto
]

function Habilidades() {
  return (
    <section>
      <h1>Habilidades</h1>
      <ul>
        {habilidades.map((h) => (
          <li key={h.nombre}>
            <strong>{h.nombre}</strong> — {h.nivel}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Habilidades