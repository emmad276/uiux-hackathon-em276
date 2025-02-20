import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default async function FeaturedProducts() {
  // Fetch exactly 5 featured products dynamically using GROQ
  const featuredProducts = await client.fetch(
    `
    *[_type == "products" ]{
      _id,
      title,
      price,
      "imageUrl": image.asset->url,
      "slug": slug.current
    }[0...5]
    `
  );

  if (!featuredProducts || featuredProducts.length === 0) {
    return (
      <div className="col-span-full text-center text-gray-500">
        No featured products available.
      </div>
    );
  }

  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 space-y-6 lg:space-y-0">
      {featuredProducts.map((prod: any) => (
        <Link href={`/product-detail/${prod.slug}`} key={prod._id}>
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="lg:h-[160px] h-auto flex items-center justify-center">
              <Image
                src={prod.imageUrl}
                alt={prod.title}
                className="object-cover h-full w-full"
                width={160}
                height={160}
              />
            </div>
            <div className="flex justify-between mt-3">
              <div className={`${inter.className} text-sm font-normal text-[#272343]`}>
                {prod.title}
              </div>
              <div className={`${inter.className} text-sm text-black font-bold`}>
                ${prod.price}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
