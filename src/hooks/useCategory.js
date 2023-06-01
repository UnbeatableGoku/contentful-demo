import { useQuery } from '@apollo/client';
import { TOP_CATEGORIES } from '../queries';

const useCategory = () => {
  const { data, loading, error } = useQuery(TOP_CATEGORIES);
  if (error) {
    console.log(error.message);
  }
  return { data };
};

export default useCategory;
