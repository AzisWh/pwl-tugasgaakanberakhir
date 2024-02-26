import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-white font-semibold text-lg">27 Februari 2024</h1>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-white focus:outline-none">
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#hero" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#lightbox" className="text-white hover:text-gray-300">
              All of u
            </a>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="text-white block hover:bg-gray-700">
              Home
            </a>
            <a href="#" className="text-white block hover:bg-gray-700">
              All of u
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
