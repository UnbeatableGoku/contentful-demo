import { useQuery } from '@apollo/client';
import { FOOTER_TWO } from '../queries';

const useFooterTwo = () => {
  const { data, error } = useQuery(FOOTER_TWO);
  if (error) {
    console.log(error.message);
  }
  return { data };
};

export default useFooterTwo;
