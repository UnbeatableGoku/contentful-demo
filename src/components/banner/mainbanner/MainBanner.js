import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import useMainBanner from '../../../hooks/useMainBanner';

const MainBanner = () => {
  const { data } = useMainBanner();
  const [mainBanner, setMainBanner] = useState();

  useEffect(() => {
    if (data) {
      setMainBanner(data.bannerCollection.items);
    }
  }, [data]);

  return (
    <div className=''>
      <Swiper pagination={true} modules={[Pagination]}>
        {data && mainBanner && mainBanner.length > 0 ? (
          mainBanner.map((item,index) => (
            <SwiperSlide key={index}>
              <div>
                <img src={item.bannerUrl.url} />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <>...loading</>
        )}
      </Swiper>
    </div>
  );
};

export default MainBanner;
