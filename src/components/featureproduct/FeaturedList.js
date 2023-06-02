import React from 'react';
const FeaturedList = ({ props }) => {
  const price = props && props.price;
  const title = props && props.title;
  const img = props && props.productImage.url;
  const alt = props && props.productImage.title;
  return (
    <div className='mx-auto sm:mx-1  w-full  relative group cursor-pointer '>
      <div className='absolute right-7 sm:right-4 top-3 bg-gray-100  rounded-full p-1 '>
        <svg
          width='25px'
          className='hover:fill-black'
          height='25px'
          viewBox='0 0 24 24'
          fill='white'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 20C12 20 21 16 21 9.71405C21 6 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12.7198 5.92016C12.3266 6.32798 11.6734 6.32798 11.2802 5.92016L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5 4 3 6 3 9.71405C3 16 12 20 12 20Z'
            stroke='#000'
            stroke-width='1.2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </div>
      <div className='border px-5  w-full group-hover:bg-[#0000001a] transition-all duration-500'>
        <div className='mx-auto  max-w-[200px]'>
          <img src={img} alt={alt} />
        </div>
      </div>

      <div className='text-left h-10 mt-2'>{title}</div>
      <div className='text-left mt-2'>${price}</div>

      <button className='group/bag absolute bottom-28 right-7 w-12 h-12 border-2 rounded  border-gray-950 hidden bg-black hover:bg-white  hover:stroke-black group-hover:block    transition-all duration-500  '>
        <svg
          fill='#000000'
          height='19px'
          width='19px'
          version='1.1'
          id='Capa_1'
          viewBox='0 0 483.1 483.1'
          className='m-auto group-hover/bag: fill-white '
        >
          <g>
            <path
              stroke-width='30'
              d='M434.55,418.7l-27.8-313.3c-0.5-6.2-5.7-10.9-12-10.9h-58.6c-0.1-52.1-42.5-94.5-94.6-94.5s-94.5,42.4-94.6,94.5h-58.6
            c-6.2,0-11.4,4.7-12,10.9l-27.8,313.3c0,0.4,0,0.7,0,1.1c0,34.9,32.1,63.3,71.5,63.3h243c39.4,0,71.5-28.4,71.5-63.3
            C434.55,419.4,434.55,419.1,434.55,418.7z M241.55,24c38.9,0,70.5,31.6,70.6,70.5h-141.2C171.05,55.6,202.65,24,241.55,24z
            M363.05,459h-243c-26,0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h141.2v42.1
            c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h47.6l26.8,301.8C410.25,441.7,389.05,459,363.05,459z'
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default FeaturedList;
