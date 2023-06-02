import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useOfferBanner from '../../../hooks/useOfferBanner';

const OfferBanner = () => {
  const { data } = useOfferBanner();
  const [offerBanner, setOfferBanner] = useState();

  useEffect(() => {
    if (data) {
      setOfferBanner(data.bannerCollection.items);
    }
  }, [data]);

  return (
    <div className='max-w-7xl px-3  mx-auto '>
      {data && offerBanner && offerBanner.length > 0 ? (
        <div className=' pt-10 flex flex-col sm:flex-row '>
          {offerBanner.map((item, index) => (
            <div key={index} className='w-full mx-0 sm:mx-2 sm:mt-5 '>
              <Link to={`c/${item.bannerRef}`}>
              <img className='w-full' src={item.bannerUrl.url} alt={item.bannerAlt} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <>..loading</>
      )}
    </div>
  );
};

export default OfferBanner;
