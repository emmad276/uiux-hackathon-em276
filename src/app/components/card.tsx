import React from 'react';
import Image from 'next/image';
import card1 from "@/app/public/card1.png";
import card2 from "@/app/public/card2.png";
import card3 from "@/app/public/card3.png";
import card4 from "@/app/public/card4.png";
import { Inter } from 'next/font/google';
import addcart1 from "@/app/public/addcart1.png";
import addcart2 from "@/app/public/addcart2.png";
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import buy3 from "@/app/public/Buy 3.png";

const inter = Inter({ subsets: ["latin"] });

const ProductCard = async () => {
  // Fetch only 4 products using the slice [0..3]
  const productsRes = await client.fetch(`
      *[_type == "products"][0..3]{
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
      <div className='w-[90%] lg:w-[77.5%] mx-auto h-[44px] my-5'>
        <h1 className={`${inter.className} h-[35px] font-bold text-[24px] lg:text-[32px] leading-[35.2px] text-[#272343]`}>
          Featured Products
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="w-[90%] lg:w-[77.5%] flex flex-wrap gap-5 justify-between">
          {productsRes.map((elem: any) => (
            <Link className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] h-[377px] rounded-lg overflow-hidden hover:transition-transform hover:transform hover:scale-105" href={`/product-detail/${elem.slug}`} key={elem.slug}>
            
              <div className="relative h-2/3">
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
              <div className="flex justify-between mt-3 px-3 ">
                <div className='w-[81%]'>
                  <h3 className={`${inter.className} mt-3 font-normal text-[16px] leading-[20.08px] text-[#007580] h-[21px]`}>
                    {elem.title}
                  </h3>
                  <p className={`${inter.className} mt-2 text-[18px] leading-[19.8px] font-bold text-[#272343]`}>
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
          The following card examples are commented out. 
          They will not render and do not affect the styling.
          */}
          
          {/*
          <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] h-[377px] rounded-lg overflow-hidden">
            <div className="relative h-2/3">
              <Image
                src={card2}
                alt="Library Stool Chair"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-[#F5813F] text-white text-xs font-semibold px-2 py-1 rounded-full">
                Sales
              </span>
            </div>
            <div className="flex justify-between">
              <div className='w-[81%]'>
                <h3 className={`${inter.className} mt-3 font-normal text-[16px] leading-[20.08px] text-[#272343]`}>
                  Library Stool Chair
                </h3>
                <p className={`${inter.className} mt-2 text-[18px] leading-[19.8px] font-bold text-[#272343]`}>
                  $20
                </p>
              </div>
              <div>
                <Image className='mt-3' src={addcart2} alt='add cart2' />
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
