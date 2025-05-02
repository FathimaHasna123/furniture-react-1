import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { LiaUserSolid } from "react-icons/lia";
import { FiShoppingCart } from 'react-icons/fi';
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)
  const openSearchModal = () => setIsSearchOpen(true)
  const closeSearchModal = () => setIsSearchOpen(false)
  const openCartSidebar = () => setIsCartOpen(true)
  const closeCartSidebar = () => setIsCartOpen(false)

  return (
    <div className="w-full">
      <div className="w-full h-8 bg-[#1346af] flex items-center justify-center">
        <h1 className="text-sm md:text-base text-white font-bold">FREE SHIPPING ON ORDERS OVER $70 </h1>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow sticky top-0 z-[2000] p-4">
        <div className="container mx-auto flex items-center justify-between">

          {/* Mobile Icons */}
          <div className="flex items-center justify-between space-x-4 lg:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? (
                <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            <div className="sm:hidden flex justify-end relative sm:left-0 left-[180px] gap-3">
              <Link to="/wishlist"><FaRegHeart className="h-5 w-5 text-gray-800 hover:text-blue-800" /></Link>
              <button onClick={openCartSidebar}>
                <FiShoppingCart className="h-5 w-5 text-gray-800 hover:text-blue-800" />
              </button>
            </div>
          </div>

          {/* Logo */}
          <Link to="/" className="relative sm:left-0 left-[-50px] mx-auto md:mx-0">
            <img src="favicon.png" alt="Logo" className="h-10 md:h-14" />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex space-x-8 text-[16px] font-medium">
            {[
              { path: '/', label: 'Home' },
              { path: '/shop', label: 'Shop' },
              { path: '/cart', label: 'Cart' },
              { path: '/blog', label: 'Blog' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link to={path}
                  className={`transition hover:text-blue-800 ${pathname === path ? 'text-blue-800 font-semibold' : 'text-gray-800'}`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-5">
            <button onClick={openSearchModal}>
              <IoSearch className="h-5 w-5 hover:text-blue-800" />
            </button>
            <Link to="/wishlist"><FaRegHeart className="h-5 w-5 hover:text-blue-800" /></Link>
            <div className="relative group inline-block">
      <Link to="/user"><LiaUserSolid className="h-6 w-6 hover:text-blue-800" /></Link>
      <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-28 rounded bg-gray-300 text-[16px] text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
        Login/Register</span>
    </div>
            <button onClick={openCartSidebar}>
              <FiShoppingCart className="h-5 w-5 hover:text-blue-800" />
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-in Menu for Mobile */}
      <div className={`fixed inset-0 z-[3000] transition duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black opacity-40" onClick={closeMenu}></div>
        <div className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg p-6 overflow-y-auto">
          <div className="flex justify-end mb-4">
            <button onClick={closeMenu} aria-label="Close menu">
              <IoMdClose className="text-2xl text-gray-800 hover:text-red-600" />
            </button>
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-2 pr-10 border border-gray-300 rounded-md text-gray-700" />
            <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <ul className="flex flex-col text-lg divide-y">
            {[
              { path: '/', label: 'Home' },
              { path: '/shop', label: 'Shop' },
              { path: '/cart', label: 'Cart' },
              { path: '/blog', label: 'Blog' },
              { path: '/contact', label: 'Contact' },
              { path: '/login', label: 'Login/Register' }
            ].map(({ path, label }) => (
              <li key={path}>
                <Link to={path}
                  onClick={closeMenu}
                  className={`block w-full py-3 px-2 text-left transition hover:text-blue-800 ${pathname === path ? 'text-blue-800 font-semibold' : 'text-gray-900'}`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[4000] flex items-center justify-center bg-blue-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-full max-w-md relative">
            <button
              onClick={closeSearchModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600">
              <IoMdClose size={24} />
            </button>
            <div className="relative w-full">
              <input type="text"
                placeholder="Search products..."
                className="w-full border border-gray-300 rounded-md p-2 pr-10" />
              <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[4000] flex justify-end bg-black bg-opacity-40">
          <div className="w-80 h-full bg-white p-4 shadow-lg overflow-y-auto relative">
            <button
              onClick={closeCartSidebar}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
              aria-label="Close cart sidebar">
              <IoMdClose size={24} />
            </button>
            <h2 className="text-[18px]  mb-4">SHOPPING CART</h2>
            <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
           
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
