import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from 'react-icons/ti';
import { useQuery } from 'react-query';
import { getProduct } from '../../utils/product/productApi';
import { Link } from 'react-router-dom';

function Shop() {
  const { data: ProductData } = useQuery('getProduct', getProduct);

  const [clickedItems, setClickedItems] = useState({})

  const handleClick = (productId) => {
    setClickedItems((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }))
  }

  return (
    <div className="w-full min-h-[700px] flex flex-col items-center px-4 sm:px-6 lg:px-12">
      <h3 className="text-[20px] text-left w-full max-w-6xl mb-6">Showing all {ProductData?.data?.length || 0} results</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-7 w-full max-w-[1300px]">
        {ProductData?.data?.map((item) => {
          const isClicked = clickedItems[item.id]

          return (
            <div key={item.id} className="box-wrapper w-[280px] sm:w-[300px]">
              <div className={`box ${isClicked ? "active-heart" : ""}`}>
        <a href="/wishlist">
      <CiHeart  className={`heart-icon absolute top-2 right-2 text-2xl z-10 cursor-pointer ${isClicked ? "heart-animate text-red-500" : "text-gray-400"}`}
        onClick={() => handleClick(item.id)}/>
    </a>
                <img
                  src={`http://127.0.0.1:8000/${item.image}`}
                  alt={item.productName}/>
              </div>
              <h3 className="text-[18px] text-gray-400 hover:text-blue-600 mt-6 text-center">
                {item.productName}
              </h3>
              <h3
                className="text-[16px] text-center cursor-pointer"
                onClick={() => handleClick(item.id)}>
                {item.price}
              </h3>
              {isClicked && (
                <div className="amazon-msg animate-fade-in">
                  <TiShoppingCart className="text-xl" />
                  <h4>{item.rates}</h4>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Shop
