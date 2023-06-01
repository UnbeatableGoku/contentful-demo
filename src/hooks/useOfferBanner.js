import { useQuery } from '@apollo/client';
import React from 'react';
import { OFFER_BANNER } from '../queries';

const useOfferBanner = () => {
  const { data, error } = useQuery(OFFER_BANNER);
  if (error) {
    console.log(error.message);
  }
  return { data };
};

export default useOfferBanner;
