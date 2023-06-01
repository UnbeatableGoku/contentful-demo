import React from 'react';

const FooterLogo = ({ props }) => {
  const img = props && props.footerLogo.url;
  const title = props && props.title;
  const details = props && props.logoDetails;

  return (
    <div className='flex flex-col  '>
      <div>
        <img src={img} alt={title} />
      </div>
      <div className='text-left pt-5 text-gray-400'>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default React.memo(FooterLogo);
