import React from "react";
import Image from "next/image";
import imageblock from "@/app/public/Image Block.png";
import delivery from "@/app/public/Delivery.png";
import check from "@/app/public/Checkmark--outline.png";
import purchase from "@/app/public/Purchase.png";
import sprout from "@/app/public/Sprout.png";
import large from "@/app/public/Large.png";
import parent from "@/app/public/Parent.png";
import pho from "@/app/public/Photo.png";

export default function HomePage() {
  return (
    <div className="flex justify-center py-12">
      <div className="w-[90%] lg:w-[77.5%]">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#007580] text-white p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                About Us - Comforty
              </h2>
              <p className="text-gray-200 mb-6">
                At Comforty, we believe that the right chair can transform any
                space. We deliver premium comfort, sleek design, and
                unparalleled quality. From traditional aesthetics to modern
                styles, we craft chairs that seamlessly blend style with
                functionality.
              </p>
            </div>
            <button className="bg-[#F9F9F926] w-full sm:w-[179px] mt-4 text-white px-6 py-2 rounded hover:bg-purple-600">
              View Collection
            </button>
          </div>
          <div className="flex justify-center items-center bg-gray-100">
            <Image src={imageblock} alt="About Us" className="max-w-full" />
          </div>
        </div>

        {/* Brand Difference Section */}
        <div className="mb-12 pt-9">
          <h2 className="text-2xl font-semibold mb-8 text-center text-[#272343]">
            What Makes Our Brand Different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-lg bg-[#F9F9F9] text-center">
              <Image
                src={delivery}
                alt="Next day delivery"
                className="mx-auto"
              />
              <h3 className="font-medium mb-2 mt-2 text-[#007580]">
                Next day as standard
              </h3>
              <p className="text-[#007580]">
                Order before 2pm and get your chair the next day as standard.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#F9F9F9] text-center">
              <Image src={check} alt="Made by artisans" className="mx-auto" />
              <h3 className="font-medium mb-2 mt-2 text-[#007580]">
                Made by true artisans
              </h3>
              <p className="text-[#007580]">
                Handmade crafted goods made with passion and craftsmanship.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#F9F9F9] text-center">
              <Image
                src={purchase}
                alt="Unbeatable prices"
                className="mx-auto"
              />
              <h3 className="font-medium mb-2 mt-2 text-[#007580]">
                Unbeatable prices
              </h3>
              <p className="text-[#007580]">
                For a remarkable quality, you won’t find better prices anywhere.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#F9F9F9] text-center">
              <Image
                src={sprout}
                alt="Recycled packaging"
                className="mx-auto"
              />
              <h3 className="font-medium mb-2 mt-2 text-[#007580]">
                Recycled packaging
              </h3>
              <p className="text-[#007580]">
                We use 100% recycled materials for packaging to ensure more
                sustainability.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Products Section */}
        <div className="pt-8">
          <h2 className="text-2xl font-semibold mb-8 text-center lg:text-start text-[#272343]">Our Popular Products</h2>
          <div className="flex flex-wrap gap-6 lg:flex-nowrap space-y-5 lg:space-y-0">
            {/* First Card - Wider */}
            <div className="w-full lg:w-[50%]">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={large}
                  alt="The Popular Suede Sofa"
                  className="w-full h-[375px] object-fill lg:object-cover rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-[#2A254B]">
                  The Popular Suede Sofa
                </h3>
                <p className="text-[#2A254B]">$99.00</p>
              </div>
            </div>

            {/* Second Card */}
            <div className="w-full sm:w-[48%] lg:w-[25%]">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={pho}
                  alt="The Dandy Chair"
                  className="w-full   h-[375px] object-cover rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-[#2A254B]">
                  The Dandy Chair
                </h3>
                <p className="text-[#2A254B]">$59.00</p>
              </div>
            </div>

            {/* Third Card */}
            <div className="w-full sm:w-[48%] lg:w-[25%]">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={parent}
                  alt="The Dandy Chair"
                  className="w-full h-[375px] object-cover rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-[#2A254B]">
                  The Dandy Chair
                </h3>
                <p className="text-[#2A254B]">$59.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
