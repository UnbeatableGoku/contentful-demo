import React, { useEffect, useState } from 'react';
import useSmallBanner from '../../../hooks/useSmallBanner';

const SmallBanner = () => {
  const { data } = useSmallBanner();
  const [smallBanner, setSmallBanner] = useState();

  useEffect(() => {
    if (data) {
      setSmallBanner(data.bannerCollection.items);
    }
  }, [data]);

  return (
    <div className=' mx-auto flex  '>
      {data && smallBanner && smallBanner.length > 0 ? (
        smallBanner.map((item, index) => (
          <div className='mx-2 mt-5' key={index}>
            <img src={item.bannerUrl.url} />
          </div>
        ))
      ) : (
        <>...loading</>
      )}
    </div>
  );
};

export default SmallBanner;
