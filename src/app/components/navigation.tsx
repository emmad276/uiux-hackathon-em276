"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import check from "@/app/public/check 1.png";
import { Inter } from "next/font/google";
import group from "@/app/public/Group.svg";
import alert from "@/app/public/alert-circle 1.svg";
import logo from "@/app/public/Logo (1).png";
import buy3 from "@/app/public/Buy 3.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Navigation = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      let storedCart;
      try {
        storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      } catch (error) {
        storedCart = [];
      }
      const cartArray = Array.isArray(storedCart) ? storedCart : [];
      setCartCount(
        cartArray.reduce(
          (total: number, item: any) => total + (item.quantity || 0),
          0
        )
      );
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);
    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <div>
      {/* Announcement Bar */}
      <div className="w-full bg-[#272343]">
        <div className="text-white w-[77.5%] mx-auto h-auto flex flex-col sm:flex-row justify-between items-center py-2 sm:py-[14px]">
          <div className="flex items-center gap-2 sm:gap-[8px] opacity-70 mb-2 sm:mb-0">
            <Image src={check} alt="check" />
            <div className={`${inter.className} font-normal text-[13px] sm:w-[231px] leading-[14.3px]`}>
              Free shipping on all orders over $50
            </div>
          </div>
          <div className="flex-wrap hidden md:flex items-center gap-4 sm:gap-[24px] opacity-70">
            <div className="flex items-center text-[13px] gap-2">
              <h1>ENG</h1>
              <Image src={group} alt="drop-down" />
            </div>
            <div className={`${inter.className} flex items-center font-normal text-[13px]`}>
              Faqs
            </div>
            <div className="flex items-center gap-2 text-[13px]">
              <Image src={alert} alt="alert" />
              <h1>Need Help</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Middle */}
      <div className="w-full bg-[#F0F2F3]">
        <div className="w-[77.5%] mx-auto h-auto flex justify-between items-center py-[20px]">
          <Link href="/"><Image src={logo} alt="logo" className="w-[160px] h-auto md:w-[180px]" /></Link>
          <Link
            href="/cart"
            className="w-[120px] h-[44px] flex items-center justify-between gap-2 bg-white px-2 rounded-md shadow-md"
          >
            <Image src={buy3} alt="Cart Icon" width={20} height={20} />
            <h1 className="text-sm font-medium">Cart</h1>
            <span className="w-[24px] h-[24px] bg-[#007580] text-white text-xs font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>

      {/* Navigation Links and Contact */}
      <div className="w-full h-auto flex flex-col sm:flex-row justify-between items-center py-6 px-4 sm:px-[50px] md:px-[100px] lg:px-[150px] gap-4">
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-[32px] text-[#007580]">
          {["/", "/shop", "/products", "/about", "/faq"].map((path, index) => (
            <Link
              key={index}
              href={path}
              className={`${inter.className} font-medium text-[14px] sm:text-[15px] leading-[15.4px]`}
            >
              {path.replace("/", "") || "Home"}
            
            </Link>
          ))}
        </div>
        <div className="hidden md:flex flex-wrap items-center justify-center sm:justify-end gap-2 text-center sm:text-left">
          <h1 className={`${inter.className} font-normal text-[14px] leading-[15.4px] text-[#636270]`}>
            Contact:
          </h1>
          <h1 className={`${inter.className} font-medium text-[14px] leading-[15.4px] text-[#272343]`}>
            (808) 555-0111
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
