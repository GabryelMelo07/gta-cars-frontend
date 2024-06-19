import React from 'react';

const Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    {text}
  </button>
);

export default Button;
