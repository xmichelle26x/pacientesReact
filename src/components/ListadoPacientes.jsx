// import { useEffect } from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll' >

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patients list</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Manage your {''}
            <span className="text-indigo-400 font-bold">Patients and appointments</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}

            />
          ))}
        </>
      ) :
        <>
          <h2 className="font-black text-3xl text-center">No patients</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Start adding patients {''}
            <span className="text-indigo-400 font-bold">they will be shown here</span>
          </p>
        </>
      }
    </div>
  )
}

export default ListadoPacientes