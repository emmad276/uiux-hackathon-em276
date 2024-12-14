import React from 'react';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import bg from "@/app/public/Product Image.png";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    <div className='pb-8 lg:pb-0 bg-[#F0F2F3] w-full lg:w-[77.5%] mx-auto h-auto md:h-[600px] top-[204px] flex flex-col md:flex-row items-center gap-8 md:gap-24'>
      {/* Text Section */}
      <div className='w-[90vw] md:w-[557px] h-auto md:h-[337px] ml-6 md:ml-12 text-center md:text-left pt-5 lg:pt-0'>
        <h1
          className={`leading-[14px] tracking-[12%] text-[#272343] ${inter.className} font-normal text-[14px]`}
        >
          WELCOME TO CHAIRY
        </h1>
        <h1
          className={`mt-4  lg:mt-2 ${inter.className} font-bold text-[30px] md:text-[60px] leading-[36px] md:leading-[66px] text-[#272343] w-full md:w-[557px]`}
        >
          Best Furniture Collection for your interior.
        </h1>
        <div className='mt-6 mx-auto md:mx-0 flex justify-center md:justify-start items-center w-[171px] h-[52px] rounded-lg py-[14px] px-[24px] gap-[20px] bg-[#029FAE] text-white'>
          <h1>Shop Now</h1>
          <FaArrowRightLong />
        </div>
      </div>

      {/* Image Section */}
      <div className='w-full md:w-auto flex justify-center md:justify-end'>
        <Image className='max-w-full h-auto' src={bg} alt='' />
      </div>
    </div>
  );
};

export default Header;
