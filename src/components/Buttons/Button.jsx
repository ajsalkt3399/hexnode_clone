import React from 'react';


const Button = ({ label, customStyle = '', onClick }) => {
  return (
    <button
      className={` text-white mulishbold font-semibold py-2 px-4 rounded  transition ${customStyle}`}
      onClick={onClick}
    >
      {label}
    </button>
    
  );
};

export default Button;