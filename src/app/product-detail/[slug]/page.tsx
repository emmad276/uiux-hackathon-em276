import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import AddToCart from "@/app/components/addToCart";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import FeaturedProducts from "@/app/components/Featured";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Props) {
  // Main product fetch
  const product = await client.fetch(
    `
    *[_type == "products" && slug.current == $slug][0]{
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
    `,
    { slug: params.slug }
  );

  if (!product) {
    return (
      <div className="text-center text-lg font-semibold mt-10">
        Product not found
      </div>
    );
  }

  return (
    <div className="w-full bg-white mb-10 lg:mb-36">
      {/* Main Product Content */}
      <div className="w-[77.5%] mx-auto mt-10">
        <div className="flex flex-col md:flex-row gap-14">
          {/* Product Image */}
          <div className="flex-1 relative">
            <div className="rounded-md flex items-center justify-center">
              <Image
                className="object-cover"
                width={675}
                height={607}
                src={product.imageUrl}
                alt={product.title || "Product Image"}
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-800">
              {product.title}
            </h1>

            <p
              className={`${inter.className} text-white w-[130px] p-1 text-center rounded-full text-[18px] font-semibold mt-4 bg-[#029FAE]`}
            >
              ${product.price} USD
            </p>
            <p className="border-t border-[#D9D9D9] w-full mt-6"></p>

            <p className="text-[#272343] mt-7 leading-relaxed">
              {product.description}
            </p>

            <AddToCart product={product} />
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="mt-16">
          <div className="flex justify-between items-center">
            <h2
              className={`${inter.className} text-2xl font-bold text-black leading-[33.89px]`}
            >
              Featured Products
            </h2>
            <Link
              href="../products"
              className="text-black font-medium text-sm hover:underline"
            >
              View all
            </Link>
          </div>

          {/* Dynamic Featured Products Component */}
          <FeaturedProducts />
        </div>
      </div>
    </div>
  );
}
