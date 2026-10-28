type Habilidad = { nombre: string; porcentaje: number }

const tecnologias: Habilidad[] = [
  { nombre: 'HTML', porcentaje: 90 },
  { nombre: 'CSS', porcentaje: 80 },
  { nombre: 'JavaScript', porcentaje: 70 },
  { nombre: 'React', porcentaje: 60 },
  { nombre: 'TypeScript', porcentaje: 50 },
  // pon tus habilidades y un nivel honesto
]

const herramientas = ['Git', 'GitHub', 'VS Code', 'Node.js']

function nivelTexto(p: number): string {
  if (p >= 80) return 'Avanzado'
  if (p >= 60) return 'Intermedio'
  return 'Básico'
}

function Habilidades() {
  return (
    <section>
      <h1>Habilidades y Lenguajes</h1>

      <h2>Tecnologías</h2>
      <div className="grid-habilidades">
        {tecnologias.map((t) => (
          <div key={t.nombre} className="habilidad">
            <strong>{t.nombre}</strong>
            <div className="barra">
              <div className="barra-relleno" style={{ width: `${t.porcentaje}%` }} />
            </div>
            <small>{nivelTexto(t.porcentaje)} · {t.porcentaje}%</small>
          </div>
        ))}
      </div>

      <h2>Herramientas</h2>
      <div className="chips">
        {herramientas.map((h) => (
          <span key={h} className="chip">{h}</span>
        ))}
      </div>
    </section>
  )
}

export default Habilidades