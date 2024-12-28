import { ISelectLearnersProps } from '@/interfaces/types';
import React from 'react'

const ChooseLearners: React.FC<ISelectLearnersProps> = ({number, title, paragraph}) => {
  return (
    <div className='relative flex flex-col bg-gradient-to-b from-[#F0F0F0] to-[#DDDDDD] w-fit pt-[0.8rem] pb-[3.5rem] pl-[1rem] pr-[0.8rem] rounded-[12px]'>
        <div className='flex flex-row items-center'>
            <p className='font-roboto font-normal text-[0.8rem] text-[#636363] mr-2'> {number} </p>
            <input 
                type="checkbox" 
                className='appearance-none ml-auto align-middle w-4 h-4 border-[0.1px] bg-white border-solid border-[#636363] rounded-full checked:bg-[#636363]'
            />
        </div>
        <div className='relative flex flex-col'>
            <h1 className='font-roboto font-normal text-[0.9rem] text-black'> {title} </h1>
            <h2 className='font-roboto font-normal text-[0.8rem] text-black mt-[0.6rem]'> Recomend for: </h2>
            <p className='font-roboto font-normal text-[0.8rem] text-[#636363] mt-[0.3rem]' > {paragraph} </p>
        </div>
        <p className='absolute bottom-[1rem] cursor-pointer font-roboto font-semibold text-[0.8rem] text-black mt-[0.6rem]'> Learn more </p>
    </div>
  )
}

export default ChooseLearners;
