import React from 'react'
import Image from 'next/image'

const IconHome: React.FC = () => {
  const handleClick = () => {
    window.location.href = 'https://www.ingenius.ai'
  }

  return (
    <div className='fixed top-[1rem] left-4 z-20'>
      <button 
        onClick={handleClick}
      >
        <Image
        src="HomeButton.svg" 
        alt="HomeButton" 
        width={30} 
        height={30}
        >
        </Image>
      </button>
    </div>
  )
}

export default IconHome