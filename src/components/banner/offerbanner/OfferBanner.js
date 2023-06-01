import React, { useEffect, useState } from 'react';
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
    <div>
      {data && offerBanner && offerBanner.length > 0 ? (
        <div className='flex pt-10'>
          {offerBanner.map((item, index) => (
            <div key={index} className='m-3'>
              <img src={item.bannerUrl.url} alt={item.bannerAlt} />
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
