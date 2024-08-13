import Image from "next/image";
import React from "react";
import HeroPoster from "@/assets/images/hero-image.png";
import Hero4 from "@/assets/images/hero4.png";
import Hero5 from "@/assets/images/hero5.png";
import Hero3 from "@/assets/images/hero3.png";
import Wrapper from "@/components/shared/Wrapper";
import Buttons from "@/components/shared/Buttons";
import custemer1 from "@/assets/customers/customer-1.jpg";
import custemer2 from "@/assets/customers/customer-2.jpg";
import custemer3 from "@/assets/customers/customer-3.jpg";
import custemer4 from "@/assets/customers/customer-4.jpg";
import custemer5 from "@/assets/customers/customer-5.jpg";
import custemer6 from "@/assets/customers/customer-6.jpg";

const Hero = () => {
  return (
    <div className="flex  gap-2 items-center  pl-8 bg-gray-100 rounded-[2.5rem] m-6 mt-0">
      <div className="pl-4 basis-[55%] items-center ">
        {/* Left Side */}
        <h1 className="font-bold text-5xl text-[#333] mb-9">
          Certified Cloud Native Applied Generative AI Engineer - PIAIC
        </h1>
        <p className="font-medium mb-10  text-[#333] pr-12">
          The Cloud Native Applied Generative AI Certification program equips
          you to create leading-edge Cloud Native AI and Physical AI solutions
          using a comprehensive cloud-native, AI, and Physical AI platform.
        </p>
        <div className="flex items-center space-x-3 ">
          <Buttons name="Apply Now" />
          <button className=" font-bold rounded-[9px] py-3 px-8 bg-white hover:bg-gray-100 hover:outline hover:outline-lime-600">
            {" "}
            Learn More &#8595;
          </button>
        </div>
        <div className="flex  items-center mt-14 ">
          <Image
            className="rounded-full mr-[-1.2rem] border-4 border-gray-100 h-14 w-14"
            src={custemer1}
            alt="custemer 1"
          />
          <Image
            className="rounded-full mr-[-1.2rem] border-4  border-gray-100 h-14 w-14"
            src={custemer2}
            alt="custemer 2"
          />
          <Image
            className="rounded-full mr-[-1.2rem] border-4  border-gray-100 h-14 w-14"
            src={custemer3}
            alt="custemer 3"
          />
          <Image
            className="rounded-full mr-[-1.2rem] border-4  border-gray-100 h-14 w-14"
            src={custemer4}
            alt="custemer 4"
          />
          <Image
            className="rounded-full mr-[-1.2rem] border-4  border-gray-100 h-14 w-14"
            src={custemer5}
            alt="custemer 5"
          />
          <Image
            className="rounded-full mr-[-1.5rem] border-4  border-gray-100 h-14 w-14"
            src={custemer6}
            alt="custemer 6"
          />
          <p className="ml-10 text-lg">
            {" "}
            <span className="text-red-700 font-bold text-lg"> 10,000+ </span>
            tech community members!
          </p>
        </div>
      </div>
      <div className=" flex items-end p-4 justify-center">
        <Image className="" src={Hero5} alt="Hero Poster Student" />
      </div>
    </div>
  );
};

export default Hero;
