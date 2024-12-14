import React from "react";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import bin from "@/app/public/bin.png";
import card3 from "@/app/public/card3.png";
import cat1 from "@/app/public/cat1.png";

const CartPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 gap-5 w-full md:w-[90%] lg:w-[77.5%] mb-12 mt-8">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between">
        {/* Bag Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6">Bag</h2>

          {/* Product 1 */}
          <div className="flex  lg:justify-between border-b pb-10  mb-5 ">
            <div className="flex ">
              <Image
                src={card3}
                alt="Product 1"
                className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-md"
              />
              <div className="  ml-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-normal text-[16px] leading-[20.08px] text-[#272343]">
                    Library Stool Chair
                  </h3>
                  <p className="text-[15px] text-[#757575] font-normal mt-4 md:mt-7">
                    Ashen Slate/Cobalt Bliss
                  </p>
                  <p className="text-[15px] text-[#757575] font-normal space-x-4 flex mt-2">
                    <span>Size: L</span>
                    <span>Quantity: 1</span>
                  </p>
                </div>
                <div className="mt-3 flex space-x-3 text-gray-600">
                  <IoMdHeartEmpty className="w-[24px] h-[24px] text-black" />
                  <Image src={bin} alt="Delete" className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className=" w-[50px] lg:w-auto mx-auto lg:mx-0 ">
              <p className="lg:text-[15px] text-[11px] font-normal text-[#111111]">MRP: $99</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex  lg:justify-between border-b pb-10  mb-5 mt-10">
            <div className="flex ">
              <Image
                src={cat1}
                alt="Product 2"
                className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-md"
              />
              <div className=" ml-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-normal text-[16px] leading-[20.08px]  text-[#272343]">
                    Library Stool Chair
                  </h3>
                  <p className="text-[15px] text-[#757575] font-normal mt-4 md:mt-7">
                    Ashen Slate/Cobalt Bliss
                  </p>
                  <p className="text-[15px] text-[#757575] font-normal space-x-4 flex mt-2">
                    <span>Size: L</span>
                    <span>Quantity: 1</span>
                  </p>
                </div>
                <div className="mt-3 flex space-x-3 text-gray-600">
                  <IoMdHeartEmpty className="w-[24px] h-[24px] text-black" />
                  <Image src={bin} alt="Delete" className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="w-[50px] mx-auto lg:mx-0 lg:w-auto">
              <p className="lg:text-[15px] text-[11px] font-normal text-[#111111]">MRP: $99</p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg p-4">
          <h2 className="text-[21px] font-semibold mb-6 text-[#111111]">Summary</h2>
          <div className="flex justify-between mb-2">
            <p className="text-[#111111]">Subtotal</p>
            <p className="font-medium text-[#111111]">$198.00</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="font-normal text-[15px] text-[#111111]">
              Estimated Delivery & Handling
            </p>
            <p className="font-normal text-[15px] text-[#111111]">Free</p>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-4">
            <p className="font-normal text-[15px] text-[#111111]">Total</p>
            <p className="font-normal text-[15px] text-[#111111]">$198.00</p>
          </div>
          <button className="mt-6 w-full bg-[#029FAE] text-white py-3 rounded-full font-medium">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
