import { exploreNewProductsData } from "@/lib";
import Image from "next/image";

const ExploreProducts = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-center gap-5 px-4 md:px-0 mb-10">
      {/* Vertical Text and Main Image Section */}
      <div className="flex flex-col md:flex-row items-center gap-5 w-full md:w-auto">
        {/* Vertical Text */}
        <div className="explore-verticle">
        <div className="flex items-center justify-center rotate-280" style={{ writingMode: "vertical-lr" }}>
          <h1 className="text-2xl font-bold uppercase transform md:rotate-180">
            EXPLORE NEW AND POPULAR STYLES
          </h1>
        </div>
        </div>

        <div className="block md:hidden">
        <div className="explore-center text-center">
        <div className="">
          <h1 className="text-2xl font-bold uppercase">
            EXPLORE NEW AND POPULAR STYLES
          </h1>
        </div>
        </div>
        </div>

        {/* Main Image */}
        <div className="w-full md:w-[500px]">
          <Image
            src={"/chairs/img3.png"}
            alt="img 1 product"
            width={620}
            height={648}
            priority
            quality={100}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="w-full md:w-[500px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
        {exploreNewProductsData.map((item, index) => (
          <div key={index} className="w-full">
            <Image
              src={item.image}
              alt={item.alt}
              width={400}
              height={400}
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreProducts;