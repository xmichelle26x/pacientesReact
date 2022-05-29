import React from 'react'

function Formulario() {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes
      </h2>

      <p className="mt-5 text-center text-lg mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-400 font-bold">
          Adminístralos
        </span>
      </p>

      <form className='bg-white shadow-2xl rounded-lg py-10 px-5 mb-10'>
        <div>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input
            id='mascota'
            type="text"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            placeholder='Nombre de la mascota'
          />
        </div>

        <div>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold mt-5'>Nombre Propietario</label>
          <input
            id='propietario'
            type="text"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            placeholder='Nombre del propietario'
          />
        </div>

        <div>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold mt-5'>Email Propietario</label>
          <input
            id='email'
            type="email"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            placeholder='Email contacto propietario'
          />
        </div>

        <div>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold mt-5'>Alta mascota</label>
          <input
            id='alta'
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
          />
        </div>

        <div>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold mt-5'>Alta mascota</label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 mb-5"
            placeholder='Describe los síntomas' />
        </div>

        <input
          type="submit"
          className="bg-indigo-400 w-full p-3 rounded-md hover:bg-indigo-500 
          cursor-pointer text-white uppercase font-bold transition-colors"
          value="Agregar paciente" />

      </form>

    </div>
  )
}

export default Formulario