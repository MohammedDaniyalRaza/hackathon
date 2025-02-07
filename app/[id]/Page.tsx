"use client"; // Add this line at the top

import React from "react";
import { ShoppingCart } from "lucide-react";
import { products } from "@/lib/index";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster
import { useUser, SignInButton } from "@clerk/nextjs"; // Import useUser and SignInButton

const ProductDetail = ({ params }: { params: any }) => {
  const { id } = params; // Directly destructure params
  const { addToCart } = useCart();
  const { isSignedIn } = useUser(); // Check if user is signed in

  const featuredProductID = products.find(
    (product) => product.id === Number(id)
  );

  if (!featuredProductID) {
    return <div className="text-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!isSignedIn) {
      toast.error("Please sign in to add items to cart!"); // Show error if user is not signed in
      return;
    }

    if (!featuredProductID) {
      toast.error("Product not found!");
      return;
    }

    addToCart({
      id: featuredProductID.id,
      name: featuredProductID.name,
      price: featuredProductID.price,
      imageUrl: featuredProductID.imageUrl,
      quantity: 1, // Ensure quantity is included
      liked: false, // Add liked property
    });

    toast.success("Product added to cart!"); // Show popup
  };

  return (
    <div className="max-w-7xl mx-auto md:px-0 px-5 mt-20">
      <Toaster /> {/* Add Toaster component */}
      {id && id !== "" ? (
        <div className=" flex md:flex-row flex-col items-center justify-center gap-80">
          {/* Product Image */}
          <div className="bg-[#FFF3F3] rounded-lg overflow-hidden aspect-square">
            <Image
              src={featuredProductID.imageUrl}
              alt={featuredProductID.name}
              width={500} // Set width
              height={500} // Set height
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {featuredProductID.name}
            </h1>
            <div className="w-[130px] text-[#fff] bg-[#029FAE] flex items-center justify-center text-lg font-semibold mb-4 rounded-3xl py-2">
              <span>${featuredProductID.price.toFixed(2)} USD</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At sequi
              deleniti est totam repellendus dolorem!
            </p>
            {isSignedIn ? (
              <button
                onClick={handleAddToCart} // Use handleAddToCart function
                className="bg-[#029FAE] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#028a97] transition-colors duration-300 w-fit"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            ) : (
              <SignInButton mode="modal">
                <button className="bg-[#029FAE] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#028a97] transition-colors duration-300 w-fit">
                  <ShoppingCart className="w-5 h-5" />
                  Sign In to Add to Cart
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      ) : null}

      {/* Featured Products Section */}
      <div className="mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">FEATURED PRODUCTS</h2>
          <Link
            href="/products"
            className="text-gray-600 hover:text-[#029FAE] border-b-2 border-transparent border-gray-800 hover:border-[#029FAE] transition-colors duration-300"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.slice(0, 5).map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-2">
                <Link href={`/${product.id}`}>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={300} // Set width
                    height={300} // Set height
                    className="w-full h-48 object-cover group-hover:scale-[1.1] transition-transform duration-300"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-gray-600">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;