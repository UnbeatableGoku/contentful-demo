import { useEffect, useState } from 'react';
import useNewsLetter from '../../hooks/useNewsLetter';

const NewsLetter = () => {
  const { data } = useNewsLetter();
  const [newsletter, setNewsLetter] = useState();

  useEffect(() => {
    if (data) {
      setNewsLetter(data.footerLevel1NewsletterCollection.items[0]);
    }
  }, [data]);
  return (
    <>
      <div className='w-full bg-gray-100 px-2 py-5  '>
        <div className='mx-auto flex max-w-xl  max-sm:flex-col max-sm:items-start'>
          <div>
            <div className='text-2xl text-left'>{newsletter?.title}</div>
            <div className='text-gray-500 text-left'>
              {newsletter?.description}
            </div>
          </div>
          <button className='ms-6 bg-red-700 px-4 py-3 font-bold uppercase tracking-widest text-white transition-colors duration-500 hover:bg-black max-sm:ms-0 max-sm:mt-4'>
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
