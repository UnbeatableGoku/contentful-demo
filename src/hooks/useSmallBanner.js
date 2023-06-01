import { useQuery } from '@apollo/client';
import { SMALL_BANNER } from '../queries';

const useSmallBanner = () => {
  const { data, error, loading } = useQuery(SMALL_BANNER);
  if (loading) {
    // console.log(loading);
  }
  if (data) {
    // console.log(data);
  }
  if (error) {
    console.log(error.message);
  }
  return { data };
};
export default useSmallBanner;
