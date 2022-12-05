import React from 'react';

const Title = ({ title, subtitle }) => {
  return (
    <div className='px-3 mb-10'>
      <h1 className='text-3xl font-semibold mb-3'>{title}</h1>
      <p className='text-xl font-semibold text-gray-500'>{subtitle}</p>
    </div>
  );
};

export default Title;
