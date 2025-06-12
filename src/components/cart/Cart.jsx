import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";


function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [counters, setCounters] = useState({});

  const openCartSidebar = () => setIsCartOpen(true);
  const closeCartSidebar = () => setIsCartOpen(false);

  const increment = (itemId) => {
    setCounters((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 1) + 1,
    }));
  };

  const decrement = (itemId) => {
    setCounters((prev) => {
      const updatedCount = Math.max((prev[itemId] || 1) - 1, 1);
      return { ...prev, [itemId]: updatedCount };
    });
  };

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (!exists) {
      setCartItems([...cartItems, product]);
    }
    setCounters((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  };

  const totalItems = Object.values(counters).reduce((sum, val) => sum + val, 0);

  return (
    <>
     
      <button onClick={openCartSidebar}
        className="relative bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">Cart Open
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
            {totalItems}
          </span>
        )}
      </button>

   
      {/* <button
        onClick={() =>
          addToCart({
            id: 1,
            productName: "Wireless Headphones",
            price: 999,
            image: "https://via.placeholder.com/60",
          })
        }
        className="ml-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
      >
        Add Sample Product
      </button> */}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[4000] flex justify-end bg-black bg-opacity-40">
          <div className="w-80 h-full bg-white p-4 shadow-lg overflow-y-auto relative">
            <button
              onClick={closeCartSidebar}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
            >
              <IoMdClose size={24} />
            </button>

            <h2 className="text-[18px] mb-4 font-semibold">SHOPPING CART</h2>
            <div className="w-full h-[1px] bg-gray-300 mb-4"></div>

            {cartItems.length === 0 ? (
              <div className="justify-center items-center text-center">
                <GiShoppingCart className="h-7 w-7 mx-auto mb-2" />
                <h3 className="text-gray-500">No product in the cart.</h3>
              </div>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div key={item.id} className="border-b py-4">
                    <div className="flex gap-3 items-center">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-[60px] h-[60px] object-cover rounded"/>
                      <div>
                        <h1 className="text-[16px] font-semibold">
                          {item.productName}
                        </h1>
                        <h2 className="text-[14px] text-gray-600">
                          ₹ {item.price} × {counters[item.id] || 1} = ₹{" "}
                          {item.price * (counters[item.id] || 1)}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-center mt-3 gap-4">
                      <button className="px-3 py-1 bg-gray-200 rounded"
                        onClick={() => decrement(item.id)}>-</button>
                      <div className="text-[17px] font-bold">
                        {counters[item.id] || 1}
                      </div>
                      <button className="px-3 py-1 bg-gray-200 rounded"
                        onClick={() => increment(item.id)}>+</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
