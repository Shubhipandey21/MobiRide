import React, { useEffect } from "react";
import CarVideo from "../../assets/HeroVideo.mp4";
import AOS from "aos";
import Typewriter from "typewriter-effect";


const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
    
     <div
      className={`duration-300 relative h-full ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
      style={{ minHeight: "620px" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={CarVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for gradient or dimming effect */}
      <div
        className="absolute inset-0 bg-black opacity-70"
        style={theme === "dark" ? { opacity: 0.7 } : { opacity: 0.7 }}
      ></div>

      {/* Content Section */}
      <div className="relative z-12 container flex items-center justify-end min-h-[620px]">
        
        
          {/* Text Content */}
          <div
            className="space-y-5 text-left sm:pr-10 max-w-[600px]"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {/* Title with Typewriter Effect */}
            <h1
              className="text-5xl lg:text-7xl font-semibold font-serif"
              style={{ color: theme === "dark" ? "white" : "#FFFF" }}
            >
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  cursor: "",
                  strings: [
                    "Ride Your Way:",
                    "Fast, Safe, and Reliable",
                    "Start Your Journey Today!",
                  ],
                }}
              />
            </h1>

            {/* Description */}
            <p
              style={{ color: theme === "dark" ? "white" : "white" }}
              className="text-lg sm:text-xl"
            >
              Book your ride effortlessly with our easy-to-use cab ordering
              service. Enjoy safe, reliable, and fast transportation at your
              fingertips anytime, anywhere.
            </p>

            {/* Get Started Button */}
            <button
              className={`rounded-md transition duration-500 py-2 px-6 ${
                theme === "dark"
                  ? "bg-[#D7DF7F] text-black"
                  : "bg-[#D7DF7F] text-black"
              }`}
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => AOS.refreshHard()}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
   
    </>
   
  );
};

export default Hero;
