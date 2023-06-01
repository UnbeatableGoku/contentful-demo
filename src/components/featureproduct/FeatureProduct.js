import React, { useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useFeature from '../../hooks/useFeature';
import FeaturedList from './FeaturedList';
import 'swiper/css';
import 'swiper/css/navigation';
import './custome-swiper.css';

const FeatureProduct = () => {
  const { data } = useFeature();
  const [featuredProducts, setfeaturedProducts] = useState();

  useEffect(() => {
    if (data) {
      setfeaturedProducts(data.accelerateMain.featureProductsCollection.items);
    }
  }, [data]);
  return (
    <>
      <div className='py-10 text-3xl'>Features Products</div>

      <div className='flex'>
        {data && featuredProducts && featuredProducts.length > 0 ? (
          <Swiper
            pagination={true}
            modules={[Navigation]}
            slidesPerView={6}
            className=''
            navigation={true}
          >
            {featuredProducts.map((item, index) => (
              <SwiperSlide key={index}>
                <FeaturedList props={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>...Loading</>
        )}
      </div>
    </>
  );
};

export default FeatureProduct;
