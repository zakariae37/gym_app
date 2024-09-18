import React from 'react';
import BannerImage from '../assets/images/banner.png';

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between'>
      <div className='lg:w-1/2 flex flex-col gap-y-6 md:gap-y-10 text-left mt-10 md:mt-36'>
        <h3 className='font-bold text-red-500'>Fitness Club</h3>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Sweat, Smile <br /> And Repeat</h1>
        <p>Check out the most effective exercises personalized to you</p>
        <button className='text-white bg-red-500 px-4 py-2 rounded-sm w-52'>Explore Exercises</button>
        <h1 className='hidden lg:block -z-30 text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold tracking-wider text-red-500 opacity-30'>Exercises</h1>

      </div>

      <div className='relative hidden bottom-20 lg:flex lg:justify-end lg:w-1/2 lg:self-end'>
        <img 
          src={BannerImage}
          alt='Banner'
          className='w-[90%] '
        />
      </div>
    </div>
  );
};

export default Banner;
