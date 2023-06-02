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
      <div className='mx-auto px-3 max-w-7xl pb-8'>
        <div className='py-5  sm:py-10 text-3xl'>Features Products</div>

        <div className=''>
          {data && featuredProducts && featuredProducts.length > 0 ? (
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              navigation
              modules={[Navigation]}
              breakpoints={{
                540: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
                1244: {
                  slidesPerView: 6,
                },
              }}
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
      </div>
    </>
  );
};

export default FeatureProduct;
