import React from "react";
import { FaGlobeAmericas, FaShareAlt } from "react-icons/fa";
import { BsPencilSquare, BsRobot } from "react-icons/bs";
import { RiCodeSSlashFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { BiCloud, BiDollar, BiMobile, BiShareAlt } from "react-icons/bi";
import { CgUserAdd } from "react-icons/cg";

const CoreServices = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 xl:px-28">
      <h3 className="font-titleFont uppercase text-3xl mdl:text-4xl font-bold text-white py-10 xl:py-16 text-center">
        Our Core <span className="text-secondaryColor">Services</span>
      </h3>
      <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-10">

      <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <RiCodeSSlashFill className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
            Web
            <span className="text-secondaryColor -mt-1">Development</span>
          </p>
        </div>

        <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <BiMobile className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
          Mobile App <span className="text-secondaryColor -mt-1">Development</span>
          </p>
        </div>      

        <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <SiAntdesign className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
          UI/UX
            <span className="text-secondaryColor -mt-1">Design</span>
          </p>
        </div>

        <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <BsRobot className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
          AI & Automation
            <span className="text-secondaryColor -mt-1">Solutions</span>
          </p>
        </div>

        <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <BiCloud className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
          Cloud & DevOps
            <span className="text-secondaryColor -mt-1">Solutions</span>
          </p>
        </div>

        <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <FaShareAlt className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
          Social Media
            <span className="text-secondaryColor -mt-1">Marketing</span>
          </p>
        </div>

        <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <CgUserAdd className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
          Fiverr Accounts
            <span className="text-secondaryColor -mt-1">Creation</span>
          </p>
        </div>
        <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <BiDollar className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
          Financial
            <span className="text-secondaryColor -mt-1">Consulting</span>
          </p>
        </div>
        <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <BiDollar className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
          Creating Payment Wallets
            <span className="text-secondaryColor -mt-1">PayPal Stripe Payoneer</span>
          </p>
        </div>
        <div className="w-full h-60 bg-transparent border border-borderColor hover:border-transparent hover:cursor-pointer transition-hover duration-500 hover:shadow-customShadowOne hover:shadow-secondaryColor flex flex-col justify-center items-center gap-6">
          <BiDollar className="text-5xl" />
          <p className="text-2xl font-semibold flex flex-col items-center">
          LTD LLC
            <span className="text-secondaryColor -mt-1">Company Registration</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default CoreServices;
