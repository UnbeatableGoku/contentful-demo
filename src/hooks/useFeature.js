import { useQuery } from '@apollo/client';
import React from 'react';
import { FEATURED_PRODUCTS } from '../queries';

const useFeature = () => {
  const { data, error } = useQuery(FEATURED_PRODUCTS);
  if (error) {
    console.log(error.message);
  }
  return{data}
};

export default useFeature;
