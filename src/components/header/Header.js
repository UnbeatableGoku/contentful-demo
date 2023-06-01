import React, { useEffect, useState } from 'react';
import useContentFul from '../../hooks/useContentFul';
import _ from 'lodash';
import HeaderList from './HeaderList';

const Header = () => {
  const { newData } = useContentFul();
  const [navbarData, setNavbarData] = useState();

  useEffect(() => {
    if (newData) {
      setNavbarData(newData.accelerateMain.navbarCollection.items);
    }
  }, [newData]);
  return (
    <div>
      <div>
        {newData && navbarData && navbarData.length > 0 ? (
          <ul className='flex bg-black text-gray-50  items-center justify-center  relative   hover:cursor-pointer '>
            {navbarData.map((item, index) => (
              <HeaderList props={item} key={index} />
            ))}
          </ul>
        ) : (
          <>...loading</>
        )}
      </div>
    </div>
  );
};

export default Header;
