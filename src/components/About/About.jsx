import React from "react";
import AboutImgLight from "../../assets/AboutusLight.png";
import AboutImgDark from "../../assets/AboutusDark.png";

const About = () => {
  return (
    <>
      <span id="about"></span>
      <div className="relative dark:bg-black bg-white sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
        <div className="relative container">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            {/* Text Section */}
            <div className="sm:order-1 sm:text-left dark:text-white sm:pr-8">
              <div className="space-y-5 sm:p-16 pb-6">
                <h1 className="text-5xl sm:text-4xl font-bold font-serif">
                  India’s New Cab Sharing Solution
                </h1>
                <div className="max-w-4xl text-left">
                  <ul className="list-none space-y-4">
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">
                        ✔
                      </span>
                      <p className="text-xl">
                        We’re here to make your ride more than just a trip. Our
                        goal is to tackle India’s urban commuting challenges
                        with safe, affordable, and convenient rides.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">
                        ✔
                      </span>
                      <p className="text-xl">
                        Join us on this journey to save money, share
                        experiences, and make every commute a little easier.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">
                        ✔
                      </span>
                      <p className="text-xl">
                        Our shared cabs bring people together while saving money
                        and easing the road ahead.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">
                        ✔
                      </span>
                      <p className="text-xl">
                        Whether you're scheduling a trip or offering a ride on
                        the go, we're here to make your journey smoother,
                        faster, and friendlier.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 dark:text-green-400 mr-2">
                        ✔
                      </span>
                      <p className="text-xl">
                        Think of us for an experience that’s all about sharing
                        and connecting when you think of travel!
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="sm:order-2 w-full flex justify-center items-center">
              <img
                src={AboutImgLight}
                alt="About Us"
                className="max-h-[600px] w-auto dark:hidden object-contain"
              />
              <img
                src={AboutImgDark}
                alt="About Us Dark"
                className="max-h-[600px] w-auto hidden dark:block object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
