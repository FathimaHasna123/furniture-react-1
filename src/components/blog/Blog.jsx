import React from 'react'

const Blog = () => {
  return (
    <>
<div className="w-full min-h-screen flex justify-center py-[50px] px-4">
  <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10">
    
    <div className="w-full lg:w-2/3 flex flex-col items-start">
      <img src="https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2018/10/blog-img-7.jpg" alt=""
        className="w-full h-auto" />
      <h2 className="text-[25px] font-mono mt-4">Deconstructing The #OOTD Pose</h2>
      <h3 className="text-[18px] md:text-[16px] mt-3"> October 16, 2018 - April 5, 2025. by rootsysofficial@gmail.com. No comments yet</h3>
<h3 className="text-gray-500 text-[14px] mt-4 md:text-[18px]"> Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget,</h3>
      <div className="w-full border-b-2 border-gray-300 mt-12"></div>
    </div>

    <div className="hidden md:block w-full lg:w-1/3">
  <h4 className="text-[18px] text-gray-400 font-semibold mb-2">Search</h4>
  <div className="flex space-x-2 mb-6">
    <input type="text"
      className="border border-black p-2 w-full focus:outline-none"
      placeholder="Search..." />
    <button className="bg-gray-300 p-2 whitespace-nowrap transition duration-200"> Search</button>
  </div>

  <h1 className="text-[32px] font-bold mt-3">Recent Posts</h1>
  <div className="space-y-6 mt-5">
    <h3 className="text-[18px] text-gray-600">Deconstructing The #OOTD Pose</h3>
    <h3 className="text-[18px] text-gray-600">5 Best Summer Dresses</h3>
    <h3 className="text-[18px] text-gray-600">On Salvatore Ferragamo’s New</h3>
    <h3 className="text-[18px] text-gray-600">Chapter</h3>
    <h3 className="text-[18px] text-gray-600">Baby Girl Be Ready For The</h3>
    <h3 className="text-[18px] text-gray-600">Just Arrived To Miini</h3>
  </div>

  <h1 className="text-[32px] font-bold mt-8">Recent Comments</h1>
  <div className="space-y-5 mt-3">
    <h2 className="text-[18px] text-gray-600">woostify on Chair Black</h2>
    <h2 className="text-[18px] text-gray-600">woostify on Chair Black</h2>
    <h2 className="text-[18px] text-gray-600">woostify on Swing</h2>
  </div>
</div>


  </div>
</div>







    </>
  )
}

export default Blog