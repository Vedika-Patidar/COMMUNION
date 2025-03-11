import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/video.mp4";
import { motion } from "framer-motion";
import Cards from "./Cards";
import FAQSection from "./FAQSection";
import img3 from "../assets/img3.jpg";

const Home = () => {
  return (
    <div className="bg-gray-900 w-full min-h-screen text-gray-300 pt-20">
      <section className="relative flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Connect, Inspire, Grow
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl">
          Bridging gaps between faiths with tech and a dash of fun! Join a
          thriving community where spirituality meets innovation.
        </p>
        <Link
          to="/events"
          className="mt-6 bg-emerald-500 hover:bg-emerald-300 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold transition"
        >
          Explore Events
        </Link>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-10 ">
        {/* Left - Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="relative w-full md:w-1/2 max-w-3xl mx-auto my-5 rounded-lg overflow-hidden max-h-[500px] shadow-lg "
        >
          <motion.video
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-auto rounded-lg"
            muted
            loop
            autoPlay
          >
            <source src={banner} type="video/mp4" />
          </motion.video>
        </motion.div>

        {/* Right - Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center md:text-left px-5">
          <h2 className="text-4xl text-center font-bold text-gray-300 mb-3">
            Experience Innovation & Community
          </h2>
          <p className="text-lg text-gray-400 mb-4 text-center">
            Join us to be part of a community where spirituality meets
            innovation. Together, we'll build a world that's more inclusive,
            engaging, and connected than ever before!
          </p>
          <Link
            to="/about"
            className="mt-6 bg-emerald-500 hover:bg-emerald-300 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold transition mb-10"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center text-center py-16 px-6 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900"
        >
          More Than <span className="text-blue-600">10,000+</span> Engagements
          daily <br /> across the world
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-gray-600 max-w-2xl"
        >
          Experience the power of connection with over 10,000 daily interactions
          worldwide, uniting diverse communities through innovation,
          collaboration, and shared spirituality.
        </motion.p>
      </section>

      <Cards />

      <section className="bg-gray-900 py-20 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          {/* Left Side: Image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={img3}
              alt="Mission"
              className="rounded-xl shadow-lg shadow-emerald-500/50"
            />
          </motion.div>

          {/* Right Side: Text */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-emerald-500">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              At **Communion**, our mission is to create a welcoming,
              faith-driven community where individuals can find **support,
              inspiration, and connection**.
            </p>
            <p className="mt-3 text-gray-400">
              We believe in **faith, unity, and growth**, empowering people to
              embrace their spiritual journey through meaningful gatherings,
              events, and shared experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
};

export default Home;
