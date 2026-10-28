type Props = { nombre: string }

function Footer({ nombre }: Props) {
  const anio = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>© {anio} {nombre}</p>
    </footer>
  )
}

export default Footer