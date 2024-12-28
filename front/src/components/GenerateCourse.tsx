import React from 'react'

const GenerateCourse: React.FC = () => {
  return (
    <>
        <button className='flex flex-row m-auto items-center text-black text-[1rem] font-roboto font-semibold pt-[0.5rem] pb-[0.5rem] pr-[1rem] pl-[1rem] rounded-[12px] bg-white border-solid border-[0.1px] border-[#636363] mt-[2rem] mb-[5rem]' >
            <img src="GenerateCourse.svg" alt="" className='mr-[0.5rem]' />
            Generate course outline
        </button>
    </>
  )
}

export default GenerateCourse