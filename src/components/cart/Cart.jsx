import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";

function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  
  const [cartItems, setCartItems] = useState([])
  const [counters, setCounters] = useState({});

  const openCartSidebar = () => setIsCartOpen(true);
  const closeCartSidebar = () => setIsCartOpen(false);

  const increment = (itemId) => {
    setCounters((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const decrement = (itemId) => {
    setCounters((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  return (
    <>
      <button
        onClick={openCartSidebar}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"> Open Cart</button>

      {isCartOpen && (
        <div className="fixed inset-0 z-[4000] flex justify-end bg-black bg-opacity-40">
          <div className="w-80 h-full bg-white p-4 shadow-lg overflow-y-auto relative">
            <button onClick={closeCartSidebar}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
              aria-label="Close cart sidebar">
              <IoMdClose size={24} />
            </button>

            <h2 className="text-[18px] mb-4 font-semibold">SHOPPING CART</h2>
            <div className="w-full h-[1px] bg-gray-300 mb-4"></div>

            {cartItems.length === 0 ? (
              <div className="justify-center items-center text-center">
                <GiShoppingCart className="h-7 w-7 mx-auto mb-2" />
                <h3 className="text-gray-500">No product in the cart.</h3>
                <button className="text-white bg-blue-800 hover:bg-gray-800 p-3 rounded-[25px] mt-6">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div key={item.id} className="border-b py-4">
                    <h1 className="text-[16px] font-semibold">{item.productName}</h1>
                    <h2 className="text-[14px] text-gray-600">₹ {item.price}</h2>

                    <div className="flex items-center justify-center mt-3 gap-4">
                      <button className="px-3 py-1 bg-gray-200 rounded"  onClick={() => decrement(item.id)}>-</button>
                      <div className="text-[17px] font-bold">
                        {counters[item.id] || 0}
                      </div>
                      <button className="px-3 py-1 bg-gray-200 rounded" onClick={() => increment(item.id)}>+</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Cart
