import React from 'react';

const HeadValue = ({ props }) => {
  return <li className='font-extralight text-sm hover:text-red-600 '>{props.title}</li>;
};

export default HeadValue;
