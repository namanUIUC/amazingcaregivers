"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <div className="text-2xl font-semibold">
            Amazing Caregivers Inc.
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-black text-lg relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26D3D] group-hover:w-[95%] transition-all duration-300"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-black text-lg relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26D3D] group-hover:w-[95%] transition-all duration-300"></span>
            </Link>
            <Link 
              href="/service" 
              className="text-black text-lg relative group"
            >
              Service
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26D3D] group-hover:w-[95%] transition-all duration-300"></span>
            </Link>
            <Link 
              href="/blog" 
              className="text-black text-lg relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26D3D] group-hover:w-[95%] transition-all duration-300"></span>
            </Link>
            <Link 
              href="/contact" 
              className="text-black text-lg relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26D3D] group-hover:w-[95%] transition-all duration-300"></span>
            </Link>
          </div>

          {/* Book Appointment Button (Desktop) */}
          <div className="hidden md:block">
            <button className="bg-[#F26D3D] text-white px-8 py-3 rounded-lg hover:bg-[#e05e2f] text-lg font-medium transition-colors">
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-700 hover:text-slate-900 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-5">
              <Link
                href="/"
                className="text-black py-2 text-lg relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26D3D] group-hover:w-[95%] transition-all duration-300"></span>
              </Link>
              <Link
                href="/about"
                className="text-black py-2 text-lg relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26D3D] group-hover:w-[95%] transition-all duration-300"></span>
              </Link>
              <Link
                href="/service"
                className="text-black py-2 text-lg relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26D3D] group-hover:w-[95%] transition-all duration-300"></span>
              </Link>
              <Link
                href="/blog"
                className="text-black py-2 text-lg relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26D3D] group-hover:w-[95%] transition-all duration-300"></span>
              </Link>
              <Link
                href="/contact"
                className="text-black py-2 text-lg relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26D3D] group-hover:w-[95%] transition-all duration-300"></span>
              </Link>
              <button className="bg-[#F26D3D] text-white px-8 py-3 rounded-lg hover:bg-[#e05e2f] w-full text-lg font-medium transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar; 