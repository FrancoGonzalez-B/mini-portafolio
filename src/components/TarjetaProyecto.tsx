type Props = {
  titulo: string
  descripcion: string
  enlace?: string
}

function TarjetaProyecto({ titulo, descripcion, enlace }: Props) {
  return (
    <article className="tarjeta">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      {enlace && (
        <a href={enlace} target="_blank" rel="noreferrer">
          Ver repositorio
        </a>
      )}
    </article>
  )
}

export default TarjetaProyecto