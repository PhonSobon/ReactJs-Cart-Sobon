import React from 'react';

const Button = ({ label, style }) => {
  return (
    <button type="button" className={`btn btn-${style}`}>
      {label}
    </button>
  );
};

export default Button;
