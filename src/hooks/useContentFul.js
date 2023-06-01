import { gql, useQuery } from '@apollo/client';
import { createClient } from 'contentful';
import { useState } from 'react';
import { NAVBAR_QUERY } from '../queries';
const useContentFul = () => {
  const [data, setData] = useState();

  const { data: newData, error } = useQuery(NAVBAR_QUERY);
  if (newData) {
    // console.log(newData.accelerateMain.navbarCollection.items);
  }
  if (error) {
    console.log(JSON.parse(JSON.stringify(error.message)));
  }

  // const client = createClient({
  //   space: '4v4oa9emjmtp',
  //   accessToken: 'XwfzYF3Ld4YPWrm9Tym_yXSGJ7vTrk_Q66XJSM31yoc',
  //   host: 'preview.contentful.com',
  // });

  // const getPhoneCovers = useCallback(async () => {
  //   try {
  //     const entries = await client.getEntries({
  //       content_type: 'accelerateMain',
  //       select: 'fields',
  //       include: 3,
  //     });
  //     const items = entries.items.map((item) => {
  //       return { ...item.fields };
  //     });
  //     return items;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [client]);

  // const fetchData = useCallback(async () => {
  //   const data = await getPhoneCovers();
  //   setData(data);
  // }, []);

  return { newData };
};

export default useContentFul;
//https://krish-commercetools-accelerator.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fsi3zip9j6n5h%2F5DgQMB5Xra3Xy3afUipeNJ%2Fc792287da7f0d8680ff918fb2d3f00a9%2FRectangle_1107_2x-3_2048x.png&w=1920&q=75
//https://krish-commercetools-accelerator.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fsi3zip9j6n5h%2F6lFl37a8lTblbgGOAAS9IB%2Fdedd315e054ca6a4297aade1ae6d109b%2FRectangle_1107_2x_214689fe-152e-4c95-890c-fec301714d8a_2048x.png&w=1920&q=75
//https://krish-commercetools-accelerator.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fsi3zip9j6n5h%2F4iUZxOvH6z6ED201gCusPR%2Fcfc7316a2807bb48a28fa595fd77ed19%2FFashion-HP-Banner03.jpg&w=1920&q=75
