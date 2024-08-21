import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isResourcesHovered, setIsResourcesHovered] = useState(false);
  const Logo =
    "https://cdn.prod.website-files.com/64148069036e35d5954d1323/64148069036e352ca84d1761_myhours-logo.svg";

  const handleResourcesClick = () => {
    setIsResourcesOpen(prev => !prev);
    setIsResourcesHovered(false);
  };

  const handleMouseEnter = () => {
    setIsResourcesHovered(true);
  };

  const handleMouseLeave = () => {
    setIsResourcesHovered(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="hidden md:flex md:items-center md:justify-between md:px-8 md:py-2 md:bg-white md:shadow-md">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-36" />
        </Link>
        <div className="flex items-center space-x-8">
          <Link to="#" className="text-teal-500 hover:underline">How it works</Link>
          <Link to="#" className="text-teal-500 hover:underline">Pricing</Link>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="text-teal-500 flex items-center"
              onClick={handleResourcesClick}
            >
              Resources
              {isResourcesOpen || isResourcesHovered ? (
                <CiCircleChevUp style={{ width: '1.5rem', height: '1.5rem' }} className="ml-2" />
              ) : (
                <CiCircleChevDown style={{ width: '1.5rem', height: '1.5rem' }} className="ml-2" />
              )}
            </button>
            <div
              className={`absolute bg-white mt-2 py-2 rounded-lg w-48 shadow-lg ${
                isResourcesOpen || isResourcesHovered ? 'block' : 'hidden'
              }`}
            >
              <Link to="#" className="text-teal-500 block px-4 py-2 hover:underline">Use cases</Link>
              <Link to="#" className="text-teal-500 block px-4 py-2 hover:underline">Industries</Link>
              <Link to="#" className="text-teal-500 block px-4 py-2 hover:underline">Case studies</Link>
              <Link to="#" className="text-teal-500 block px-4 py-2 hover:underline">Help center</Link>
              <Link to="#" className="text-teal-500 block px-4 py-2 hover:underline">Security & privacy</Link>
              <Link to="#" className="text-teal-500 block px-4 py-2 hover:underline">Customer reviews</Link>
              <Link to="#" className="text-teal-500 block px-4 py-2 hover:underline">About My Hours</Link>
            </div>
          </div>
          <Link to="#" className="text-teal-500 hover:underline">Sign in</Link>
          <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">Get My Hours Free</button>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full bg-white z-50 md:hidden">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="w-36" />
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-x-0 top-16 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          <Link to="#" className="text-teal-500 hover:underline" onClick={() => setIsMenuOpen(false)}>How it works</Link>
          <Link to="#" className="text-teal-500 hover:underline" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="text-teal-500 flex items-center"
              onClick={handleResourcesClick}
            >
              Resources
              {isResourcesOpen || isResourcesHovered ? (
                <CiCircleChevUp style={{ width: '1.5rem', height: '1.5rem' }} className="ml-2" />
              ) : (
                <CiCircleChevDown style={{ width: '1.5rem', height: '1.5rem' }} className="ml-2" />
              )}
            </button>
            <div
              className={`absolute bg-white mt-2 py-2 rounded-lg shadow-lg w-full ${
                isResourcesOpen || isResourcesHovered ? 'block' : 'hidden'
              }`}
            >
              <Link to="#" className="text-teal-500 block px-4 py-2 hover:underline" onClick={() => setIsMenuOpen(false)}>Use cases</Link>
              <Link to="#" className="text-teal-500 block px-4 py-2 hover:underline" onClick={() => setIsMenuOpen(false)}>Industries</Link>
              <Link to="#" className="text-teal-500 block px-4 py-2 hover:underline" onClick={() => setIsMenuOpen(false)}>Case studies</Link>
              <Link to="#" className="text-teal-500 block px-4 py-2 hover:underline" onClick={() => setIsMenuOpen(false)}>Help center</Link>
              <Link to="#" className="text-teal-500 block px-4 py-2 hover:underline" onClick={() => setIsMenuOpen(false)}>Security & privacy</Link>
              <Link to="#" className="text-teal-500 block px-4 py-2 hover:underline" onClick={() => setIsMenuOpen(false)}>Customer reviews</Link>
              <Link to="#" className="text-teal-500 block px-4 py-2 hover:underline" onClick={() => setIsMenuOpen(false)}>About My Hours</Link>
            </div>
          </div>
          <Link to="#" className="text-teal-500 hover:underline" onClick={() => setIsMenuOpen(false)}>Sign in</Link>
          <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600" onClick={() => setIsMenuOpen(false)}>Get My Hours Free</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;