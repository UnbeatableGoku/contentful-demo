import React, { useState } from 'react';
import HeadSubList from './HeadSubList';

const HeaderList = ({ props }) => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <li
      className=' text-lg border-b-4 border-transparent hover:border-b-red-700 '
      onMouseOver={() => setShowMegaMenu(true)}
      onMouseOut={() => setShowMegaMenu(false)}
    >
      <div className='flex items-center p-2 sm:p-4 '>
        <span className='uppercase'>{props.title}</span>
        <svg
          className='ms-3 '
          fill='white'
          height='12px'
          width='12px'
          version='1.1'
          id='Layer_1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 330 330'
        >
          <path
            id='XMLID_225_'
            d='M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
          c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
          s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z'
          />
        </svg>
      </div>
      {props.subItemCollection && showMegaMenu && (
        <div className=' text-black bg-white shadow flex absolute z-20 w-full max-w-4xl left-0 right-0 p-6 mx-auto pb-40 top-16  '>
          {props.subItemCollection.items.map((item,index) => (
            <HeadSubList props={item} key={index}/>
          ))}
        </div>
      )}
    </li>
  );
};

export default HeaderList;
