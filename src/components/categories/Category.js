import React, { useEffect, useState } from 'react';
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
    <div>
      <div className='py-10 text-3xl'>Shop By Categories</div>
      {data && category && category.length > 0 && (
        <div className='flex'>
          {category.map((item, index) => (
            <CategoryList props={item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
