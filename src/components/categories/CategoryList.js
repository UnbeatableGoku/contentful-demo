import React from 'react';

const CategoryList = ({ props }) => {
  const img = props && props.image.url;
  const alt = props && props.alt;
  const title = props && props.title;
  return (
    <div>
      <div className='mx-3'>
        <img src={img} alt={alt} />
      </div>
      <div className='text-xl'>
        <div>{title}</div>
      </div>
    </div>
  );
};

export default CategoryList;
