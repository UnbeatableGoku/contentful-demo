import React from 'react';
import { Link } from 'react-router-dom';

const HeadValue = ({ props }) => {
  return (
    <li className='font-extralight text-sm hover:text-red-600 '>
      <Link to={`c/${props.slug}`}>{props.title}</Link>
    </li>
  );
};

export default HeadValue;
