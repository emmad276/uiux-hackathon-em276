import React from "react";
import Image from "next/image";

import { Inter } from "next/font/google";

import { client } from "@/sanity/lib/client";
import Link from "next/link";
import buy3 from "@/app/public/Buy 3.png";

const inter = Inter({ subsets: ["latin"] });

const OurProducts = async () => {
  const productsRes = await client.fetch(`
        *[_type == "products"][0..7]{
          _id,
          title,
          price,
          priceWithoutDiscount,
          badge,
          "imageUrl": image.asset->url,
          category[]->{
            title
          },
          description,
          inventory,
          tags[0],
          "slug": slug.current
        }
      `);

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
          {productsRes.map((elem: any) => (
            <Link
              href={`/product-detail/${elem.slug}`}
              key={elem.slug}
              className="w-[48%] sm:w-[31%] lg:w-[23%] h-auto rounded-lg overflow-hidden hover:transition-transform hover:transform hover:scale-105"
            >
              <div className="relative h-48 lg:h-2/3">
                <Image
                  src={elem.imageUrl}
                  width={312}
                  height={312}
                  alt={elem.title}
                  className="w-full h-full object-cover"
                />
                {productsRes.badge && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {productsRes.badge}
                  </span>
                )}
              </div>
              <div className="flex items-center mt-3 px-3 ">
                <div className="flex-1">
                  <h3
                    className={`text-[14px] sm:text-[16px] font-medium ${inter.className} text-[#007580]`}
                  >
                    {elem.title}
                  </h3>
                  <p
                    className={`mt-1 text-[16px] sm:text-[18px] font-bold ${inter.className} text-[#272343]`}
                  >
                    {elem.price}
                  </p>
                </div>
                <div>
                  
                  <button className="hover:bg-[#278088] bg-[#029FAE] w-[44px] h-[44px] rounded-lg flex items-center justify-center">
                    <Image src={buy3} alt="buy" width={25} height={25}></Image>
                  </button>
                </div>
              </div>
            </Link>
          ))}

          {/*
          The following product cards are commented out and do not affect the styling.
          */}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
