import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-gray-300 shadow-md border-b-[1px] border-b-gray-700 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo - Click scrolls to top */}
        <Link to="/" onClick={scrollToTop}>
          <img src="/logo.png" alt="Logo" className="max-h-24 max-w-48" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg mr-7">
          <li>
            <Link
              to="/"
              onClick={scrollToTop}
              className={`text-gray-200 font-semibold hover:text-gray-400 ${
                location.pathname === "/" ? "text-gray-400" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              onClick={scrollToTop}
              className={`text-gray-200 font-semibold hover:text-gray-400 ${
                location.pathname === "/events" ? "text-gray-400" : ""
              }`}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={scrollToTop}
              className={`text-gray-200 font-semibold hover:text-gray-400 ${
                location.pathname === "/about" ? "text-gray-400" : ""
              }`}
            >
              About
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-900 text-center py-4 space-y-3">
          <li>
            <Link
              to="/"
              className="block hover:bg-gray-700 p-2"
              onClick={scrollToTop}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="block hover:bg-gray-700 p-2"
              onClick={scrollToTop}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block hover:bg-gray-700 p-2"
              onClick={scrollToTop}
            >
              About
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
