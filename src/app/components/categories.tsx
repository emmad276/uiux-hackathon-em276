import Image from "next/image";
import React from "react";
import cat1 from "@/app/public/cat1.png";
import cat2 from "@/app/public/cat2.png";
import cat3 from "@/app/public/cat3.png";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Categories() {
  return (
    <div>
      <div className="w-[90%] lg:w-[77.5%] mx-auto h-[44px] my-5">
        <h1
          className={`h-[35px] ${inter.className} font-bold text-[24px] lg:text-[32px] leading-[35.2px] text-[#272343]`}
        >
          Top Categories
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="w-[90%] lg:w-[77.5%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="relative rounded-lg shadow-lg overflow-hidden h-[377px]">
            <Image
              src={cat1}
              alt="Wing Chair"
              className="w-full h-full object-cover"
            />
            <div className="bg-black bg-opacity-70 absolute bottom-0 w-full p-4 text-white">
              <h3 className="font-semibold text-lg">Wing Chair</h3>
              <p className="text-sm">3,584 Products</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-lg shadow-lg overflow-hidden h-[377px]">
            <Image
              src={cat2}
              alt="Wing Chair"
              className="w-full h-full object-cover"
            />
            <div className="bg-black bg-opacity-70 absolute bottom-0 w-full p-4 text-white">
              <h3 className="font-semibold text-lg">Wing Chair</h3>
              <p className="text-sm">3,584 Products</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-lg shadow-lg overflow-hidden h-[377px]">
            <Image
              src={cat3}
              alt="Wing Chair"
              className="w-full h-full object-cover"
            />
            <div className="bg-black bg-opacity-70 absolute bottom-0 w-full p-4 text-white">
              <h3 className="font-semibold text-lg">Wing Chair</h3>
              <p className="text-sm">3,584 Products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
