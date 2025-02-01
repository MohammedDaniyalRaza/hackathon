"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Trash2, Heart } from "lucide-react";

interface CartItemProps {
  id: number;
  image: string;
  title: string;
  price: number;
  subtitle: string;
  quantity: number;
  liked: boolean;
}

export const CartItem: React.FC<CartItemProps> = (props) => {
  const { id, image, title, price, subtitle, quantity, liked } = props;
  const { removeFromCart, toggleLike } = useCart();

  // Ensure the ID is correctly passed
  console.log("Rendering item with ID:", id);

  const handleRemove = () => {
    if (id !== undefined) {
      console.log("Removing item with ID:", id);
      removeFromCart(id);
    } else {
      console.error("Error: ID is undefined for removeFromCart");
    }
  };

  const handleLike = () => {
    if (id !== undefined) {
      console.log("Toggling like for ID:", id, "Current liked status:", liked);
      toggleLike(id);
    } else {
      console.error("Error: ID is undefined for toggleLike");
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div className="ml-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold">${price}</p>
        <p className="text-sm text-gray-500">Qty: {quantity}</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={handleLike}
            className={`text-sm ${liked ? "text-red-500" : "text-gray-500"}`}
          >
            <Heart className="w-5 h-5" fill={liked ? "red" : "none"} />
          </button>
          <button
            onClick={handleRemove}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
