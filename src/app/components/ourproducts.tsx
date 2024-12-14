import React from "react";
import Image from "next/image";
import card1 from "@/app/public/card1.png";
import card2 from "@/app/public/card2.png";
import card3 from "@/app/public/card3.png";
import card4 from "@/app/public/card4.png";
import { Inter } from "next/font/google";
import addcart1 from "@/app/public/addcart1.png";
import addcart2 from "@/app/public/addcart2.png";
import cat1 from "@/app/public/cat1.png"
import itemcard4 from "@/app/public/itemcard4.png"
import recard11 from "@/app/public/recard11.png"


const inter = Inter({ subsets: ["latin"] });

const OurProducts = () => {
  return (
    <div className="pb-12 lg:pb-0">
      {/* Heading Section */}
      <div className="w-[90%] lg:w-[77.5%] mx-auto text-center mt-10 lg:mt-20">
        <h1
          className={`text-[24px] sm:text-[28px] lg:text-[32px] font-bold ${inter.className} text-[#272343]`}
        >
          Our Products
        </h1>
      </div>

      {/* Product Cards Section */}
      <div className="flex justify-center mt-10">
        <div className="w-[90%] lg:w-[77.5%] flex flex-wrap justify-between gap-y-7 mb-0 lg:mb-24">
          {/* Product Card 1 */}
          <div className="w-[48%] sm:w-[31%] lg:w-[23%] h-auto rounded-lg overflow-hidden">
            <div className="relative h-48 lg:h-2/3">
              <Image
                src={card1}
                alt="Product"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                New
              </span>
            </div>
            <div className="flex items-center mt-3 px-3">
              <div className="flex-1">
                <h3
                  className={`text-[14px] sm:text-[16px] font-medium ${inter.className} text-[#007580]`}
                >
                  Library Stool Chair
                </h3>
                <p
                  className={`mt-1 text-[16px] sm:text-[18px] font-bold ${inter.className} text-[#272343]`}
                >
                  $20
                </p>
              </div>
              <Image
                className="w-8 h-8 ml-2"
                src={addcart1}
                alt="Add to cart"
              />
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="w-[48%] sm:w-[31%] lg:w-[23%] h-auto rounded-lg overflow-hidden ">
            <div className="relative h-48 lg:h-2/3">
              <Image
                src={card2}
                alt="Product"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-[#F5813F] text-white text-xs font-semibold px-2 py-1 rounded-full">
                Sales
              </span>
            </div>
            <div className="flex items-center mt-3 px-3">
              <div className="flex-1">
                <h3
                  className={`text-[14px] sm:text-[16px] font-medium ${inter.className} text-[#007580]`}
                >
                  Library Stool Chair
                </h3>
                <p
                  className={`mt-1 text-[16px] sm:text-[18px] font-bold ${inter.className} text-[#272343]`}
                >
                  $20
                </p>
              </div>
              <Image
                className="w-8 h-8 ml-2"
                src={addcart2}
                alt="Add to cart"
              />
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="w-[48%] sm:w-[31%] lg:w-[23%] h-auto rounded-lg overflow-hidden ">
            <div className="relative h-48 lg:h-2/3">
              <Image
                src={card3}
                alt="Product"
                className="w-full h-full object-cover"
              />
              
            </div>
            <div className="flex items-center mt-3 px-3">
              <div className="flex-1">
                <h3
                  className={`text-[14px] sm:text-[16px] font-medium ${inter.className} text-[#007580]`}
                >
                  Library Stool Chair
                </h3>
                <p
                  className={`mt-1 text-[16px] sm:text-[18px] font-bold ${inter.className} text-[#272343]`}
                >
                  $20
                </p>
              </div>
              <Image
                className="w-8 h-8 ml-2"
                src={addcart2}
                alt="Add to cart"
              />
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="w-[48%] sm:w-[31%] lg:w-[23%] h-auto rounded-lg overflow-hidden ">
            <div className="relative h-48 lg:h-2/3">
              <Image
                src={card4}
                alt="Product"
                className="w-full h-full object-cover"
              />
              
            </div>
            <div className="flex items-center mt-3 px-3">
              <div className="flex-1">
                <h3
                  className={`text-[14px] sm:text-[16px] font-medium ${inter.className} text-[#007580]`}
                >
                  Library Stool Chair
                </h3>
                <p
                  className={`mt-1 text-[16px] sm:text-[18px] font-bold ${inter.className} text-[#272343]`}
                >
                  $20
                </p>
              </div>
              <Image
                className="w-8 h-8 ml-2"
                src={addcart2}
                alt="Add to cart"
              />
            </div>
          </div>
          {/* Product Card 5 */}
          <div className="w-[48%] sm:w-[31%] lg:w-[23%] h-auto rounded-lg overflow-hidden">
            <div className="relative h-48 lg:h-2/3">
              <Image
                src={cat1}
                alt="Product"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                New
              </span>
            </div>
            <div className="flex items-center mt-3 px-3">
              <div className="flex-1">
                <h3
                  className={`text-[14px] sm:text-[16px] font-medium ${inter.className} text-[#007580]`}
                >
                  Library Stool Chair
                </h3>
                <p
                  className={`mt-1 text-[16px] sm:text-[18px] font-bold ${inter.className} text-[#272343]`}
                >
                  $20
                </p>
              </div>
              <Image
                className="w-8 h-8 ml-2"
                src={addcart1}
                alt="Add to cart"
              />
            </div>
          </div>

          {/* Product Card 6 */}
          <div className="w-[48%] sm:w-[31%] lg:w-[23%] h-auto rounded-lg overflow-hidden ">
            <div className="relative h-48 lg:h-2/3">
              <Image
                src={itemcard4}
                alt="Product"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-[#F5813F] text-white text-xs font-semibold px-2 py-1 rounded-full">
                Sales
              </span>
            </div>
            <div className="flex items-center mt-3 px-3">
              <div className="flex-1">
                <h3
                  className={`text-[14px] sm:text-[16px] font-medium ${inter.className} text-[#007580]`}
                >
                  Library Stool Chair
                </h3>
                <p
                  className={`mt-1 text-[16px] sm:text-[18px] font-bold ${inter.className} text-[#272343]`}
                >
                  $20
                </p>
              </div>
              <Image
                className="w-8 h-8 ml-2"
                src={addcart2}
                alt="Add to cart"
              />
            </div>
          </div>

          {/* Product Card 7 */}
          <div className="w-[48%] sm:w-[31%] lg:w-[23%] h-auto rounded-lg overflow-hidden ">
            <div className="relative h-48 lg:h-2/3">
              <Image
                src={recard11}
                alt="Product"
                className="w-full h-full object-cover"
              />
              
            </div>
            <div className="flex items-center mt-3 px-3">
              <div className="flex-1">
                <h3
                  className={`text-[14px] sm:text-[16px] font-medium ${inter.className} text-[#007580]`}
                >
                  Library Stool Chair
                </h3>
                <p
                  className={`mt-1 text-[16px] sm:text-[18px] font-bold ${inter.className} text-[#272343]`}
                >
                  $20
                </p>
              </div>
              <Image
                className="w-8 h-8 ml-2"
                src={addcart2}
                alt="Add to cart"
              />
            </div>
          </div>

          {/* Product Card 8 */}
          <div className="w-[48%] sm:w-[31%] lg:w-[23%] h-auto rounded-lg overflow-hidden ">
            <div className="relative h-48 lg:h-2/3">
              <Image
                src={card1}
                alt="Product"
                className="w-full h-full object-cover"
              />
              
            </div>
            <div className="flex items-center mt-3 px-3">
              <div className="flex-1">
                <h3
                  className={`text-[14px] sm:text-[16px] font-medium ${inter.className} text-[#007580]`}
                >
                  Library Stool Chair
                </h3>
                <p
                  className={`mt-1 text-[16px] sm:text-[18px] font-bold ${inter.className} text-[#272343]`}
                >
                  $20
                </p>
              </div>
              <Image
                className="w-8 h-8 ml-2"
                src={addcart2}
                alt="Add to cart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
