// import { aboutUsImgOne } from "@/assets";
// import Image from "next/image";
// import React from "react";

// const Designing = () => {
//   return (
//     <div className="max-w-screen-2xl mx-auto flex flex-col mdl:flex-row justify-between items-center gap-32 px-10 pb-10">
//       <div className="w-full mdl:w-1/2">
//         <Image
//           className="w-80 mdl:w-full object-cover"
//           src={aboutUsImgOne}
//           alt="aboutUsImgOne"
//         />
//       </div>
//       <div className="w-full mdl:w-1/2 flex flex-col gap-10">
//         <div className="font-titleFont w-full mdl:w-5/6">
//           <h4 className="text-secondaryColor uppercase text-sm tracking-[4px] mb-2">
//             Spider Tech
//           </h4>
//           <h2 className="text-4xl mdl:text-[45px] font-semibold tracking-[2px] leading-[45px]">
//             Empowering Businesses with Cutting-Edge Web Solutions
//           </h2>
//         </div>
//         <div>
//           <div className="flex flex-col gap-8">
//             <div className="flex gap-10 mdl:w-4/5">
//               {/* <span className="font-titleFont relative font-normal border-b border-b-borderColor before:w-[1px] before:h-[7px] before:bg-borderColor before:inline-block before:left-0 before:bottom-0 before:absolute h-7 w-20 px-2">
//                 01
//               </span> */}
//               <p className="text-base text-darkText">
//                 At Spider Tech, we are passionate about crafting innovative web
//                 solutions that drive business growth and enhance digital
//                 experiences. With expertise in web development, software
//                 solutions, and online services, we help businesses establish a
//                 strong online presence with scalable, high-performance
//                 applications.
//               </p>
//             </div>
//             {/* <div className="flex gap-10 mdl:w-4/5">
//               <span className="font-titleFont relative font-normal border-b border-borderColor before:w-[1px] before:h-[7px] before:bg-borderColor before:inline-block before:left-0 before:bottom-0 before:absolute h-7 w-20 px-2">
//                 01
//               </span>
//               <p className="text-base text-darkText">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
//                 dolor exercitationem temporibus dolorem. Repudiandae ipsum!!
//               </p>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Designing;

import { aboutUsImgOne } from "@/assets";
import Image from "next/image";
import React from "react";

const Designing = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col mdl:flex-row justify-between items-center gap-32 px-10 pb-10">
      <div className="w-full mdl:w-1/2">
        <Image
          className="w-80 mdl:w-full object-cover"
          src={aboutUsImgOne}
          alt="aboutUsImgOne"
        />
      </div>
      <div className="w-full mdl:w-1/2 flex flex-col gap-10">
        <div className="font-titleFont w-full mdl:w-5/6">
          <h4 className="text-secondaryColor uppercase text-sm tracking-[4px] mb-2">
            Spider Tech
          </h4>
          <h2 className="text-4xl mdl:text-[45px] font-semibold tracking-[2px] leading-[45px]">
            Empowering Businesses with Cutting-Edge Web Solutions
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-base text-darkText">
            At Spider Tech, we are passionate about crafting innovative web
            solutions that drive business growth and enhance digital
            experiences. With expertise in web development, software
            solutions, and online services, we help businesses establish a
            strong online presence with scalable, high-performance
            applications.
          </p>
          <h3 className="text-xl font-semibold">Who We Are</h3>
          <p className="text-base text-darkText">
            We are a team of skilled developers, designers, and digital strategists
            committed to delivering high-quality solutions tailored to our clients' needs.
            Our mission is to empower businesses with technology by creating modern, user-friendly,
            and efficient digital products.
          </p>
          <h3 className="text-xl font-semibold">What We Do</h3>
          <ul className="list-disc list-inside text-base text-darkText">
            <li>Custom Web Development – Scalable and high-performance websites</li>
            <li>E-commerce Solutions – Build secure and conversion-focused online stores</li>
            <li>Mobile App Development – Native and cross-platform mobile applications</li>
            <li>UI/UX Design – Intuitive and visually appealing designs</li>
            <li>SEO & Digital Marketing – Boost online visibility and engagement</li>
            <li>Cloud Solutions – Secure and scalable cloud infrastructure</li>
          </ul>
          <h3 className="text-xl font-semibold">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-base text-darkText">
            <li>Expertise & Innovation – We use the latest technologies to create cutting-edge solutions.</li>
            <li>Client-Centric Approach – Our solutions are tailored to meet unique business needs.</li>
            <li>End-to-End Services – From concept to launch, we handle everything.</li>
            <li>Reliable Support – We provide ongoing maintenance and technical support.</li>
          </ul>
          <h3 className="text-xl font-semibold">Our Vision</h3>
          <p className="text-base text-darkText">
            To be a leading tech-driven company that transforms businesses digitally and creates impactful web experiences that stand the test of time.
          </p>
          <h3 className="text-xl font-semibold">Get in Touch</h3>
          <p className="text-base text-darkText">
            Let's build something amazing together! Whether you need a website, app, or digital solution, Spider Tech is here to help.
          </p>
          <p className="text-base text-darkText">
            📧 Email: spidertech143@gmail.com <br />
            🌐 Website: <a href="https://www.spidertech.com" className="text-blue-500">www.spidertech.com</a> <br />
            {/* 📱 Follow Us: [Facebook] | [Instagram] | [TikTok] | [LinkedIn] */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Designing;
