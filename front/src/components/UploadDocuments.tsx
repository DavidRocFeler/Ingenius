import React from 'react'

const UploadDocuments: React.FC = () => {
  return (
    <div className='relative h-[12rem] w-[90%] flex flex-col justify-center items-center ml-auto bg-gradient-to-b from-[#F0F0F0] to-[#DDDDDD] rounded-[12px]' >
        <img src="UploadDocument.svg" alt="UploadDocument" className='w-[1rem] absolute top-[2.5rem]' />
        <div className="m-auto w-fit relative h-[2rem] top-[-0.5rem] cursor-none pl-[0.5rem] pr-[0.5rem]">
            <input
                className="cursor-none absolute opacity-0 inset-0 m-auto opacity-1 w-[7rem] z-10 pl-[0.5rem] pr-[0.5rem]"
                type="file"
            />
            <div className="pl-[0.5rem] pr-[0.5rem] font-roboto font-semibold text-[0.8rem] text-black flex items-center justify-center bg-transparent w-full h-[2rem] rounded-[12px] border-solid border-[#636363] border-[0.1px]">
                Upload document(s)
            </div>
        </div>
        <p className='absolute top-[7rem] text-[#5B5B5B] font-roboto font-normal text-[0.8rem]'> or drag it in </p>
        <p className='absolute top-[9.5rem] text-[#5B5B5B] font-roboto font-normal text-[0.8rem]'> Supported file types: PDF, DOC, DOCX, Pages </p>
  </div>
  )
}

export default UploadDocuments;