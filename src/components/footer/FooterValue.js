import React from 'react';

const FooterValue = ({ props }) => {
  return (
    <>
      {props &&
        props.length > 0 &&
        props.map((item, index) => (
          <div key={index} className="ms-20 text-left">
            <div className='text-lg font-semibold text-gray-200'>{item.title}</div>
            <div>
              {item &&
                item.valueCollection &&
                item.valueCollection.items.length > 0 &&
                item.valueCollection.items.map((itemValue, index) => (
                  <div className=' leading-8 font-thin text-sm text-gray-400' key={index}>
                    {itemValue.title}
                  </div>
                ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default FooterValue;
