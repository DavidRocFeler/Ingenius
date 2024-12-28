import { IMessageProps } from '@/interfaces/types'
import React from 'react'

const IngeniusParagraph: React.FC<IMessageProps> = ({message}) => {
  return (
    <div>
        <p className='font-roboto font-normal text-[0.9rem] text-[#636363] mt-[1rem]
        
        '> {message} </p>
    </div>
  )
}

export default IngeniusParagraph