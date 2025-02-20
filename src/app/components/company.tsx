import React from 'react';
import logo1 from "@/app/public/Logo1.png";
import logo2 from "@/app/public/Logo2.png";
import logo3 from "@/app/public/Logo3.png";
import logo4 from "@/app/public/Logo4.png";
import logo5 from "@/app/public/Logo5.png";
import logo6 from "@/app/public/Logo6.png";
import logo7 from "@/app/public/Logo7.png";
import Image from 'next/image';

const Company = () => {
  return (
    <div className='w-full lg:w-[77.5%] mt-12 mx-auto h-auto flex flex-wrap justify-center lg:justify-between gap-4 lg:gap-0'>
      <Image className='object-contain w-[80px] md:w-[100px] lg:w-auto hover:transition-transform hover:transform hover:scale-105' src={logo1} alt='logo1' />
      <Image className='object-contain w-[80px] md:w-[100px] lg:w-auto hover:transition-transform hover:transform hover:scale-105' src={logo2} alt='logo2' />
      <Image className='object-contain w-[80px] md:w-[100px] lg:w-auto hover:transition-transform hover:transform hover:scale-105' src={logo3} alt='logo3' />
      <Image className='object-contain w-[80px] md:w-[100px] lg:w-auto hover:transition-transform hover:transform hover:scale-105' src={logo4} alt='logo4' />
      <Image className='object-contain w-[80px] md:w-[100px] lg:w-auto hover:transition-transform hover:transform hover:scale-105' src={logo5} alt='logo5' />
      <Image className='object-contain w-[80px] md:w-[100px] lg:w-auto hover:transition-transform hover:transform hover:scale-105' src={logo6} alt='logo6' />
      <Image className='object-contain w-[80px] md:w-[100px] lg:w-auto hover:transition-transform hover:transform hover:scale-105' src={logo7} alt='logo7' />
    </div>
  );
};

export default Company;
