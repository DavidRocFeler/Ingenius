import React, { useState } from 'react'

const Login: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(false)

  const handleShowLoginForm = () => {
    setShowLoginForm(true)
  }

  return (
    <div className=' w-[80%] m-auto'>
      <div className="p-4 flex flex-row w-fit m-auto mt-7">
          <button 
            onClick={handleShowLoginForm}
            className="px-[2rem] py-[0.5rem] rounded-[12px] font-roboto font-bold text-[0.9rem] text-black mr-1 m-auto border-solid border-[1px] border-black"
          >
              Log in
          </button>
       
      </div>
     { showLoginForm && ( <section className='duration-1000 ease-in-out animate-fadeIn'>
        <form action=""
          className='flex flex-col mt-[2rem]'
        >
          <input type="text" 
            placeholder='Email'
            className='border-black text-right bg-transparent font-roboto text-[#888888] text-[0.9rem] font-normal border-[0.1px] border-solid mt-[1rem] pt-[0.3rem] pb-[0.3rem] pl-[0.5rem] pr-[0.5rem] rounded-[12px]'
          />
          <input type="password" 
          placeholder='Password'
            className='border-black text-right bg-transparent font-roboto text-[#888888] text-[0.9rem] font-normal border-[0.1px] border-solid mt-[1rem] pt-[0.3rem] pb-[0.3rem] pl-[0.5rem] pr-[0.5rem] rounded-[12px]'
          />
          <button className='border-black  font-roboto text-[#888888] text-[0.9rem] font-normal test- cursor-pointer transition transform active:scale-95 active:shadow-sm text-right bg-transparent border-[0.1px] border-solid mt-[1rem] pt-[0.3rem] pb-[0.3rem] pl-[0.5rem] pr-[0.5rem] rounded-[12px]
          hover:bg-black hover:text-black duration-300 ease-in-out
          '>
            Log in
          </button>
        </form>
        <div className='flex flex-col'>
          <p className='mt-[2rem] font-roboto text-[0.9rem] text-right text-black'> You still don&#39;t have an account available? 
            
          </p>
          <button className='mt-[1rem] left-[3rem] font-bold font-roboto text-[0.9rem] text-black text-right'> Sign up </button>
        </div>
      </section>)}
   </div> 
  )
}

export default Login