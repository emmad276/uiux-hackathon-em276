"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import bin from "@/app/public/bin.png";
import { Product } from "@/types/product";
import Link from "next/link";

interface CartProduct extends Product {
  quantity: number;
}

const CartPage = () => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      const storedCartStr = localStorage.getItem("cart");
      let storedCart;
      try {
        storedCart = storedCartStr ? JSON.parse(storedCartStr) : [];
      } catch (error) {
        storedCart = [];
      }
      // Ensure storedCart is an array
      setCart(Array.isArray(storedCart) ? storedCart : []);
    }
  }, []);

  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  if (!isClient) return null;

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 gap-5 w-full md:w-[90%] lg:w-[77.5%] mb-12 mt-8">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6 text-[#111111]">Bag</h2>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="flex lg:justify-between border-b pb-10 mb-5">
                <div className="flex">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={150}
                    height={150}
                    className="rounded-md"
                  />
                  <div className="ml-4 flex flex-col justify-between">
                    <div>
                      <h3 className="font-normal text-[16px] leading-[20.08px] text-[#272343]">
                        {item.title}
                      </h3>
                      <p className="text-[15px] text-[#757575] font-normal mt-4">
                        {item.category}
                      </p>
                      <p className="text-[15px] text-[#757575] font-normal mt-2">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="mt-3 flex space-x-3 text-gray-600">
                      <IoMdHeartEmpty className="w-[24px] h-[24px] text-black" />
                      <button onClick={() => removeFromCart(index)}>
                        <Image src={bin} alt="Delete" className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <p className="lg:text-[15px] text-[11px] font-normal text-[#111111]">
                  ${item.price}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">Your cart is empty.</p>
          )}
        </div>

        {/* Summary Section */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg p-4">
          <h2 className="text-[21px] font-semibold mb-6 text-[#111111]">
            Summary
          </h2>
          <div className="flex justify-between mb-2">
            <p className="text-[#111111]">Subtotal</p>
            <p className="font-medium text-[#111111]">
              $
              {cart
                .reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )
                .toFixed(2)}
            </p>
          </div>
          <Link href="/contact">
          <button className="hover:bg-[#278088]  mt-6 w-full bg-[#029FAE] text-white py-3 rounded-full font-medium">
            Member Checkout
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default CartPage;
