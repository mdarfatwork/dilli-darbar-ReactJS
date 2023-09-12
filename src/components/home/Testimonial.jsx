import React, { useEffect, useState } from 'react';
import { network, ava1, ava2, ava3 } from '../../assets/fake-data/images';

const Testimonial = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat modi deleniti expedita neque quam consectetur omnis repudiandae! Quibusdam, beatae repellat!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae autem tempora praesentium dolore reiciendis, repudiandae natus dolorem qui doloribus veritatis!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur quo accusantium nulla nemo impedit, ullam id assumenda fugiat soluta."
  ];

  const avatars = [ava1, ava2, ava3];

  const handleReviewButtonClick = (index) => {
    setCurrentReview(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 5000); // 30000 milliseconds = 30 seconds

    return () => {
      clearInterval(interval);
    };
  }, [reviews.length]);

  return (
    <div className='w-[90%] 2xl:w-[65%] mx-auto flex flex-col md:flex-row justify-between gap-3 py-16'>
      <div className="flex-1">
        <h4 className='text-red-500 text-lg text-center md:text-left'>Testimonial</h4>
        <h1 className='text-3xl md:text-4xl text-[#212245] text-center md:text-left md:leading-10 py-4 md:py-6 font-bold'>What our <span className='text-red-500'>customers</span> are saying</h1>
        <p className='text-sm text-center md:text-justify text-gray-400 pb-16'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!</p>
        
        {/* Display current review */}
        <div>
          <p className='text-sm text-gray-400 pb-10'>"{
            reviews[currentReview]
          }"</p>
          <img className='h-12 w-12 object-cover rounded-md mb-10' src={avatars[currentReview]} alt="" />
        </div>

        {/* Review buttons */}
        <div className="flex justify-center gap-5 cursor-pointer">
          {reviews.map((_, index) => (
            <li
              key={index}
              className={`p-1 list-none rounded-full ${
                currentReview === index ? 'bg-gray-500' : 'bg-gray-300'
              }`}
              onClick={() => handleReviewButtonClick(index)}
            ></li>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <img src={network} alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
