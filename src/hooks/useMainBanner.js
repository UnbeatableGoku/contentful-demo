import { useQuery } from '@apollo/client';
import { MAIN_BANNER } from '../queries';

const useMainBanner = () => {
  const { data, error, loading } = useQuery(MAIN_BANNER);
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
export default useMainBanner;
