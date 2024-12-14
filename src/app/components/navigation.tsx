import React from "react";
import Image from "next/image";
import check from "@/app/public/check 1.png";
import { Inter } from "next/font/google";
import group from "@/app/public/Group.svg";
import alert from "@/app/public/alert-circle 1.svg";
import logo from "@/app/public/Logo (1).png";
import user from "@/app/public/User Links.png";

const inter = Inter({ subsets: ["latin"] });
const Navigation = () => {
  return (
    <div>
      {/* Announcement Bar */}
      <div className="w-full bg-[#272343]">
        <div className="text-white  w-[77.5%] mx-auto h-auto flex flex-col sm:flex-row justify-between items-center py-2 sm:py-[14px]">
          {/* Left Section */}
          <div className="flex items-center gap-2 sm:gap-[8px] opacity-70 mb-2 sm:mb-0">
            <div>
              <Image src={check} alt="check" />
            </div>
            <div
              className={`${inter.className} font-normal text-[13px] sm:w-[231px] leading-[14.3px]`}
            >
              Free shipping on all orders over $50
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-wrap hidden md:flex items-center gap-4 sm:gap-[24px] opacity-70">
            {/* Language Selector */}
            <div className="flex items-center text-[13px] gap-2">
              <h1>ENG</h1>
              <Image src={group} alt="drop-down" />
            </div>

            {/* FAQs */}
            <div
              className={`flex items-center ${inter.className} font-normal text-[13px]`}
            >
              Faqs
            </div>

            {/* Need Help */}
            <div className="flex items-center gap-2 text-[13px]">
              <Image src={alert} alt="alert" />
              <h1>Need Help</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Middle */}
      <div className="w-full bg-[#F0F2F3]">
        <div className=" w-[77.5%] mx-auto h-auto flex justify-between items-center py-[20px]">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="logo"
              className="w-[160px] h-auto md:w-[180px]"
            />
          </div>

          {/* User Links Section */}
          <div className="flex-shrink-0">
            <Image
              src={user}
              alt="user-link"
              className="w-[100px] md:w-[120px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Last */}
      <div className="w-full h-auto flex flex-col sm:flex-row justify-between items-center py-6 px-4 sm:px-[50px] md:px-[100px] lg:px-[150px] gap-4  ">
        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-[32px] text-[#007580]">
          <li
            className={`${inter.className} font-medium text-[14px] sm:text-[15px] leading-[15.4px]`}
          >
            Home
          </li>
          <li
            className={`${inter.className} font-medium text-[14px] sm:text-[15px] leading-[15.4px]`}
          >
            Shop
          </li>
          <li
            className={`${inter.className} font-medium text-[14px] sm:text-[15px] leading-[15.4px]`}
          >
            Product
          </li>
          <li
            className={`${inter.className} font-medium text-[14px] sm:text-[15px] leading-[15.4px]`}
          >
            Pages
          </li>
          <li
            className={`${inter.className} font-medium text-[14px] sm:text-[15px] leading-[15.4px]`}
          >
            About
          </li>
        </ul>

        {/* Contact Section */}
        <div className="hidden md:flex flex-wrap items-center justify-center sm:justify-end gap-2 text-center sm:text-left">
          <h1
            className={`${inter.className} font-normal text-[14px] leading-[15.4px] text-[#636270]`}
          >
            Contact:
          </h1>
          <h1
            className={`${inter.className} font-medium text-[14px] leading-[15.4px] text-[#272343]`}
          >
            (808) 555-0111
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
