import { useState, useEffect } from 'react'

const Error = ({mensaje}) => {
    return (
        <div className='text-red-600 text-center font-bold'>
            <p>
                {mensaje}
            </p>

        </div>
    )
}

export default Error