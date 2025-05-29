import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from 'react-icons/ti';
import { useQuery } from 'react-query';

function Shop() {
    const {data:CartData} = useQuery('getCart',getCart)
  return (
    <>

    <div className="w-full min-h-[700px] flex flex-col items-center px-4 sm:px-6 lg:px-12">
        <h3 className="text-[20px] text-left w-full max-w-6xl mb-6t">Showing all 5 results</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-7 w-full max-w-[1300px]">
{ CartData?.data?.map((item)=>(

        <div className="box-wrapper w-[280px] sm:w-[300px]">
             <div className={`box ${clicked ? "active-heart" : ""}`}>
                    <CiHeart className={`heart-icon ${clicked ? "heart-animate" : ""}`} />
                    <img
                      src={`http://127.0.0.1:8000/${item.image}`} alt="" />
                  </div>
                  <h3 className="text-[18px] text-gray-400 hover:text-blue-600 mt-6 text-center">{item.productName}</h3>
                  <h3 className="text-[16px] text-center cursor-pointer" onClick={handleClick}>{item.price}</h3>
                  {clicked && (
                    <div className="amazon-msg animate-fade-in">
                      <TiShoppingCart className="text-xl" />
                      <h4>{item.rates}</h4>
                    </div>
                  )}
        </div>
))}

         

        </div>
    </div>
    </>
  )
}

export default Shop