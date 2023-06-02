import React, { useEffect, useState } from 'react';
import useFooterTwo from '../../hooks/useFooterTwo';
import FooterDownloads from './FooterDownloads';
import FooterLogo from './FooterLogo';
import FooterSocials from './FooterSocials';
import FooterValue from './FooterValue';

const FooterLevelTwo = () => {
  const { data } = useFooterTwo();
  const [footerLogo, setFooterLogo] = useState();
  const [footerValue, setFooterValue] = useState();
  const [footerSocials, setFooterSocials] = useState();
  const [footerDownloads, setFooterDownloads] = useState();
  useEffect(() => {
    if (data) {
      setFooterLogo(data.footerLevel2LogoCollection.items);
      setFooterValue(data.footerLevel2ContentCollection.items);
      setFooterSocials(data.footerLevel2SocialsCollection.items);
      setFooterDownloads(data.footerLevel2DownloadsCollection.items);
    }
  }, [data]);

  return (
    <>
      <div className='sm:p-5 sm:px-8 md:p-5 md:px-16 bg-black text-white  '>
        <div className='grid  md:grid-cols-3 sm:grid-cols-1  border-b mx-auto px-3 max-w-7xl '>
          <div>
            {footerLogo && footerLogo.length > 0 && (
              <FooterLogo props={footerLogo[0]} />
            )}
          </div>
          <div className='col-span-2 grid md:grid-cols-3   '>
            <FooterValue props={footerValue} />
          </div>
        </div>
      </div>
      <div className='px-0 sm:px-16 flex flex-col sm:flex-row justify-normal sm:justify-around items-start sm:items-center  bg-black text-white '>
        <FooterSocials props={footerSocials} />
        <FooterDownloads props={footerDownloads} />
      </div>
    </>
  );
};

export default React.memo(FooterLevelTwo);
