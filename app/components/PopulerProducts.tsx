import React from "react";
import Image from "next/image";
interface ProductProps {
  image: string;
  name: string;
  price: number;
}

const Product = ({ image, name, price }: ProductProps) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden mb-4">
      <Image
        src={image}
        alt={name}
        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-[1.1]"
        width={300}
        height={300}
      />
    </div>
    <h3 className="text-lg font-medium text-[#2A254B]">{name}</h3>
    <p className="text-[#2A254B]">${price.toFixed(2)}</p>
  </div>
);

export function PopularProducts() {
  const products = [
    {
      id: 1,
      image:
        "/greensofa.jpeg",
      name: "The Poplar Inside Sofa",
      price: 99.0,
    },
    {
      id: 2,
      image:
        "/blackchair.jpeg",
      name: "The Dandy Chair",
      price: 99.0,
    },
    {
      id: 3,
      image:
        "/image.png",
      name: "The Dandy Stool",
      price: 99.0,
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-12 text-[#272343]">
        Our Popular Products
      </h2>
      <div className="flex grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <span className="w-7/12">
          {products.slice(0,1).map((product) => (
          <Product key={product.id} {...product}/>
          ))}
        </span>
        {products.slice(1,3).map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
