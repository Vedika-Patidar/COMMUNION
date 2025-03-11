import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

// Testimonial Data
const Slides = [
  {
    text: "Communion has transformed how I connect with my community, fostering unity and understanding among diverse...",
    name: "John M.",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    text: "Being part of Communion is life-changing, blending innovation with spirituality to create a truly inclusive space...",
    name: "Rohan K.",
    country: "India",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    text: "Through Communion, I've joined events and discussions that broadened my perspective and connected me globally...",
    name: "Amira L.",
    country: "UAE",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    text: "The connections I’ve made through Communion have been invaluable in both my personal and professional growth...",
    name: "Liam T.",
    country: "Canada",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

// Custom Next and Previous Buttons
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -bottom-20 right-1/2 translate-x-12 bg-emerald-600 p-2 rounded-full text-white "
  >
    <FaChevronRight className="text-xl"/>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -bottom-20 left-1/2 -translate-x-12 bg-emerald-600 p-2 rounded-full text-white"
  >
    <FaChevronLeft className="text-xl" />
  </button>
);

const Cards = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [{ breakpoint: 1024, settings: { slidesToShow: 1 } }],
  };

  return (
    <div className="bg-gray-100 h-[65vh]">
      <div className="py-12 px-6 max-w-5xl mx-auto">
        <Slider {...settings}>
          {Slides.map((item, index) => (
            <motion.div
              key={index}
              className="px-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="p-6 rounded-2xl text-center shadow-lg min-h-[250px] flex flex-col justify-between items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundColor: index % 2 === 0 ? "#ffffff" : "#1f2937",
                  color: index % 2 === 0 ? "#000000" : "#ffffff",
                }}
              >
                <p className="text-lg mb-4">{item.text}</p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full border-2 border-gray-300"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm opacity-80">{item.country}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Cards;
