import React from "react";
import Logo from "../assets/Logo.png";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="">
      <div className="h-[402px] flex justify-between items-center">
        <div className="px-8">
          <img src={Logo} alt="" />
          <div className="flex items-center mt-8">
            <p className="text-2xl">
              <IoIosMail />
            </p>
            <p>hello@skillbridge.com</p>
          </div>
          <div className="flex items-center mt-3">
            <p className="text-2xl">
              <FaPhone />
            </p>
            <p>+91 91813 23 2309</p>
          </div>
          <div className="flex items-center mt-3">
            <p className="text-2xl">
              <IoLocationSharp />
            </p>
            <p>Somewhere in the World</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">Home</h3>
          <p className="mt-3">Benefits</p>
          <p className="mt-2">Our Courses</p>
          <p className="mt-2">Our Testimonials</p>
          <p className="mt-2">Our FAQ</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">About Us</h3>
          <p className="mt-3">Company</p>
          <p className="mt-2">Achievements</p>
          <p className="mt-2">Our Goals</p>
        </div>
        <div className="mb-8 p-8">
          <h3 className="text-xl font-bold ">Social Profiles</h3>
          <div className="flex p-2 gap-4">
            <p className="text-2xl">
              <FaFacebook />
            </p>
            <p className="text-2xl">
              <FaTwitter />
            </p>
            <p className="text-2xl">
              <FaLinkedin />
            </p>
          </div>
        </div>
      </div>
      <div className="text-center font-bold text-lg">
        <p>© 2023 SkillBridge. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
