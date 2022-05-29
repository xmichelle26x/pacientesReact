import React from 'react'

const ListadoPacientes = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5'>
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Admisnitra tus {''}
        <span className="text-indigo-400 font-bold">Pacientes y Citas</span>
      </p>

      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span>Billy</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span>Mishell</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span>correo@correo.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <span>10 Diciembre de 2022</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            molestias consectetur asperiores nesciunt eveniet, porro, dolores cupiditate
            magni cum esse ut odio quo eligendi quae. Sapiente molestias vero deserunt
            animi!</span>
        </p>

      </div>

    </div>)
}

export default ListadoPacientes