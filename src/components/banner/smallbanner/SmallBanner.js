import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div className=' max-w-7xl px-3  mx-auto flex flex-col sm:flex-row  '>
      {data && smallBanner && smallBanner.length > 0 ? (
        smallBanner.map((item, index) => (
          <div className='w-full sm:mx-2 sm:mt-5' key={index}>
            <Link to={`c/${item.bannerRef}`}>
              <img className='w-full' src={item.bannerUrl.url} />
            </Link>
          </div>
        ))
      ) : (
        <>...loading</>
      )}
    </div>
  );
};

export default SmallBanner;
