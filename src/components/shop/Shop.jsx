import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from 'react-icons/ti';

function Shop() {
     const [clicked, setClicked] = useState(false);
    
      const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 2000)
      }
  return (
    <>

    <div className="w-full min-h-[700px] flex flex-col items-center px-4 sm:px-6 lg:px-12">
        <h3 className="text-[20px] text-left w-full max-w-6xl mb-6t">Showing all 5 results</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-7 w-full max-w-[1300px]">
{/* image-1 */}
        <div className="box-wrapper w-[280px] sm:w-[300px]">
             <div className={`box ${clicked ? "active-heart" : ""}`}>
                    <CiHeart className={`heart-icon ${clicked ? "heart-animate" : ""}`} />
                    <img
                      src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/14743-300x300.webp" alt="Swing Product" />
                  </div>
                  <h3 className="text-[18px] text-gray-400 hover:text-blue-600 mt-6 text-center">Swing (Copy)</h3>
                  <h3 className="text-[16px] text-center cursor-pointer" onClick={handleClick}>$11.00</h3>
                  {clicked && (
                    <div className="amazon-msg animate-fade-in">
                      <TiShoppingCart className="text-xl" />
                      <h4>Buy from Amazon</h4>
                    </div>
                  )}
        </div>
{/* image-2 */}
          <div className="box-wrapper w-[280px] sm:w-[300px]">
              <div className={`box ${clicked ? "active-heart" : ""}`}>
              <div className="w-[40px] h-[25px] bg-blue-700 text-white z-40 absolute left-0">
                <h5 className="text-[18px] text-center">-6%</h5>
                </div>
                <CiHeart className={`heart-icon ${clicked ? "heart-animate" : ""}`} />
                <img
                  src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/pexels-hormel-1431176-2762247-1-300x300.webp" alt="Chair Black"/>
              </div>
              <h3 className="text-[18px] text-gray-400 hover:text-blue-600 mt-6 text-center">Chair Black</h3>
              <div className="flex justify-center mt-2">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          <h3 className="text-[16px] text-center cursor-pointer" onClick={handleClick}><del className="text-gray-500">$32.00</del>   $30.00</h3>
          {clicked && (
                <div className="amazon-msg animate-fade-in">
                  <TiShoppingCart className="text-xl" />
                  <h4>View cart</h4>
                </div>
              )}
            </div>

{/* image-3 */}
               <div className="box-wrapper w-[280px] sm:w-[300px]">
                  <div className={`box ${clicked ? "active-heart" : ""}`}>
                    <div className="w-[40px] h-[25px] bg-blue-700 text-white z-40 absolute left-0">
                      <h5 className="text-[18px] text-center">-4%</h5>
                    </div>
                    <CiHeart className={`heart-icon ${clicked ? "heart-animate" : ""}`} />
                    <img src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/pexels-kseniachernaya-11112735-1-300x300.webp" alt="" />
                  </div>
                  <h3 className="text-[18px] text-gray-400 hover:text-blue-600 mt-6 text-center">Sofa Mini</h3>
                  <h3 className="text-[16px] text-center cursor-pointer" onClick={handleClick}><del className="text-gray-500">$52.00</del>     $50.00</h3>
                  {clicked && (
                    <div className="amazon-msg animate-fade-in">
                      <TiShoppingCart className="text-xl" />
                      <h4>Add to card</h4>
                    </div>
                  )}
                </div>
{/* image-4 */}
                  <div className="box-wrapper w-[280px] sm:w-[300px]">
                      <div className={`box ${clicked ? "active-heart" : ""}`}>
                      <CiHeart className={`heart-icon ${clicked ? "heart-animate" : ""}`} />
                      <img src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/14743-300x300.webp" alt="" /> 
                      </div>
                      <h3 className="text-[18px] text-gray-400 hover:text-blue-600 mt-6 text-center">Swing</h3>
                      <div className="flex justify-center mt-2">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <h3 className="text-[16px] text-center cursor-pointer hover:text-blue-600" onClick={handleClick}> Add to card</h3>
                  {clicked && (
                        <div className="amazon-msg animate-fade-in">
                          <TiShoppingCart className="text-xl" />
                          <h4>Add to card</h4>
                        </div>
                      )}
                      
                    </div>
{/* image-5 */}
                    <div className="box-wrapper w-[280px] sm:w-[300px]">
                    <div className={`box ${clicked ? "active-heart" : ""}`}>
                    <CiHeart className={`heart-icon ${clicked ? "heart-animate" : ""}`} />
                    <img src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/pexels-athena-2180883-1-300x300.webp" alt="" />
                  </div>
                  <h3 className="text-[18px] text-gray-400 hover:text-blue-600 mt-6 text-center">Sport Tank Top</h3>
                  <h3 className="text-[16px] text-center cursor-pointer" onClick={handleClick}>$40.00</h3>
                  {clicked && (
                    <div className="amazon-msg animate-fade-in">
                      <TiShoppingCart className="text-xl" />
                      <h4>Buy product on Amazon</h4>
                    </div>
                  )}
                    </div>


        </div>
    </div>
    </>
  )
}

export default Shop