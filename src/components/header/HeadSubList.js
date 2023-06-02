import React from 'react';
import { Link } from 'react-router-dom';
import HeadValue from './HeadValue';

const HeadSubList = ({ props }) => {
  return (
    <div className='pe-20 text-left '>
      <strong className='hover:text-red-600'>
        <Link to={`c/${props.slug}`}>{props.title}</Link>
      </strong>
      <div>
        {props.subItemsCollection &&
          props.subItemsCollection.items.map((item, index) => (
            <HeadValue props={item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default HeadSubList;
