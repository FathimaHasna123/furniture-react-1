import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import { CiHeart } from "react-icons/ci";
import './home.css';
import { TiShoppingCart } from "react-icons/ti";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LiaBehance } from "react-icons/lia";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { TbBallBasketball } from "react-icons/tb";


function Home() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 2000)
  }
  
  return (
    <>
 <>
  {/* Desktop section */}
  <div className="hidden md:block">
    <Parallax
      strength={800}
      bgImage="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/145504.webp"
      bgImageAlt="Furniture Background">
      <div className="w-full min-h-[90vh] flex items-center justify-center bg-cover bg-center relative">
        <div className="px-4 py-16 sm:px-8 md:px-20 lg:px-60 text-center md:text-left z-10">
          <h1 className="text-xs sm:text-sm md:text-base lg:text-lg mb-2 text-white">  We’re proud to introduce</h1>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold leading-tight">
            <span className="text-yellow-300 block">THE FURNITURE</span>
            <span className="text-white block">THAT DEFINES YOU</span></h1>
          <p className="text-xs sm:text-sm md:text-[16px] mt-4 max-w-xl text-white">Your comfort and aesthetic design suitable for you is before anything else</p>
          <button className="bg-blue-700 hover:bg-blue-400 px-6 py-3 text-white text-sm sm:text-base rounded-full font-bold mt-6">SHOP NOW</button>
        </div>
      </div>
    </Parallax>
  </div>
  {/* Mobile section */}
  <div className="md:hidden w-full min-h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center"
  style={{
    backgroundImage:"url('https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/145504.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',  }}>
  <div className="px-6 py-20 text-center">
    <h1 className="text-sm mb-2">We’re proud to introduce</h1>
    <h1 className="text-3xl font-bold leading-tight text-white">
      <span className="text-yellow-300 block">THE FURNITURE</span>
      <span>THAT DEFINES YOU</span></h1>
    <p className="text-sm mt-4 max-w-sm mx-auto"> Your comfort and aesthetic design suitable for you is before anything else</p>
    <button className="bg-blue-700 hover:bg-blue-400 px-6 py-3 text-white text-sm rounded-full font-bold mt-6">SHOP NOW</button>
  </div>
</div>
</>




{/* 2 */}
<div className="w-full min-h-screen flex flex-col items-center text-center px-4 py-12">


  <div className="mb-10">
    <h3 className="text-[16px] mb-2">PASSION FOR FASHION</h3>
    <h1 className="text-[32px] md:text-[40px] font-semibold">Shop By Categories</h1>
  </div>

  <div className="flex flex-col gap-10 max-w-[1200px] w-full mb-10">
  <div className="flex flex-col md:flex-row gap-10">
    <div className="flex-1 relative flex flex-col items-center">
      <img className="w-full h-[600px] object-cover rounded-lg"
        src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/pexels-pixabay-220749.webp" alt="Chair 1"/>
      <button className="absolute bottom-28 bg-white px-6 py-2 rounded-full text-[16px] z-10 shadow-md">Chairs</button>
    </div>

    <div className="flex flex-col flex-1 gap-10">
  
      <div className="relative flex flex-col items-center">
      <img className="w-full h-[300px] object-cover rounded-lg md:mr-16"
          src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/pexels-steve-923192.webp" alt="Chair 2"/>
        <button className="absolute bottom-6 bg-white px-6 py-2 rounded-full text-[16px] z-10 shadow-md">Chairs</button>
      </div>

      
      <div className="flex flex-col md:flex-row gap-10">

  <div className="flex-1 flex flex-col items-center">
    <img className="w-full h-[290px] object-cover rounded-lg md:relative right-7 bottom-8"
      src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/pexels-kseniachernaya-11112735.webp"alt="Chair 3" />
    <button className="relative bottom-32 bg-white px-6 py-2 rounded-full text-[16px] z-10 shadow-md"> Chairs </button>
  </div>

  <div className="flex-1 relative flex flex-col items-center">
  <img className="w-full h-[285px] object-cover rounded-lg 
    md:absolute md:bottom-[75px] md:right-16 "
    src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/pexels-athena-2180883.webp" alt="Chair 4"/>
    <button className="relative sm:top-[120px] -top-[80px] right-12  bg-white px-6 py-2 rounded-full text-[16px] z-10 shadow-md"> Chairs</button>
</div>

</div>

    </div>
  </div>

  
  </div>

</div>

{/* 3 */}
<div className="  w-full min-h-[60vh] flex flex-col lg:flex-row items-start px-8 md:px-12 justify-center  pt-10 space-y-10 gap-10 lg:space-y-0">

  <div className=" flex flex-col text-left space-y-4">
    <h3 className="text-[#65acc4] text-[18px] font-semibold">History since 1996</h3>

    <h1 className="text-[32px] md:text-[40px] lg:text-[50px] text-black leading-tight">
      <span className="font-thin">Welcome to</span><br />
      <span className="font-bold">Furniture Store</span>
    </h1>

    <p className="text-[16px] md:text-[18px]">
      Duis eget velit sodales, tristique dui, malesuada erat. Phasellus neque <br />
      augue. Nullam convallis tincidunt tincidunt. Maecenas a libero aliquam, <br />
      sollicitudin lectus vel, ultrices lacus.
    </p>

    <p className="text-[16px] md:text-[18px]">
      Cras tempor maximus, in vehicula leo malesuada. Curabitur dapibus <br />
      blandit interdum. Nunc nisi risus, fermentum vitae ex, convallis lobortis <br />
      dolor. In tristique.
    </p>

    <div className="flex flex-col md:flex-row md:items-center md:space-x-10 space-y-4 md:space-y-0 mt-4">
      <div className="flex items-center space-x-4">
        <img className="w-[45px] h-[45px]" src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/unique.png" alt="Creative Icon" />
        <div>
          <h1 className="text-[18px] font-extrabold">Creative & Unique</h1>
          <p className="text-[16px] text-gray-500 font-thin">Great from Jewelry</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <img className="w-[45px] h-[45px]" src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/shipping.png" alt="Shipping Icon" />
        <div>
          <h1 className="text-[18px] font-extrabold">Free Shipping</h1>
          <p className="text-[16px] text-gray-500 font-thin">All order over $99</p>
        </div>
      </div>
    </div>


    <div className="flex flex-col md:flex-row md:items-center md:space-x-10 space-y-4 md:space-y-0 pt-6">
      <div className="flex items-center space-x-4">
        <img className="w-[45px] h-[45px]" src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/support.png" alt="Support Icon" />
        <div>
          <h1 className="text-[18px] font-extrabold">Support Customer</h1>
          <p className="text-[16px] text-gray-500 font-thin">Support 24/7</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <img className="w-[40px] h-[40px]" src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/payment.png" alt="Payment Icon" />
        <div>
          <h1 className="text-[18px] font-extrabold">Secure Payment</h1>
          <p className="text-[16px] text-gray-500 font-thin">100% secure payment</p>
        </div>
      </div>
    </div>
  </div>

 
    <img
      className="w-full max-w-[400px] md:max-w-[450px] lg:max-w-[650px] h-[520px] object-cover"
      src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/pexels-athena-2180883.webp"
      alt="Furniture Image" />
 
</div>

{/* 4 */}

<div class="mt-20 py-12 px-40 grid gap-8 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-center items-center text-center">

<div class="flex sm:flex-row flex-col items-center text-center space-x-4">
  <img src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2018/10/free-shipping.png" alt="Free Shipping" class="h-[50px]" />
  
  <div class="md:flex md:flex-col md:text-left ">
  <h1 class="text-[16px] md:font-bold text-black sm:text-[18px] whitespace-nowrap">Free Shipping</h1>
  <p class="text-[14px] text-gray-500 font-thin sm:text-[16px]  whitespace-nowrap">On all orders over $200</p>
  </div>
</div>


  <div class="flex  sm:flex-row flex-col  items-center text-center space-x-4">
    <img src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2018/10/support.png" alt="Dedicated Support" class="h-[50px]" />
    <div class="md:flex md:flex-col md:text-left ">
    <h1 class="text-[16px] md:font-bold text-black sm:text-[18px] whitespace-nowrap">Dedicated Support</h1>
      <p class="text-[14px] text-gray-500 font-thin sm:text-[16px]  whitespace-nowrap">Quick response 24/7</p>
    </div>
  </div>

  
  <div class="flex  sm:flex-row flex-col  items-center text-center space-x-4">
    <img src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2018/10/money-back.png" alt="Money-Back Guarantee" class="h-[50px]" />
    <div class="md:flex md:flex-col md:text-left ">
    <h1 class="text-[16px] md:font-bold text-black sm:text-[18px] whitespace-nowrap">Money-Back Guarantee </h1>
    <p class="text-[14px] text-gray-500 font-thin sm:text-[16px]  whitespace-nowrap">Worry-free shopping</p>
    </div>
  </div>

 
  <div class="flex  sm:flex-row flex-col  items-center text-center space-x-4">
    <img src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2018/10/free-shipping.png" alt="Money-Back Guarantee" class="h-[50px]" />
    <div class="md:flex md:flex-col md:text-left ">
    <h1 class="text-[16px] md:font-bold text-black sm:text-[18px] whitespace-nowrap">Money-Back Guarantee</h1>
    <p class="text-[14px] text-gray-500 font-thin sm:text-[16px]  whitespace-nowrap">Worry-free shopping</p>
    </div>
  </div>

</div>

{/* 5 */}
<div className="w-full min-h-[700px] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12">
  <h3 className="text-[16px] text-center">TRENDING NOW</h3>
  <h1 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-bold">Popular This Week</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-7 w-full max-w-[1300px]">

    {/* Product 1 */}
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

    {/* Product 2 */}
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


    {/* product 3 */}

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


    {/* product 4 */}

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

  </div>
</div>



{/* 6 */}
{/* Desktop screen */}
<div className="hidden md:block">

<Parallax
  strength={400}
  bgImage="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/pexels-steve-923192.webp"
  bgImageAlt="">
  <div className="w-full min-h-[60vh] flex items-center justify-center relative">
    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

    <div className="px-4 py-16 sm:px-8 md:px-20 lg:px-60 text-center md:text-left z-10">
      <img className="relative left-20" src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/title_bannerv55.png" alt="" />
      <h1 className="text-[50px] text-white font-bold" >FOLLOW US</h1>
      <div className="flex items-center gap-8 mt-6">
      <FaFacebookF className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-300" />
      <FaTwitter  className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-300" />
      <LiaBehance className="w-10 h-10 text-gray-400 hover:text-white transition-colors duration-300" />
      <BiLogoInstagramAlt className="w-10 h-10 text-gray-400 hover:text-white transition-colors duration-300" />
      <TbBallBasketball className="w-10 h-10 text-gray-400 hover:text-white transition-colors duration-300" />
      </div>

    </div>
  </div>
</Parallax>
</div>
{/* Mobile screen */}

<div className="md:hidden w-full min-h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center"
  style={{
    backgroundImage:"url('https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/pexels-steve-923192.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',  }}>
      <div className="px-6 py-20 text-center">
      <img className="relative left-20" src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2025/04/title_bannerv55.png" alt="" />
      <h1 className="text-[50px] text-white font-bold" >FOLLOW US</h1>
      <div className="flex items-center gap-8 mt-6">
      <FaFacebookF className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-300" />
      <FaTwitter  className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-300" />
      <LiaBehance className="w-10 h-10 text-gray-400 hover:text-white transition-colors duration-300" />
      <BiLogoInstagramAlt className="w-10 h-10 text-gray-400 hover:text-white transition-colors duration-300" />
      <TbBallBasketball className="w-10 h-10 text-gray-400 hover:text-white transition-colors duration-300" />

      </div>

      </div>
    </div>


    
  




 
  







    </>
  )
}

export default Home