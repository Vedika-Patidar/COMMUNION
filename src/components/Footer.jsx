import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0">
        {/* Left Section */}
        <div className="md:w-1/3 text-center md:text-left">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 mx-auto md:mx-0 mb-4 "
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            "United in faith, strengthened by love, and guided by
            grace—together, we build a community of hope and belonging.!"
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/vedika-patidar-286370268"
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"
              target="_blank"
            >
              <FaLinkedin className="text-white" />
            </a>
            <a
              href="https://github.com/Vedika-Patidar"
              target="_blank"
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            >
              <FaGithub className="text-white" />
            </a>
            <a
              href="/"
              target="_blank"
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"
            >
              <FaFacebookF className="text-white" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/3 text-center flex flex-col items-center">
          <h2 className="text-white text-lg font-semibold mb-4">COMPANY</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-white">
                Events
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 text-center md:text-right">
          <h2 className="text-white text-lg font-semibold mb-4">
            GET IN TOUCH
          </h2>
          <ul className="space-y-2 text-sm">
            <li>Have questions or inquiries? Feel free to reach out to us.</li>
            <li>📞 +91 7470845055</li>
            <li>📧 vedika10patidar@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="border-gray-700 my-6" />
      <p className="text-center text-gray-500 text-xs">
        © 2025 Communion.com - All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
