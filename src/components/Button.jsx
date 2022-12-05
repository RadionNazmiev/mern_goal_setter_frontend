import React from 'react';

const Button = ({ icon, type, onClick, title, styles }) => {
  return (
    <button type={type} onClick={onClick} className={styles}>
      {icon ? icon : <></>}
      <p>{title}</p>
    </button>
  );
};

export default Button;
