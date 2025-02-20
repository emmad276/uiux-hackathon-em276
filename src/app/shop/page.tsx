import React from "react";
import Image from "next/image";

import { Inter } from "next/font/google";

import buy3 from "@/app/public/Buy 3.png";
const inter = Inter({ subsets: ["latin"] });

import { client } from "@/sanity/lib/client";
import Link from "next/link";

export default async function ProductPage() {
  const productsRes = await client.fetch(`
    *[_type == "products"]{
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

  console.log(productsRes);

  return (
    <div>
      <div className="w-[77.5%] mx-auto h-auto my-5 mt-17">
        <h1 className={`h-[35px] font-semibold text-[32px] leading-[35.2px] text-[#272343]`}>
          Best Selling Products
        </h1>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-[77.5%] flex justify-between flex-wrap">
          {productsRes.map((product: any) => (
            <Link
              href={`/product-detail/${product.slug}`}
              key={product.slug}
              className="hover:transition-transform hover:transform hover:scale-105 w-full sm:w-[48%] md:w-[30%] lg:w-[23%] h-[377px] rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-2/3">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="flex justify-between p-4 items-center">
                <div className="w-[80%]">
                  <h3 className="mt-3 font-normal text-[16px] leading-[20.08px] text-[#007580] h-[21px]">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-[18px] leading-[19.8px] font-bold text-[#272343]">
                    ${product.price}
                  </p>
                </div>
                <div>
                  <button className="hover:bg-[#278088] bg-[#029FAE] w-[44px] h-[44px] rounded-lg flex items-center justify-center">
                    <Image src={buy3} alt="buy" width={25} height={25} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
