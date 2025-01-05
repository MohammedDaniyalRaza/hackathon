import { About } from "../components/About";
import { BrandFeatures } from "../components/Features";
import { PopularProducts } from "../components/PopulerProducts";
// import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto py-12 md:px-0 px-6">
        <About />
        <BrandFeatures />
        <PopularProducts />
      </div>
    </div>
  );
};

export default AboutPage;
