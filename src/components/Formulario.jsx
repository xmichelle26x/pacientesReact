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
      console.log('Empty field')
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
        Patients Follow up
      </h2>

      <p className="mt-5 text-center text-lg mb-10">
        Add patients and {''}
        <span className="text-indigo-400 font-bold">
          Manage them
        </span>
      </p>

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-2xl rounded-lg py-10 px-5 mb-10'>


        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Pet name</label>
          <input
            id='mascota'
            type="text"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            placeholder='Pet name'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold mt-5'>Owner name</label>
          <input
            id='propietario'
            type="text"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            placeholder='Owner name'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold mt-5'>Owner Email</label>
          <input
            id='email'
            type="email"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            placeholder='Owner Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold mt-5'>Pet discharge date</label>
          <input
            id='alta'
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold mt-5'>Symptoms</label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 mb-5"
            placeholder='Describe the sympstoms'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-400 w-full p-3 rounded-md hover:bg-indigo-500 
          cursor-pointer text-white uppercase font-bold transition-colors"
          value={paciente.id ? 'Edit patient' : 'Add patient'} />

        {error && <Error mensaje='Please fill all the fields' />}

      </form>

    </div>
  )
}

export default Formulario