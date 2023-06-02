import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = ({ props }) => {
  const img = props && props.image.url;
  const alt = props && props.alt;
  const title = props && props.title;
  console.log(props);
  return (
    <div>
      <div className='mx-3'>
        <Link to={`c/${props.categoryItem.slug}`}>
          <img src={img} alt={alt} />
        </Link>
      </div>
      <div className='text-xl'>
        <div>{title}</div>
      </div>
    </div>
  );
};

export default CategoryList;
