import React, { useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useCategory from '../../hooks/useCategory';
import CategoryList from './CategoryList';

const Category = () => {
  const { data } = useCategory();
  const [category, setCategory] = useState();

  useEffect(() => {
    if (data) {
      setCategory(data.accelerateMain.topCategoriesCollection.items);
    }
  }, [data]);

  return (
    <div className='mx-auto px-3 max-w-7xl'>
      <div className='py-10 text-3xl'>Shop By Categories</div>
      {data && category && category.length > 0 && (
        <div className='flex'>
          <Swiper
            slidesPerView={2}
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
            {category.map((item, index) => (
              <SwiperSlide key={index}>
                <CategoryList props={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Category;
