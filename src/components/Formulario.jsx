import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => { //destructuring

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)


  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      console.log(paciente)
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])


  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay al menos un campo vacío')
      setError(true)
      return;
    }
    setError(false)


    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }


    if (paciente.id) {
      //Editando registro
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map((pacienteState) => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      //Agregando registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente]); //nuevo arreglo, no toma el original y se modifica por setPaciente
    }
    //resetear form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes
      </h2>

      <p className="mt-5 text-center text-lg mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-400 font-bold">
          Adminístralos
        </span>
      </p>

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-2xl rounded-lg py-10 px-5 mb-10'>


        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input
            id='mascota'
            type="text"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            placeholder='Nombre de la mascota'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold mt-5'>Nombre Propietario</label>
          <input
            id='propietario'
            type="text"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            placeholder='Nombre del propietario'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold mt-5'>Email Propietario</label>
          <input
            id='email'
            type="email"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            placeholder='Email contacto propietario'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold mt-5'>Alta mascota</label>
          <input
            id='alta'
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold mt-5'>Síntomas</label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 mb-5"
            placeholder='Describe los síntomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-400 w-full p-3 rounded-md hover:bg-indigo-500 
          cursor-pointer text-white uppercase font-bold transition-colors"
          value={paciente.id ? 'Editar paciente' : 'Agregar paciente'} />

        {error && <Error mensaje='¡Todos los campos son obligatorios!' />}

      </form>

    </div>
  )
}

export default Formulario