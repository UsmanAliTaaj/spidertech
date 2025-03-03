"use client";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import TitleBanner from "@/ui/TitleBanner";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

const faqData = [
  {
    _id: "01",
    title: "How to order from here?",
    subTitle:
      "Ordering is simple! Browse our services, select the one that fits your needs, and contact us through our website or WhatsApp. Our team will guide you through the process and provide a custom quote.",
  },
  {
    _id: "02",
    title: "Is services are applicable for me?",
    subTitle:
      "Yes! Our services cater to businesses, startups, freelancers, and individuals looking for web development, marketing, or consulting solutions. If you're unsure, contact us, and we’ll recommend the best service for you.",
  },
  {
    _id: "03",
    title: "How long it will take to delivery?",
    subTitle:
      "The delivery time depends on the complexity of the service. Most projects take between 3 to 14 days, but we provide an estimated timeframe before starting. Urgent requests may have faster turnaround times.",
  },
  {
    _id: "05",
    title: "Where is my Order?",
    subTitle:
      "You can track your order status by contacting our support team via email, WhatsApp, or live chat. We’ll keep you updated throughout the process and notify you once your order is complete.",
  },
];

const Faq = () => {
  return (
    <div className="w-full">
      <TitleBanner
        subtitle="Explore the Features"
        title="Frequently asked questions"
      />
      <div className="max-w-screen-2xl mx-auto flex flex-col mdl:flex-row justify-between gap-10 pb-20 pt-5 px-4">
        <div className="w-full mdl:w-3/4 flex flex-col gap-6">
          {/* ====================== Question 01 start here ======================== */}
          <div className="w-full flex flex-col gap-4">
            {faqData?.map((item) => (
              <Disclosure
                key={item?._id}
                as="div"
                className="p-6 hover:cursor-pointer"
                defaultOpen={false}
              >
                <DisclosureButton className="group relative flex w-full items-center justify-between">
                  <p
                    className={`absolute left-0 -top-10 w-full h-auto px-3 py-1 text-sm group-hover:text-white group-data-[open]:text-secondaryColor text-left duration-300 `}
                  >
                    {item?._id}
                    <span
                      className={`w-full h-[.5px] absolute left-0 bottom-0 group-hover:bg-secondaryColor group-data-[open]:bg-secondaryColor duration-500 bg-gray-500`}
                    ></span>
                    <span
                      className={`w-[1px] h-[10px] absolute left-0 bottom-0 group-hover:bg-secondaryColor group-data-[open]:bg-secondaryColor duration-500 bg-gray-500`}
                    ></span>
                  </p>

                  <span className="text-lg font-semibold text-white/80 group-data-[open]:text-white">
                    {item?.title}
                  </span>
                  <BiChevronDown className="size-6 fill-white/70 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white/80 tracking-wide leading-6">
                  {item?.subTitle}
                </DisclosurePanel>
              </Disclosure>
            ))}
          </div>
          {/* ====================== Question 01 end here ========================== */}
        </div>
        <div className="w-full mdl:w-1/4 font-titleFont">
          <h3 className="font-titleFont text-2xl underline underline-offset-4 decoration-[1px] decoration-secondaryColor">
            Contact Info
          </h3>
          <div className="mt-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg uppercase">Pakistan :</h4>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <FaHome />
                </span>
                Peer Colony Walton, <br />
                Lahore, Pakistan.
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <MdMarkEmailUnread />
                </span>
                spidertech143@gmail.com
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <BsPhoneFill />
                </span>
                +92 325 285 1891
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <IoLogoWhatsapp />
                </span>
                +92 309 149 0107
              </p>
            </div>
            {/* <div className="flex flex-col gap-2">
              <h4 className="text-lg uppercase">Oman :</h4>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <FaHome />
                </span>
                Muscat Business Area, Ruwi, <br />
                Muscat, Sultanate of Oman
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <MdMarkEmailUnread />
                </span>
                reactjsbd@gmail.com
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <BsPhoneFill />
                </span>
                +968 97859628
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <IoLogoWhatsapp />
                </span>
                +968 97859628
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
