import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SaveMoneyimg from "../../assets/whychooseus1.png";
import ShareJourneyimg from "../../assets/whychooseus2.png";
import MakeNewFriendsimg from "../../assets/whychooseus3.png";
import FindQuickRidesimg from "../../assets/whychooseus4.png";
import OfferRidesimg from "../../assets/whychooseus5.png";
import ScheduleTripimg from "../../assets/whychooseus6.png";

// Carousel data
const skillsData = [
  {
    name: "Save Money",
    icon: <img src={SaveMoneyimg} alt="Save Money" className="w-40 h-40" />,
    description: "Just enter your route and find affordable rides within minutes!",
  },
  {
    name: "Share the Journey",
    icon: <img src={ShareJourneyimg} alt="Share the Journey" className="w-40 h-40" />,
    description: "Share your ride and enjoy the journey with fellow travelers!",
  },
  {
    name: "Make New Friends",
    icon: <img src={MakeNewFriendsimg} alt="Make New Friends" className="w-40 h-40" />,
    description: "Connect with new people and create memorable journeys together!",
  },
  {
    name: "Find Quick Rides",
    icon: <img src={FindQuickRidesimg} alt="Find Quick Rides" className="w-40 h-40" />,
    description: "Find instant rides to your destination with ease!",
  },
  {
    name: "Offer rides on the go",
    icon: <img src={OfferRidesimg} alt="Offer rides on the go" className="w-40 h-40" />,
    description: "Offer rides instantly and help others reach their destinations.",
  },
  {
    name: "Schedule your trips",
    icon: <img src={ScheduleTripimg} alt="Schedule your trips" className="w-40 h-40" />,
    description: "Schedule your trips in advance for seamless planning!",
  },
];

// Custom arrows
const CustomPrevArrow = ({ onClick }) => (
  <div
  onClick={onClick}
  className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-black bg-gray-200 hover:bg-gray-400 shadow-lg p-3 rounded-full"
  style={{ fontSize: "1.5rem", lineHeight: "1rem" }}
>
  ◀
</div>
);

const CustomNextArrow = ({ onClick }) => (
<div
  onClick={onClick}
  className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-black bg-gray-200 hover:bg-gray-400 shadow-lg p-3 rounded-full"
  style={{ fontSize: "1.5rem", lineHeight: "1rem" }}
>
  ▶
</div>
);

const Services = () => {
   // React Slick settings
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="dark:bg-dark dark:text-white bg-slate-200 h-screen flex flex-col justify-center items-center py-14">
      <span id="services"></span>
      <div className="container">
        <div className="pb-12">
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl font-serif"
          >
            Why Choose Us
          </h1>
        </div>
        <Slider {...settings}>
          {skillsData.map((skill, index) => (
            <div key={index} className="p-4">
              <div
                className="card group space-y-4 p-8 bg-dark text-white rounded-lg hover:text-black duration-300"
                style={{
                  backgroundColor: "#0D2F3A",
                  minHeight: "450px", // Adjusted card height
                  minWidth: "350px", // Adjusted card width
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#D7DF7F")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0D2F3A")
                }
              >
                <div className="grid place-items-center">
                  <img
                    src={skill.icon.props.src}
                    alt={skill.icon.props.alt}
                    className="w-48 h-48" // Increased image size
                  />
                </div>
                <h1 className="text-xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};


export default Services;
