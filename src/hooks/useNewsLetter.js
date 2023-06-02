import { useQuery } from '@apollo/client';
import { FOOTER_ONE } from '../queries';

const useNewsLetter = () => {
  const { data } = useQuery(FOOTER_ONE);
  return { data };
};

export default useNewsLetter;
