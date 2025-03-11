import React from "react";
import { motion } from "framer-motion";
import img3 from "../assets/img3.jpg";

const About = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-emerald-500 mb-4">
              Our Founding Story
            </h2>
            <motion.p
              className="text-gray-400 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Our Communion platform was born out of a shared vision to bring
              people together through faith and unity. A place where everyone
              can belong, find strength, and grow spiritually.
            </motion.p>
            <p className="mt-4 text-gray-400">
              We strive to create a supportive community where individuals from
              all backgrounds can connect, learn, and uplift each other.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={img3}
              alt="Community Gathering"
              className="w-4/5 rounded-2xl shadow-lg shadow-emerald-500/50 transition-all"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Header Section */}
          <motion.h2
            className="text-4xl font-bold text-emerald-400 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Experience Spiritual Growth, Anytime, Anywhere
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Communion connects you with faith-driven communities, insightful
            teachings, and meaningful worship experiences—wherever you are.
          </p>

          {/* Grid Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
            {[
              {
                title: "Community Gatherings",
                text: "Join live sessions and engage with faith communities worldwide.",
              },
              {
                title: "Guided Prayers",
                text: "Access daily prayers and reflections for spiritual peace.",
              },
              {
                title: "Interactive Learning",
                text: "Explore scripture with guided study sessions and discussions.",
              },
              {
                title: "One-on-One Counseling",
                text: "Receive spiritual guidance from trusted mentors.",
              },
              {
                title: "Faith-Based Events",
                text: "Stay updated with worship sessions and religious celebrations.",
              },
              {
                title: "Personalized Content",
                text: "Get faith resources tailored to your spiritual journey.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-lg "
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
