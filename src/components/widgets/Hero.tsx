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
    <div className="flex flex-col mt-0  gap-2 items-center  bg-gray-100 rounded-[2.5rem] m-6 lg:flex-row lg:pl-8 ">
      <div className=" flex flex-col justify-center items-center lg:basis-[55%]  lg:pl-4  ">
        <div className="flex flex-col items-center justify-center">
          {/* Left Side */}
          <div className="text-center font-semibold p-6 text-3xl lg:font-bold lg:text-5xl text-[#333]">
            <h1>
              Certified Cloud Native Applied Generative AI Engineer - PIAIC
            </h1>
          </div>
          <div className="flex text-center justify-between  items-center  ">
            <p className="font-medium px-2 ">
              The Cloud Native Applied Generative AI Certification program
              equips you to create leading-edge Cloud Native AI and Physical AI
              solutions using a comprehensive cloud-native, AI, and Physical AI
              platform.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 justify-center mt-8 lg:mt-14 lg:items-center  ">
          <Buttons name="Apply Now" />
          <button className="  font-bold rounded-[9px] py-2 px-4 lg:py-3 lg:px-8 bg-white hover:bg-gray-100 hover:outline hover:outline-lime-600">
            {" "}
            Learn More &#8595;
          </button>
        </div>
        <div className=" flex items-center justify-center space-x-6 mt-8 lg:mt-14">
          <div className="flex items-center ">
            <Image className="customer" src={custemer1} alt="custemer 1" />
            <Image className="customer" src={custemer2} alt="custemer 2" />
            <Image className="customer" src={custemer3} alt="custemer 3" />
            <Image className="customer" src={custemer4} alt="custemer 4" />
            <Image className="customer" src={custemer5} alt="custemer 5" />
            <Image className="customer" src={custemer6} alt="custemer 6" />
          </div>
          <div>
            <p className=" text-[12px] ">
              <span className="text-red-700 font-bold lg:text-lg ">
                10,000+
              </span>
              tech community!
            </p>
          </div>
        </div>
      </div>
      <div className=" flex items-end p-4 justify-center">
        <Image className="" src={Hero5} alt="Hero Poster Student" />
      </div>
    </div>
  );
};

export default Hero;
