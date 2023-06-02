import { useQuery } from '@apollo/client';
import { FOOTER_THREE } from '../queries';

const useCopyright = () => {
  const { data } = useQuery(FOOTER_THREE);
  return { data };
};

export default useCopyright;
