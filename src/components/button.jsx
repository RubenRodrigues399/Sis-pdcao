import React from 'react';

const Button = (Text, onClick, Type = "button") => {
    return (
        <button
        type={Type}
        onClick={onClick}
        className="flex w-full justify-center rounded-md bg-[#21aeb8] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {Text}
      </button>
    );       
};

export default Button;