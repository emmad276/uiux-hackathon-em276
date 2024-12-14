import React from 'react';
import Image from 'next/image';
import itemcard1 from '@/app/public/itemcard1.png';
import itemcard2 from '@/app/public/itemcard2.png';
import itemcard3 from '@/app/public/itemcard3.png';
import itemcard4 from '@/app/public/itemcard4.png';
import itemcard5 from '@/app/public/itemcard5.png';

export default function HotCategory() {
  return (
    <div className="w-[82%] lg:w-[77.5%] mx-auto flex flex-col lg:flex-row gap-4 mt-14 bg-white">
      {/* Left Section with Large Image and Vertical Text */}
      <div className="relative flex-1">
        {/* Large Image */}
        <div className="h-[300px] lg:h-full flex items-center justify-center">
          <Image
            src={itemcard1}
            alt="itemcard"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Vertical Text */}
        <div className="absolute left-[-18px] bottom-[-160px] lg:bottom-[37px] -translate-y-1/2 -rotate-90 origin-left text-sm lg:text-xl font-semibold text-black tracking-widest">
          EXPLORE NEW AND POPULAR STYLES
        </div>
      </div>

      {/* Right Section with Grid */}
      <div className="flex-[1.2] grid grid-cols-2 gap-4">
        {/* Grid Images */}
        <div className="h-[150px] sm:h-[200px] lg:h-[250px] bg-gray-100 flex items-center justify-center">
          <Image src={itemcard2} alt="itemcard" className="object-cover w-full h-full" />
        </div>
        <div className="h-[150px] sm:h-[200px] lg:h-[250px] bg-gray-100 flex items-center justify-center">
          <Image src={itemcard3} alt="itemcard" className="object-cover w-full h-full" />
        </div>
        <div className="h-[150px] sm:h-[200px] lg:h-[250px] bg-gray-100 flex items-center justify-center">
          <Image src={itemcard4} alt="itemcard" className="object-cover w-full h-full" />
        </div>
        <div className="h-[150px] sm:h-[200px] lg:h-[250px] bg-gray-100 flex items-center justify-center">
          <Image src={itemcard5} alt="itemcard" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
}
