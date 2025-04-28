import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter, FaPinterestP, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#eeeeec] w-full  py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        
        <div className="flex-1">
          <h1 className="text-black font-bold text-2xl md:text-3xl">Woostify</h1>
          <p className="text-[15px] md:text-lg text-gray-600 mt-4 ">
            You can easily edit this paragraph to talk about your brand as well as your products to your potential customers.
          </p>
          <div className="flex items-center gap-4 mt-6 text-black">
            <IoLogoFacebook className="h-6 w-6 cursor-pointer" />
            <FaTwitter className="h-6 w-6 cursor-pointer" />
            <FaPinterestP className="h-6 w-6 cursor-pointer" />
            <FaYoutube className="h-6 w-6 cursor-pointer" />
          </div>
        </div>

       
        <div className="flex-1">
          <h1 className="font-semibold text-lg md:text-xl text-black">Shop</h1>
          <div className="mt-4 space-y-3 text-gray-600">
            <h3 className="font-medium text-base">Terms & Conditions</h3>
            <h3 className="font-medium text-base">Sitemap</h3>
            <h3 className="font-medium text-base">Press</h3>
          </div>
        </div>

       
        <div className="flex-1">
          <h1 className="font-semibold text-lg md:text-xl text-black">Support</h1>
          <div className="mt-4 space-y-3 text-gray-600">
            <h3 className="font-medium text-base">Documentation</h3>
            <h3 className="font-medium text-base">Help Center</h3>
            <h3 className="font-medium text-base">General FAQs</h3>
          </div>
        </div>

       
        <div className="flex-1">
          <h1 className="font-semibold text-lg md:text-xl text-black">Newsletter</h1>
          <div className="mt-4 space-y-3 text-gray-600">
            <p className="text-base">Get 20% off for your first order by joining our newsletter.</p>
            <div className="relative">
              <input
                type="text"
                className="w-full md:w-[300px] px-5 py-3 text-base text-gray-700 rounded-[30px] pr-24"
                placeholder="your@email.com"/>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-black font-semibold">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>


      <div className="border-t-2 border-gray-300 mt-12 w-full">
        <h1 className="text-sm md:text-base text-gray-600 text-center mt-3 px-2">
          © 2021 Woostify · Privacy Policy · All rights reserved. Designed & developed by Woostify</h1>
      </div>
    </div>
  )
}

export default Footer
