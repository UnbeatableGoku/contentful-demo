import React, { useEffect, useState } from 'react';
import useCopyright from '../../hooks/useCopyright';

const Copyright = () => {
  const { data } = useCopyright();
  const [copyright, setCopyright] = useState();
  useEffect(() => {
    if (data) {
      setCopyright(data.footerLevel3CopyrightsCollection.items);
    }
  }, [data]);
  return (
    <div className='bg-[#191919] p-6 text-gray-400 text-xs'>
      <div>{copyright && copyright.length > 0 && copyright[0].copyright}</div>
    </div>
  );
};

export default Copyright;
