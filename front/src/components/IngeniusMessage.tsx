import React from 'react'
import { IMessageProps } from '@/interfaces/types'
import SphericalWave from './SphericalWave'

const IngeniusMessage: React.FC<IMessageProps> = ({message}) => {
  return (
    <div className='flex flex-row w-[22rem] 
      sm:w-fit
    ' >
      <SphericalWave/>
      <p className='font-roboto font-medium text-[1rem] text-black' > {message} </p>
    </div>
  )
}

export default IngeniusMessage;