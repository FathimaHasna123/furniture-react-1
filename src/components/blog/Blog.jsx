import React from 'react'
import { IoIosSearch } from "react-icons/io";


  const posts = [
    {
      title: "Deconstructing The #OOTD Pose",
      date: "October 16, 2018 - April 5, 2025",
      image: "https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2018/10/blog-img-7.jpg",
    },
    {
      title: "5 Best Summer Dresses",
      date: "October 16, 2018 - April 5, 2025",
      image: "https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2018/10/blog-img-6.jpg",
    },
   {
    title:"On Salvatore Ferragamo’s New Chapter",
    date:"October 16, 2018 - April 5, 2025",
    image:"https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2018/10/blog-img-5.jpg",
   },
   {
    title:"Baby Girl Be Ready For The Coming Summer",
    date:"October 16, 2018 - April 5, 2025",
    image:"https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2018/10/blog-img-4.jpg",
   },
   {
    title:"Baby Boy Capsule Lookbook Has Just Arrived To Miini",
    date:"October 16, 2018 - April 5, 2025",
    image:"https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2018/10/blog-img-3.jpg",
   },
   {
    title:"Studio Spring Summer Man 2017",
    date:"October 16, 2018 - April 5, 2025",
    image:"https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2018/10/blog-img-2.jpg",
   },
   {
    title:"New Mini Kids Spring Summer Editorial",
    date:"October 16, 2018 - April 5, 2025",
    image:"https://goldenrod-mosquito-182974.hostingersite.com/wp-content/uploads/2018/10/blog-img-1.jpg",
   },
  ]
  
  const Sidebar = () => (
    <div className="w-full lg:w-1/3 px-4">
      <h4 className="text-xl font-semibold text-gray-500 mb-4">Search</h4>
      <div className="flex mb-6">
        <input type="text" className="border border-black p-2 w-full focus:outline-none" placeholder="" />
        <button className="bg-gray-300 p-2 ml-2">Search</button>
      </div>
  
      <h2 className="text-2xl font-bold mt-6">Recent Posts</h2>
      <ul className="space-y-6 mt-4">
        {posts.map((post, idx) => (
          <li key={idx} className="text-gray-700 text-[16px]">{post.title}</li>
        ))}
      </ul>
      <h1 className="text-2xl font-bold mt-8">Recent Comments</h1>
      <div className="space-y-6 mt-3">
        <h2 className="text-[16px] text-gray-700">woostify on Chair Black</h2>
        <h2 className="text-[16px] text-gray-700">woostify on Chair Black</h2>
        <h2 className="text-[16px] text-gray-700">woostify on Swing</h2>
      </div>
      <h1 className="text-2xl font-bold mt-8 ">Archives</h1>
      <h3 className="text-[16px] text-gray-700 ">October 2018</h3>
  
      <h2 className="text-2xl font-bold mt-8">Categories</h2>
      <p className="text-gray-700 mt-2">Uncategorized</p>

      <div className="relative w-full mt-8">
  <input
    type="text"
    className="bg-gray-200 rounded-[25px] p-3 pl-10 pr-8  focus:outline-none"
    placeholder="Search..."/>
  <IoIosSearch className="absolute left-52 top-1/2 transform -translate-y-1/2  text-xl" />
    </div>

  <h3 className="text-2xl mt-6">Recent Posts</h3>
  <ul className="space-y-4 mt-4">
        {posts.map((post, idx) => (
          <li key={idx} className="text-gray-700 text-[16px]">{post.title}</li>
        ))}
      </ul>
      <h1 className="text-2xl mt-9">Recent Comments</h1>
      <div className="space-y-4 mt-3">
        <h2 className="text-[16px] text-gray-700">woostify on Chair Black</h2>
        <h2 className="text-[16px] text-gray-700">woostify on Chair Black</h2>
        <h2 className="text-[16px] text-gray-700">woostify on Swing</h2>
      </div>

      <h1 className="text-2xl mt-5">Archives</h1>
    <h3 className="text-[16px] text-gray-700 mt-4">October 2018</h3>

    <h1 className="text-2xl  mt-5 ">Categories</h1>
    <h3 className="text-[16px] text-gray-700 mt-4">Uncategorized</h3>

    <h2 className="text-2xl mt-6">Meta</h2>
    <div className="space-y-4 mt-3">
    <h4 className="text-[16px] text-gray-600">Log in</h4>
    <h4 className="text-[16px] text-gray-600">Entries feed</h4>
    <h4 className="text-[16px] text-gray-600">Comments feed</h4>
    <h4 className="text-[16px] text-gray-600">WordPress.org</h4>
    </div>

    <h2 className="text-[22px] mt-8">Categories</h2>
    <h3 className="text-[16px] mt-4">Uncategorized (7)</h3>



    </div>
  )
  
  const BlogPost = ({ image, title, date }) => (
    <div className="mb-12">
      <img src={image} alt={title} className="w-full h-auto rounded-md" />
      <h2 className="text-2xl font-mono mt-4 hover:text-blue-600">{title}</h2>
      <h3 className="text-sm text-gray-500 mt-2">{date} . by rootsysofficial@gmail.com . No comments yet</h3>
      <p className="text-gray-500 text-sm mt-4">
      Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. maximus, ultrices justo eget,…
      </p>
      <div className="w-full border-b border-gray-300 mt-8"></div>
    </div>
  )
  
  const Blog = () => {
  return (
    <>

<div className="w-full px-4 md:px-8 lg:px-0 flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row mt-8 gap-8">
        <div className="w-full lg:w-2/3">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
        <Sidebar />
      </div>
      <div className="h-20" />
    </div>

    </>
  )
}

export default Blog