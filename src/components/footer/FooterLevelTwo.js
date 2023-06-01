import React, { useEffect, useState } from 'react';
import useFooterTwo from '../../hooks/useFooterTwo';
import FooterLogo from './FooterLogo';
import FooterSocials from './FooterSocials';
import FooterValue from './FooterValue';

const FooterLevelTwo = () => {
  const { data } = useFooterTwo();
  const [footerLogo, setFooterLogo] = useState();
  const [footerValue, setFooterValue] = useState();
  const [footerSocials, setFooterSocials] = useState();
  useEffect(() => {
    if (data) {
      setFooterLogo(data.footerLevel2LogoCollection.items);
      setFooterValue(data.footerLevel2ContentCollection.items);
      setFooterSocials(data.footerLevel2SocialsCollection.items);
    }
  }, [data]);

  return (
    <>
      <div className='p-10 px-16 bg-black text-white   '>
        <div className='grid grid-cols-3 border-b '>
          <div>
            {footerLogo && footerLogo.length > 0 && (
              <FooterLogo props={footerLogo[0]} />
            )}
          </div>
          <div className=' col-span-2 grid grid-cols-3   '>
            <FooterValue props={footerValue} />
          </div>
        </div>
      </div>
      <div>
        <FooterSocials props={footerSocials} />
      </div>
    </>
  );
};

export default React.memo(FooterLevelTwo);
