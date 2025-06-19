import React, { useState } from 'react';
import { message } from 'antd';
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from 'react-icons/ti';
import { useQuery } from 'react-query';
import { getProduct } from '../../utils/product/productApi';
import { useCreateCart } from '../../utils/cart/cartHook';
import { useNavigate } from 'react-router-dom';
import { useCreateWishlist } from '../../utils/wishlist/wishlistHook';

function Shop() {
  const { data: ProductData } = useQuery('getProduct', getProduct)
  const [clickedItems, setClickedItems] = useState({})
  const { mutate: CreateCart } = useCreateCart()
  const { mutate: CreateWishlist } = useCreateWishlist()
  const navigate = useNavigate()

  const handleWishlistClick = (item) => {
    const isAlreadyClicked = clickedItems[item.id]

    setClickedItems((prev) => ({
      ...prev,
      [item.id]: !prev[item.id],
    }))

    if (!isAlreadyClicked) {
      const wishlistData = {
        productName: item.id,
        userId: 1,
      }

      CreateWishlist(wishlistData, {
        onSuccess: () => {
          message.success('Added to wishlist!');
          navigate('/wishlist');
        },
        onError: () => {
          message.error('Failed to add to wishlist.');
        },
      })
    }
  }

  const handleCartClick = (productId) => {
    const cartData = {
      productName:productId,
      userId: 1,
      quantity: 1,
    }

    CreateCart(cartData, {
      onSuccess: () => {
        message.success('Added to cart!')
        navigate('/cart');
      },
      onError: () => {
        message.error('Failed to add to cart.')
      },
    })
  }

  return (
    <div className="w-full min-h-[700px] flex flex-col items-center px-4 sm:px-6 lg:px-12">
      <h3 className="text-[20px] text-left w-full max-w-6xl mb-6">Showing all {ProductData?.data?.length || 0} results</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-7 w-full max-w-[1300px]">
        {ProductData?.data?.map((item) => {
          const isClicked = clickedItems[item.id]

          return (
            <div key={item.id} className="box-wrapper w-[280px] sm:w-[300px]" onClick={()=>{
              handleCartClick(item.id)
            }}>
              <div className={`box relative ${isClicked ? "active-heart" : ""}`}>
                <CiHeart className={`heart-icon absolute top-2 right-2 text-2xl z-10 cursor-pointer ${
                    isClicked ? "heart-animate text-red-500" : "text-gray-400"
                  }`}
                  onClick={() => handleWishlistClick(item)} />

                <img src={`http://127.0.0.1:8000/${item.image}`}alt="" className="w-full h-auto"/>
              </div>

              <h3 className="text-[18px] hover:text-blue-600 mt-6 text-center">{item.productName}</h3>

              <h3 className="text-[16px] text-center cursor-pointer hover:text-green-800 transition"
                onClick={() => navigate('/cart')}>₹ {item.price}</h3>

              {isClicked && (
                <div className="amazon-msg animate-fade-in flex items-center justify-center gap-2 cursor-pointer text-blue-600 hover:text-blue-800 transition mt-2"
                  onClick={() => navigate('/cart')} >
                  <TiShoppingCart className="text-xl" />
                  <h4 className="underline">View Cart</h4>
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
