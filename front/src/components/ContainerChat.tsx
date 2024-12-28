import React from 'react'
import { IMessageProps } from '@/interfaces/types'

const ContainerUserChat: React.FC<IMessageProps> = ({message}) => {

  return (
    <div className='w-[80%] mt-[2rem] ml-auto '>
        <div className='ml-auto  flex flex-col bg-gradient-to-b from-[#F0F0F0] to-[#DDDDDD] w-fit pt-[0.8rem] pb-[0.8rem] pl-[0.8rem] pr-[0.8rem] rounded-[12px]' >
            <p className='font-roboto text-black text-[0.9rem] font-normal'> {message} </p>
            <div className='cursor-pointer flex flex-row justify-center items-center text-[#2D2D2D] font-roboto font-semibold ml-auto mt-[0.5rem]' >
                <img src="Edit.svg" alt="" />
                <span className='ml-[0.5rem] font-roboto text-black text-[0.9rem] font-semibold' > Edit </span>
            </div>
        </div>
    </div>
  )
}

export default ContainerUserChat