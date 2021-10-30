import React from 'react';

const buttonStyle = {
  margin: '10px 0',
  backgroundColor: 'rgb(46, 46, 173)',
  maxWidth: '155px',
  color: 'white',
  borderRadius: '10px',
  maxHeight: '50px',
  fontSize: '15px'
};

const Button = ({ label, handleClick }) => (
  <button
    className="btn btn-default"
    style={buttonStyle}
    onClick={handleClick}
  >
    {label}
  </button>
);

export default Button;