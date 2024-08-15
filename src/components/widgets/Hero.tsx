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
    <div
      className="
     max-h-screen 
    flex m-6  mt-0  gap-2  bg-gray-100 rounded-[2.5rem]   
    max-sm:flex-col max-sm:items-center max-sm:p-2
    max-md:flex-col 
    max-lg:items-center
    lg:pl-8 lg:items-center lg:justify-center
    "
    >
      <div className=" flex flex-col max-sm:basis-1/2 max-lg:basis-[60%] lg:basis-[55%]    ">
        <div className="flex flex-col ">
          {/* Left Side */}
          <div className="text-center max-sm:p-2 font-bold max-md:px-4 max-sm:text-xl max-md:text-2xl max-lg:text-4xl  lg:text-left lg:ml-0 lg:p-0 lg:text-5xl text-[#333]">
            <h1 className="max-lg:m-2">
              Certified Cloud Native Applied Generative AI Engineer - PIAIC
            </h1>
          </div>
          <div
            className="flex   
          text-center justify-center lg:pt-8
          sm:text-center sm:justify-between sm:p-4 
          lg:text-start  lg:px-0
          "
          >
            <p className="font-small max-sm:text-sm max-md:text-base lg:text-lg  ">
              The Cloud Native Applied Generative AI Certification program
              equips you to create leading-edge Cloud Native AI and Physical AI
              solutions using a comprehensive cloud-native, AI, and Physical AI
              platform.
            </p>
          </div>
        </div>

        <div className="flex space-x-3 max-lg:items-center max-lg:justify-center  max-lg:mt-4 lg:mt-8 lg:items-start ">
          <div>
            <Buttons name="Apply Now" />
          </div>
          <div>
            <button className="  font-bold rounded-[9px] py-2 px-4 lg:py-3 lg:px-8 bg-white hover:bg-gray-100 hover:outline hover:outline-lime-600">
              {" "}
              Learn More &#8595;
            </button>
          </div>
        </div>
        <div className=" flex items-center max-lg:justify-center space-x-6 max-lg:mb-2 max-lg:mt-6 max-lg:px-2 lg:mt-8 lg:pb-4 ">
          <div className="flex items-center ">
            <Image className="customer" src={custemer1} alt="custemer 1" />
            <Image className="customer" src={custemer2} alt="custemer 2" />
            <Image className="customer" src={custemer3} alt="custemer 3" />
            <Image className="customer" src={custemer4} alt="custemer 4" />
            <Image className="customer" src={custemer5} alt="custemer 5" />
            <Image className="customer" src={custemer6} alt="custemer 6" />
          </div>
          <div>
            <p className=" text-xs sm:text-sm md:text-base lg:text-lg">
              <span className="text-red-700 font-bold  ">10,000+</span>
              tech community!
            </p>
          </div>
        </div>
      </div>
      <div className=" flex items-end p-4 justify-center max-lg:w-[50%] max-lg:h-[50%]">
        <Image className="" src={Hero5} alt="Hero Poster Student" />
      </div>
    </div>
  );
};

export default Hero;
