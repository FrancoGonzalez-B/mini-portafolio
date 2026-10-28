type Props = {
  titulo: string
  descripcion: string
  enlace?: string
}

function TarjetaProyecto({ titulo, descripcion, enlace }: Props) {
  return (
    <article className="tarjeta">
      <div className="imagen-placeholder">🖼️</div>
      <div>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        {enlace && (
          <a href={enlace} target="_blank" rel="noreferrer" className="boton">
            Ver proyecto →
          </a>
        )}
      </div>
    </article>
  )
}

export default TarjetaProyecto