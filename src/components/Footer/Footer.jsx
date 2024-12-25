import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

// Import app store images
import AppDownloadImg from '../../assets/appDownloadimg.png'; // Replace with actual path to your Google Play image
import PoolGoLogo from '../../assets/pool go.svg';

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About Us",
    link: "/#about",
  },
  {
    title: "Why us",
    link: "/#services",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
];

const Footer = () => {
  return (
    <div className="bg-[#0D2F3A] dark:bg-dark mt-14  text-white">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
          <img src={PoolGoLogo} alt="Logo" className="w-32 h-auto p-3" />
            <p className="text-sm">
              Your Ride, Your Way – Affordable, Convenient, and Connected
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>D-553 GF PUL PRAHLAD PUR NEW DELHI - 110044</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 87503 94791</p>
            </div>
            {/* Social Handles */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* Important Links with App Download Icons */}
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
               
                {/* App Store Download Icons */}
                <div className="mt-4 flex gap-4 ">
                  <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                    <img src={AppDownloadImg} alt="Google Play Store" className="w-32 h-auto" />
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Links */}
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3 ">
                  {FooterLinks.map((link) => (
                    <li key={link.title} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-white dark:text-gray-200">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
