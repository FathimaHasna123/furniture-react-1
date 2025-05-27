import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";

function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartSidebar = () => setIsCartOpen(true);
  const closeCartSidebar = () => setIsCartOpen(false);

  return (
    <>
      {/* Button to open cart */}
      <button
        onClick={openCartSidebar}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
      >
        Open Cart
      </button>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[4000] flex justify-end bg-black bg-opacity-40">
          <div className="w-80 h-full bg-white p-4 shadow-lg overflow-y-auto relative">
            <button
              onClick={closeCartSidebar}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
              aria-label="Close cart sidebar"
            >
              <IoMdClose size={24} />
            </button>
            <h2 className="text-[18px] mb-4 font-semibold">SHOPPING CART</h2>
            <div className="w-full h-[1px] bg-gray-300 mb-4"></div>
            <p className="text-gray-500">Your cart is currently empty.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
