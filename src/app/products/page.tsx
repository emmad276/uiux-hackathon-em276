import React from "react";
import Image from "next/image";
import card1 from "@/app/public/card1.png";
import card2 from "@/app/public/card2.png";
import card3 from "@/app/public/card3.png";
import card4 from "@/app/public/card4.png";
import { Inter } from "next/font/google";
import addcart1 from "@/app/public/addcart1.png";
import addcart2 from "@/app/public/addcart2.png";
import cat2 from "@/app/public/cat2.png";
import cat1 from "@/app/public/cat1.png";
import cat3 from "@/app/public/cat3.png";
import recar11 from "@/app/public/recard11.png";
import itemcard4 from "@/app/public/itemcard4.png";
const inter = Inter({ subsets: ["latin"] });
const ProductPage = () => {
  return (
    <div>
      <div>
        <div className="w-[77.5%] mx-auto h-auto my-5  mt-17">
          <h1
            className={` h-[35px] ${inter.className} font-semibold text-[32px] leading-[35.2px] text-[#272343]`}
          >
            All Products
          </h1>
        </div>

        <div className="flex justify-center mt-10">
          <div className="w-[77.5%] flex justify-between flex-wrap">
            {/* Card 1 */}
            <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] h-[377px] rounded-lg  overflow-hidden">
              <div className="relative h-2/3">
                <Image
                  src={card1}
                  alt="Library Stool Chair"
                  className="w-full h-full object-cover"
                ></Image>
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  New
                </span>
              </div>
              <div className="flex ">
                <div className="w-[81%]">
                  <h3
                    className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px] text-[#007580] h-[21px]`}
                  >
                    Library Stool Chair
                  </h3>
                  <p
                    className={`mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold text-[#272343] `}
                  >
                    $20
                  </p>
                </div>
                <div>
                  <Image
                    className="mt-3"
                    src={addcart1}
                    alt="add cart1"
                  ></Image>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] h-[377px]  rounded-lg  overflow-hidden">
              <div className="relative h-2/3">
                <Image
                  src={card2}
                  alt="Library Stool Chair"
                  className="w-full h-full object-cover"
                ></Image>
                <span className="absolute top-2 left-2 bg-[#F5813F] text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Sales
                </span>
              </div>
              <div className="flex ">
                <div className="w-[81%]">
                  <h3
                    className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px]  h-[21px] text-[#272343]`}
                  >
                    Library Stool Chair
                  </h3>
                  <p
                    className={`text-[#272343] mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold `}
                  >
                    $20
                  </p>
                </div>
                <div>
                  <Image
                    className="mt-3"
                    src={addcart2}
                    alt="add cart1"
                  ></Image>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] h-[377px]  rounded-lg  overflow-hidden">
              <div className="relative h-2/3">
                <Image
                  src={card3}
                  alt="Library Stool Chair"
                  className="w-full h-full object-cover"
                ></Image>
              </div>
              <div className="flex ">
                <div className="w-[81%]">
                  <h3
                    className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px]  h-[21px] text-[#272343]`}
                  >
                    Library Stool Chair
                  </h3>
                  <p
                    className={ ` text-[#272343] mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold `}
                  >
                    $20
                  </p>
                </div>
                <div>
                  <Image
                    className="mt-3"
                    src={addcart2}
                    alt="add cart1"
                  ></Image>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] h-[377px]  rounded-lg overflow-hidden">
              <div className="relative h-2/3">
                <Image
                  src={card4}
                  alt="Library Stool Chair"
                  className="w-full h-full object-cover"
                ></Image>
              </div>
              <div className="flex ">
                <div className="w-[81%]">
                  <h3
                    className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px]  h-[21px] text-[#272343]`}
                  >
                    Library Stool Chair
                  </h3>
                  <p
                    className={`text-[#272343] mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold `}
                  >
                    $20
                  </p>
                </div>
                <div>
                  <Image
                    className="mt-3"
                    src={addcart2}
                    alt="add cart1"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          <div className="w-[77.5%] flex justify-between flex-wrap">
            {/* Card 5 */}
            <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] h-[377px] rounded-lg  overflow-hidden">
              <div className="relative h-2/3">
                <Image
                  src={cat2}
                  alt="Library Stool Chair"
                  className="w-full h-full object-cover"
                ></Image>
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  New
                </span>
              </div>
              <div className="flex ">
                <div className="w-[81%]">
                  <h3
                    className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px] h-[21px] text-[#272343]`}
                  >
                    Library Stool Chair
                  </h3>
                  <p
                    className={`text-[#272343] mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold  `}
                  >
                    $20
                  </p>
                </div>
                <div>
                  <Image
                    className="mt-3"
                    src={addcart1}
                    alt="add cart1"
                  ></Image>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] h-[377px]  rounded-lg  overflow-hidden">
              <div className="relative h-2/3">
                <Image
                  src={itemcard4}
                  alt="Library Stool Chair"
                  className="w-full h-full object-cover"
                ></Image>
                <span className="absolute top-2 left-2 bg-[#F5813F] text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Sales
                </span>
              </div>
              <div className="flex ">
                <div className="w-[81%]">
                  <h3
                    className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px]  h-[21px] text-[#272343]`}
                  >
                    Library Stool Chair
                  </h3>
                  <p
                    className={`text-[#272343] mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold `}
                  >
                    $20
                  </p>
                </div>
                <div>
                  <Image
                    className="mt-3"
                    src={addcart2}
                    alt="add cart1"
                  ></Image>
                </div>
              </div>
            </div>
            {/* Card 7 */}
            <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] h-[377px]  rounded-lg  overflow-hidden">
              <div className="relative h-2/3">
                <Image
                  src={recar11}
                  alt="Library Stool Chair"
                  className="w-full h-full object-cover"
                ></Image>
              </div>
              <div className="flex ">
                <div className="w-[81%]">
                  <h3
                    className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px]  h-[21px] text-[#272343]`}
                  >
                    Library Stool Chair
                  </h3>
                  <p
                    className={`text-[#272343] mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold `}
                  >
                    $20
                  </p>
                </div>
                <div>
                  <Image
                    className="mt-3"
                    src={addcart2}
                    alt="add cart1"
                  ></Image>
                </div>
              </div>
            </div>
            {/* Card 8 */}
            <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] h-[377px]  rounded-lg overflow-hidden">
              <div className="relative h-2/3">
                <Image
                  src={card1}
                  alt="Library Stool Chair"
                  className="w-full h-full object-cover"
                ></Image>
              </div>
              <div className="flex ">
                <div className="w-[81%]">
                  <h3
                    className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px]  h-[21px] text-[#272343]`}
                  >
                    Library Stool Chair
                  </h3>
                  <p
                    className={` text-[#272343] mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold `}
                  >
                    $20
                  </p>
                </div>
                <div>
                  <Image
                    className="mt-3"
                    src={addcart2}
                    alt="add cart1"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          <div className="w-[77.5%] flex justify-between flex-wrap">
            {/* Card 9 */}
            <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] h-[377px] rounded-lg  overflow-hidden">
              <div className="relative h-2/3">
                <Image
                  src={cat1}
                  alt="Library Stool Chair"
                  className="w-full h-full object-cover"
                ></Image>
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  New
                </span>
              </div>
              <div className="flex ">
                <div className="w-[81%]">
                  <h3
                    className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px] h-[21px] text-[#272343]`}
                  >
                    Library Stool Chair
                  </h3>
                  <p
                    className={`text-[#272343] mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold  `}
                  >
                    $20
                  </p>
                </div>
                <div>
                  <Image
                    className="mt-3"
                    src={addcart1}
                    alt="add cart1"
                  ></Image>
                </div>
              </div>
            </div>

            {/* Card 10 */}
            <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] h-[377px]  rounded-lg  overflow-hidden">
              <div className="relative h-2/3">
                <Image
                  src={card2}
                  alt="Library Stool Chair"
                  className="w-full h-full object-cover"
                ></Image>
                <span className="absolute top-2 left-2 bg-[#F5813F] text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Sales
                </span>
              </div>
              <div className="flex ">
                <div className="w-[81%]">
                  <h3
                    className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px]  h-[21px] text-[#272343]`}
                  >
                    Library Stool Chair
                  </h3>
                  <p
                    className={`text-[#272343] mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold `}
                  >
                    $20
                  </p>
                </div>
                <div>
                  <Image
                    className="mt-3"
                    src={addcart2}
                    alt="add cart1"
                  ></Image>
                </div>
              </div>
            </div>
            {/* Card 11 */}
            <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] h-[377px]  rounded-lg  overflow-hidden">
              <div className="relative h-2/3">
                <Image
                  src={card3}
                  alt="Library Stool Chair"
                  className="w-full h-full object-cover"
                ></Image>
              </div>
              <div className="flex ">
                <div className="w-[81%]">
                  <h3
                    className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px]  h-[21px] text-[#272343]`}
                  >
                    Library Stool Chair
                  </h3>
                  <p
                    className={`text-[#272343] mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold `}
                  >
                    $20
                  </p>
                </div>
                <div>
                  <Image
                    className="mt-3"
                    src={addcart2}
                    alt="add cart1"
                  ></Image>
                </div>
              </div>
            </div>
            {/* Card 12 */}
            <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] h-[377px]  rounded-lg overflow-hidden">
              <div className="relative h-2/3">
                <Image
                  src={cat3}
                  alt="Library Stool Chair"
                  className="w-full h-full object-cover"
                ></Image>
              </div>
              <div className="flex ">
                <div className="w-[81%]">
                  <h3
                    className={`mt-3 ${inter.className} font-normal text-[16px] leading-[20.08px]  h-[21px] text-[#272343]`}
                  >
                    Library Stool Chair
                  </h3>
                  <p
                    className={`text-[#272343] mt-2 w-[35px] h-[20px] gap-[4px] ${inter.className} text-[18px] leading-[19.8px] font-bold `}
                  >
                    $20
                  </p>
                </div>
                <div>
                  <Image
                    className="mt-3"
                    src={addcart2}
                    alt="add cart1"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 w-full py-12">
        {/* Text Container */}
        <div className="w-[90%]  mx-auto text-center space-y-8">
          {/* Subscription Section */}
          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            Or Subscribe To The Newsletter
          </h2>
          <div className="bg-gray-100 w-full flex justify-center items-center">
            <form className="flex flex-wrap items-center gap-4">
              {/* Email Input Field */}
              <div className="border-b border-[#000000]  w-[200px] md:w-[500px] flex items-center">
                <input
                  type="email"
                  placeholder="Email Address..."
                  className="w-full  bg-transparent outline-none px-2 py-1 text-gray-700 placeholder-[#1E283280]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-4 py-2  mb-[8px] border-b border-[#1E2832] text-[#1E2832] font-semibold hover:bg-gray-100 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Instagram Follow Section */}
          <h3 className="text-xl sm:text-2xl md:text-3xl text-black font-bold leading-tight md:leading-[58.59px]">
            Follow Products And Discounts On Instagram
          </h3>
        </div>

        {/* Image Container */}
        <div className="w-full flex justify-center gap-4 mt-8 flex-wrap">
          {/* Placeholder for images */}
          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] bg-gray-300 rounded-md flex items-center justify-center">
            <Image src={cat2} alt="" />
          </div>
          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] bg-gray-300 rounded-md flex items-center justify-center">
            <Image src={cat1} alt="" />
          </div>
          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] bg-gray-300 rounded-md flex items-center justify-center">
            <Image src={card2} alt="" />
          </div>
          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] bg-gray-300 rounded-md flex items-center justify-center">
            <Image src={card1} alt="" />
          </div>
          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] bg-gray-300 rounded-md flex items-center justify-center">
            <Image src={card3} alt="" />
          </div>
          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] bg-gray-300 rounded-md flex items-center justify-center">
            <Image src={cat3} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
