import React from 'react';

const FooterDownloads = ({ props }) => {
  console.log(props);

  return (
    <div className='flex flex-col sm:flex-row items-start sm:items-center '>
      <div className='me-0 sm:me-3   sm:mt-3 mt-0 text-xl sm:text-base ms-3 sm:ms-0'>
        DOWNLOAD APP ON
      </div>
      <div className='flex items-start sm:items-center '>
        {props &&
          props.length > 0 &&
          props.map((item, index) => (
            <div key={index} className='ms-4 '>
              <img src={item.url} alt={item.title} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default FooterDownloads;
