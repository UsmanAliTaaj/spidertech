import React from "react";
import {
  BsTwitter,
  BsYoutube,
  BsGithub,
  BsFillPhoneFill,
  BsInstagram,
} from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaHome, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8 py-10 border-t border-t-borderColor">
      <div className="flex flex-col gap-4">
        <h2 className="font-titleFont text-2xl font-normal tracking-wider">
          Spider Tech
        </h2>
        <p className="text-base text-darkText tracking-wide">
          Spider Tech builds trust through transparency, reliability, and
          top-tier web solutions. We prioritize client success with secure,
          scalable, and innovative development.
        </p>
        {/* <p className="flex items-center text-lg gap-5">
          <BsTwitter className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          <ImFacebook className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          <BsYoutube className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          <BsGithub className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
        </p> */}
        <p className="flex items-center text-lg gap-5">
          <a
            href="https://www.tiktok.com/@yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          </a>
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImFacebook className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          </a>
          <a
            href="https://www.youtube.com/@yourchannel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsYoutube className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          </a>
        </p>
      </div>
      <div>
        <h3 className="font-titleFont text-xl font-semibold mb-4">
          Contact Info
        </h3>
        <div className="flex flex-col gap-6">
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <FaHome />
            </span>
            Peer Colony Walton. Lahore Pakistan
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <MdEmail />
            </span>
            spidertech@gmail.com
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <BsFillPhoneFill />
            </span>
            +92 309 149 0107
          </p>
        </div>
      </div>
      {/* <div>
        <h3 className="font-titleFont text-xl font-semibold mb-4">
          Blog Contains
        </h3>
        <div className="flex flex-col gap-6">
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <FaHome />
            </span>
            198 West 21th Street, Suite 721 New York, NY 10010
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <MdEmail />
            </span>
            reactjsbd@gmail.com
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <BsFillPhoneFill />
            </span>
            +00 24187627
          </p>
        </div>
      </div> */}
      <div>
        <h3 className="font-titleFont text-xl font-semibold mb-4">Support</h3>
        <p className="text-base text-darkText">
          At Spider Tech, we are committed to providing top-notch support and
          resources to ensure seamless experiences with our web development
          solutions. Whether you need technical assistance or the latest
          software updates, you’ve come to the right place.
        </p>
      </div>
    </div>
  );
};

export default Footer;
