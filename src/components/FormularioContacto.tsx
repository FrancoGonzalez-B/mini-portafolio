import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

type Datos = { nombre: string; correo: string; mensaje: string }
type Errores = Partial<Record<keyof Datos, string>>

const inicial: Datos = { nombre: '', correo: '', mensaje: '' }

function FormularioContacto() {
  const [datos, setDatos] = useState<Datos>(inicial)
  const [errores, setErrores] = useState<Errores>({})
  const [enviado, setEnviado] = useState(false)

  const manejarCambio = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setDatos({ ...datos, [name]: value })
  }

  const validar = (): Errores => {
    const nuevos: Errores = {}
    if (!datos.nombre.trim()) nuevos.nombre = 'El nombre es obligatorio'
    if (!datos.correo.trim()) {
      nuevos.correo = 'El correo es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo)) {
      nuevos.correo = 'El correo no tiene un formato válido'
    }
    if (!datos.mensaje.trim()) nuevos.mensaje = 'El mensaje es obligatorio'
    return nuevos
  }

  const manejarEnvio = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nuevos = validar()
    setErrores(nuevos)
    if (Object.keys(nuevos).length === 0) {
      setEnviado(true)
      setDatos(inicial)
    } else {
      setEnviado(false)
    }
  }

  return (
    <form onSubmit={manejarEnvio} noValidate>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" name="nombre" value={datos.nombre} onChange={manejarCambio} />
        {errores.nombre && <p className="error">{errores.nombre}</p>}
      </div>

      <div>
        <label htmlFor="correo">Correo</label>
        <input id="correo" name="correo" value={datos.correo} onChange={manejarCambio} />
        {errores.correo && <p className="error">{errores.correo}</p>}
      </div>

      <div>
        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" value={datos.mensaje} onChange={manejarCambio} />
        {errores.mensaje && <p className="error">{errores.mensaje}</p>}
      </div>

      <button type="submit">Enviar</button>

      {enviado && <p className="exito">¡Gracias! Tu mensaje fue enviado.</p>}
    </form>
  )
}

export default FormularioContacto