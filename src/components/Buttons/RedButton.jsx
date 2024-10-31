import React from 'react';


const RedButton = ({ label, customStyle = '', onClick }) => {
  return (
    <button
      className={`bg-red-500 text-white mulishbold font-semibold py-2 px-4 rounded hover:bg-red-600 transition ${customStyle}`}
      onClick={onClick}
    >
      {label}
    </button>
    
  );
};

export default RedButton;
