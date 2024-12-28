import { ICourseSize } from '@/interfaces/types'
import React from 'react'

const CurseSize: React.FC<ICourseSize> = ({size, tokens, featureOne, featureTwo, featureThree, featureFour}) => {
  return (
    <div className='flex flex-col bg-gradient-to-b from-[#F0F0F0] to-[#DDDDDD] pt-[0.8rem] pb-[1rem] pl-[1rem] pr-[0.8rem] rounded-[12px]'>
        <div className='flex flex-row items-center'>
            <p className='font-roboto font-normal text-[0.9rem] text-black mr-2'> {size} </p>
            <input 
                type="checkbox" 
                className='appearance-none ml-auto align-middle w-4 h-4 border-[0.1px] bg-white border-solid border-[#636363] rounded-full checked:bg-[#636363]'
            />
        </div>
        <div className='relative flex flex-col'>
            <h1 className='font-roboto font-semibold text-[1rem] text-black mb-[0.1rem]'> {tokens} </h1>
            <p className='flex flex-row font-roboto font-normal text-[0.9rem] text-black mt-[0.6rem] '> 
                <img src="Check.svg" alt="" className='mr-[0.5rem]' />
                {featureOne} 
            </p>
            <p className='flex flex-row  font-roboto font-normal text-[0.9rem] text-black ' > 
                <img src="Check.svg" alt="" className='mr-[0.5rem]' />
                {featureTwo} 
            </p>
            <p className='flex flex-row  font-roboto font-normal text-[0.9rem] text-black '> 
                <img src="Check.svg" alt="" className='mr-[0.5rem]' />               
                {featureThree} 
            </p>
            <p className='flex flex-row  font-roboto font-normal text-[0.9rem] text-black '> 
                <img src="Check.svg" alt="" className='mr-[0.5rem]' />
                {featureFour} 
            </p>
        </div>
    </div>
  )
}

export default CurseSize