"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import buy3 from "@/app/public/Buy 3.png";
import { Product } from "@/types/product";

interface AddToCartProps {
  product: Product;
}

// Extend Product interface to include quantity
interface CartProduct extends Product {
  quantity: number;
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCartStr = localStorage.getItem("cart");
      let storedCart;
      try {
        storedCart = storedCartStr ? JSON.parse(storedCartStr) : [];
      } catch (error) {
        storedCart = [];
      }
      setCart(Array.isArray(storedCart) ? storedCart : []);
    }
  }, []);

  const handleClick = () => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item._id === product._id
      );
      let updatedCart;
      if (existingItem) {
        updatedCart = prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("cartUpdated"));
      }
      return updatedCart;
    });
  };

  return (
    <button
      onClick={handleClick}
      className="mt-5 rounded-lg flex items-center justify-center gap-2 w-[212px] h-[63px] bg-[#029FAE] cursor-pointer"
    >
      <Image src={buy3} alt="Buy Icon" />
      <span className="text-white font-semibold text-xl">
        Add to Cart
      </span>
    </button>
  );
};

export default AddToCart;
