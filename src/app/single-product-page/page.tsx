import React from "react";
import Image from "next/image";
import recard11 from "@/app/public/recard11.png";
import itemcard3 from "@/app/public/itemcard3.png";
import cat3 from "@/app/public/cat3.png";
import itemcard1 from "@/app/public/itemcard1.png";
import cat1 from "@/app/public/cat1.png";
import single from "@/app/public/single.png";

import addto from "@/app/public/addto.png";

const ProductPage = () => {
  return (
    <div className="w-full bg-white mb-10 lg:mb-36">
      {/* Main Content */}
      <div className="w-[77.5%] mx-auto mt-10">
        <div className="flex flex-col md:flex-row gap-14">
          {/* Placeholder Image */}
          <div className="flex-1 relative">
            <div className=" rounded-md flex items-center justify-center ">
              <Image className="object-cover " src={single} alt=""></Image>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-800">
              Library Stool <br /> Chair
            </h1>

            <p
              className="  text-white w-[130px] p-1 text-center rounded-full text-[18px] font-semibold mt-4 bg-[#029FAE]"
            >
              $20.00 USD
            </p>
            <p className="border-t border-[#D9D9D9] w-full mt-6"></p>

            <p className="text-[#272343] mt-7 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <Image src={addto} className="mt-5 w-[200px]" alt=""></Image>
          </div>
        </div>

        {/* Featured Products */}
        <div className="mt-16">
          <div className="flex justify-between items-center">
            <h2 className=" text-2xl font-bold text-black leading-[33.89px]">
              Featured Products
            </h2>
            <a href="#" className="text-black font-medium text-sm hover:underline">
              View all
            </a>
          </div>

          {/* Product Grid */}
          <div className="mt-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 space-y-6 lg:space-y-0">
              {/* Product 1 */}
              <div className="bg-white rounded-lg overflow-hidden ">
                <div className="lg:h-[160px] h-auto flex items-center justify-center">
                  <Image
                    src={recard11}
                    alt="Library Stool Chair"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="flex justify-between mt-3">
                  <div className=" text-sm font-normal text-[#272343] h-[21px] w-[141px] leading-[20.08px text-[#272343]]">
                    Library Stool Chair
                  </div>
                  
                  <div className="text-sm text-black w-[28px] h-[17px] font-bold ">$99</div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-white rounded-lg  overflow-hidden ">
                <div className="lg:h-[160px] h-auto bg-gray-200 flex items-center justify-center">
                  <Image
                    src={itemcard3}
                    alt="Office Chair"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="flex justify-between mt-3">
                  <h3 className=" text-sm font-normal text-[#272343] h-[21px] w-[141px] leading-[20.08px text-[#272343]]">
                    Office Chair
                  </h3>
                  <p className="text-sm text-black w-[28px] h-[17px] font-bold ">$99</p>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-white rounded-lg overflow-hidden ">
                <div className="lg:h-[160px] h-auto bg-gray-200 flex items-center justify-center">
                  <Image
                    src={cat3}
                    alt="Dining Chair"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="flex justify-between mt-3">
                  <h3 className="text-sm font-normal text-[#272343] h-[21px] w-[141px] leading-[20.08px text-[#272343]]">
                    Dining Chair
                  </h3>
                  <p className="text-sm text-black w-[28px] h-[17px] font-bold ">$99</p>
                </div>
              </div>

              {/* Product 4 */}
              <div className="bg-white rounded-lg overflow-hidden ">
                <div className="lg:h-[160px] h-auto bg-gray-200 flex items-center justify-center">
                  <Image
                    src={itemcard1}
                    alt="Lounge Chair"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="flex justify-between mt-3">
                  <h3 className=" text-sm font-normal text-[#272343] h-[21px] w-[141px] leading-[20.08px text-[#272343]]">
                    Lounge Chair
                  </h3>
                  <p className="text-sm text-black w-[28px] h-[17px] font-bold ">$99</p>
                </div>
              </div>

              {/* Product 5 */}
              <div className="bg-white rounded-lg overflow-hidden ">
                <div className="lg:h-[160px] h-auto bg-gray-200 flex items-center justify-center">
                  <Image
                    src={cat1}
                    alt="Rocking Chair"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="flex justify-between mt-3">
                  <h3 className=" text-sm font-normal text-[#272343] h-[21px] w-[141px] leading-[20.08px text-[#272343]]">
                    Rocking Chair
                  </h3>
                  <p className="text-sm text-black w-[28px] h-[17px] font-bold ">$99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
