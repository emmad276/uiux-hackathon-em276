import React from "react";
import Image from "next/image";
import footerlogo from "@/app/public/footerlogo.png";
import face from "@/app/public/facebook.png";
import insta from "@/app/public/insta.png";
import pint from "@/app/public/pint.png";
import twit from "@/app/public/twitter.png";
import youtube from "@/app/public/youtube.png";

import { Inter } from "next/font/google";
import via from "@/app/public/via-modified.png";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="py-12 border-t w-full">
      <div className="w-[90%] lg:w-[77.5%] mx-auto flex lg:flex-nowrap flex-wrap gap-y-3 gap-x-6">
        {/* Logo and Description */}
        <div className="w-full lg:w-[32%] mb-8 lg:mb-0">
          <Image src={footerlogo} alt="Footer Logo" className="max-w-full" />
          <p
            className={`mb-6 mt-4 text-base leading-relaxed text-[#272343] ${inter.className}`}
          >
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          <div className="flex space-x-4">
            <Image
              className="w-[38px] h-[38px] max-w-full"
              src={face}
              alt="Facebook"
            />
            <Image
              className="w-[38px] h-[38px] max-w-full"
              src={twit}
              alt="Twitter"
            />
            <Image
              className="w-[38px] h-[38px] max-w-full"
              src={insta}
              alt="Instagram"
            />
            <Image
              className="w-[38px] h-[38px] max-w-full"
              src={pint}
              alt="Pinterest"
            />
            <Image
              className="w-[38px] h-[38px] max-w-full"
              src={youtube}
              alt="YouTube"
            />
          </div>
        </div>

        {/* Category Links */}
        <div className="w-full sm:w-1/2 lg:w-[15%] mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold text-[#9A9CAA] mb-4">
            Category
          </h3>
          <ul className="space-y-2">
            <li className={`text-base text-[#272343] ${inter.className}`}>
              Sofa
            </li>
            <li className={`text-base text-[#272343] ${inter.className}`}>
              Armchair
            </li>
            <li className={`text-base text-[#272343] ${inter.className}`}>
              Wing Chair
            </li>
            <li
              className={`text-base ${inter.className} text-[#007580] underline`}
            >
              Desk Chair
            </li>
            <li className={`text-base text-[#272343] ${inter.className}`}>
              Wooden Chair
            </li>
            <li className={`text-base text-[#272343] ${inter.className}`}>
              Park Bench
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="w-full sm:w-1/2 lg:w-[15%] mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold text-[#9A9CAA] mb-4">Support</h3>
          <ul className="space-y-2">
            {[
              "Help & Support",
              "Terms & Conditions",
              "Privacy Policy",
              "Help",
            ].map((item, idx) => (
              <li
                key={idx}
                className={`text-base text-[#272343] ${inter.className}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full lg:w-[43%]">
          <h3 className="text-lg font-semibold text-[#9A9CAA] mb-4">
            Newsletter
          </h3>
          <form className="flex flex-wrap gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-[65%] px-4 py-2 border border-gray-300 rounded-md text-[#9A9CAA]"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#029FAE] text-white rounded-md sm:w-[30%] w-full hover:bg-[#278088]"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-sm text-[#272343] w-full lg:w-[86%] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-[90%] lg:w-[77.5%] mx-auto mt-8 border-t pt-4 text-sm flex flex-wrap justify-between items-center gap-y-4">
        <p className="text-[#9A9CAA] mx-auto lg:mx-0">
          © 2021 - Blogy - Designed & Developed by
          <span className="pl-2 text-[#272343]">Zakroth</span>
        </p>
        <div className="flex space-x-4 mx-auto lg:mx-0">
          <Image
            src={via}
            alt="Paypal"
            className="w-auto h-[27px] "
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
