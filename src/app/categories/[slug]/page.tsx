import React from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

interface CategoryProps {
  params: { slug: string };
}

export default async function CategoryPage({ params }: CategoryProps) {
  // Selected category ke details aur uske products fetch karo
  const category = await client.fetch(
    `
    *[_type == "categories" && slug.current == $slug][0]{
      title,
      "products": products[]->{
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
    }
    `,
    { slug: params.slug }
  );

  if (!category) {
    return <div className="text-center mt-10">Category not found.</div>;
  }

  const { title, products } = category;

  return (
    <div className="w-full">
      <div className="w-[77.5%] mx-auto my-5">
        <h1 className={`${inter.className} text-3xl font-bold text-[#272343]`}>
          {title}
        </h1>
      </div>
      <div className="w-[77.5%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products && products.length > 0 ? (
          products.map((product: any) => (
            <Link
              key={product._id}
              href={`/product-detail/${product.slug}`}
              className="border rounded-lg overflow-hidden hover:shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className={`${inter.className} text-lg font-semibold text-[#007580]`}>
                  {product.title}
                </h2>
                <p className="text-[#272343] font-bold mt-2">${product.price}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No products available in this category.
          </div>
        )}
      </div>
    </div>
  );
}
