import React, { useState } from 'react';

const Language: React.FC = () => {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setIsArabic((prev) => !prev);
  };

  return (
    <div className="flex flex-row ml-auto mt-[1rem] mr-[1rem] bg-red-400 w-fit">
      {isArabic ? (
        <button onClick={toggleLanguage}>
          <img src="english.svg" alt="English" className="w-[2rem] object-contain" />
        </button>
      ) : (
        <button onClick={toggleLanguage}>
          <img src="arab.svg" alt="Arabic" className="w-[2rem] object-contain" />
        </button>
      )}
    </div>
  );
};

export default Language;
