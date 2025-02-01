"use client"; // Add this line at the top

import { CartItem } from "../components/CartItem";
import { OrderSummary } from "../components/OrderSummary";
import React from "react";
import { useCart } from "@/context/CartContext"; // Import useCart

const CartPage = () => {
  const { cartItems } = useCart(); // Use useCart hook

  // Calculate subtotal, shipping, and total
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? "Free" : 0;
  const total = subtotal + (shipping === "Free" ? 0 : shipping);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-medium text-gray-900 mb-6 md-px-0 px-5">
              Item's Not Found
            </h1>
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  image={item.imageUrl}
                  title={item.name}
                  price={item.price}
                  subtitle={item.name}
                  quantity={item.quantity}
                  liked={item.liked}
                />
              ))}
            </div>
          </div>
          <div>
            <OrderSummary
              subtotal={subtotal}
              shipping={shipping}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;