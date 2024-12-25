import React from "react";

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[#0D2F3A] py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Let's collaborate on your upcoming cab ride.
              </h1>
              <p className="text-gray-400">
                Turn your everyday commute into a shared journey with Pool&Go.
                Connect with fellow travelers, save on costs, and enjoy a more
                social and sustainable way to travel.
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              <a
                href="#"
                className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase " 
              >
                Download APP
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
