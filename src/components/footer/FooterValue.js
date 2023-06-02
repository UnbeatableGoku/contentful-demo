import React from 'react';
import { Link } from 'react-router-dom';

const FooterValue = ({ props }) => {
  return (
    <>
      {props &&
        props.length > 0 &&
        props.map((item, index) => (
          <div key={index} className=' ms-5 sm:ms-24  text-left pb-4 sm:pb-0'>
            <div className='text-xl sm:text-lg  font-semibold text-gray-300'>
              {item.title}
            </div>
            <div>
              {item &&
                item.valueCollection &&
                item.valueCollection.items.length > 0 &&
                item.valueCollection.items.map((itemValue, index) => (
                  <div
                    className=' leading-8 font-thin text-sm text-gray-400 hover:text-red-600'
                    key={index}
                  >
                    <Link to={`/${itemValue.slug}`}>{itemValue.title}</Link>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default FooterValue;
