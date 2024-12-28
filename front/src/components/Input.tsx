'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Input: React.FC = () => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="w-[17.5rem] flex flex-row rounded-[26px] bg-white absolute bottom-[1rem] left-[1rem]
      sm:w-[25rem] xl:w-[40rem] sm:left-auto 
    ">
      {/* Textarea with auto-resize */}
      <textarea
        className="w-[92%] pl-[1rem] pt-[0.5rem] pb-[0.5rem]  rounded-[26px] resize-none overflow-hidden"
        value={text}
        onChange={handleChange}
        placeholder="type your message..."
        rows={1} // Initial row height
        style={{
          height: 'auto',
        }}
        onInput={(e) => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = 'auto'; // Reset height to auto
          target.style.height = `${target.scrollHeight}px`; // Set height based on content
        }}
      />
      <button className="relative z-20 left-[-0.5rem] sm:left-0
        xl:left-4
      ">
        <Image src="SendIcon.svg" alt="SendIcon" width={20} height={20} />
      </button>
    </div>
  );
};

export default Input;
