import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default async function Categories() {
  // Sanity se categories fetch karo
  const categoriesRes = await client.fetch(`
    *[_type == "categories"]{
      title,
      "imageUrl": image.asset->url,
      "slug": slug.current,
      products
    }
  `);

  if (!categoriesRes || categoriesRes.length === 0) {
    return <div>No categories available at the moment.</div>;
  }

  return (
    <div>
      {/* Header */}
      <div className="w-[90%] lg:w-[77.5%] mx-auto h-[44px] my-5">
        <h1 className={`h-[35px] ${inter.className} font-bold text-[24px] lg:text-[32px] leading-[35.2px] text-[#272343]`}>
          Top Categories
        </h1>
      </div>

      {/* Category Cards */}
      <div className="flex justify-center">
        <div className="w-[90%] lg:w-[77.5%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoriesRes.map((elem: any) => (
            <Link href={`/categories/${elem.slug}`} key={elem.slug}>
              <div className="relative rounded-lg shadow-lg overflow-hidden h-[377px] hover:transition-transform hover:transform hover:scale-105">
                <Image
                  src={elem.imageUrl}
                  alt={elem.title}
                  fill
                  className="object-cover"
                />
                <div className="bg-black bg-opacity-70 absolute bottom-0 w-full p-4 text-white">
                  <h3 className="font-semibold text-lg">{elem.title}</h3>
                  <p className="text-sm">{elem.products?.length || 0} Products</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
