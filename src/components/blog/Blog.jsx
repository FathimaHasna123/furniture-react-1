import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { useQuery } from 'react-query';
import { useCreateBlog } from '../../utils/blog/blogHook';
import { getBlog } from '../../utils/blog/blogApi';
import { message } from "antd"
import { useNavigate } from "react-router-dom";

//  const Sidebar = () => (
//     <div className="w-full lg:w-1/3 px-4">
//       <h4 className="text-xl font-semibold text-gray-500 mb-4">Search</h4>
//       <div className="flex mb-6">
//         <input type="text" className="border border-black p-2 w-full focus:outline-none" placeholder="" />
//         <button className="bg-gray-300 p-2 ml-2">Search</button>
//       </div>
  
     
//       <ul className="space-y-6 mt-4">
//         {BlogData.map((item, index) => (
//           <li key={idx} className="text-gray-700 text-[16px]">{item.header}</li>
//         ))}
//       </ul>
     
    

//       <div className="relative w-full mt-8">
//   <input
//     type="text"
//     className="bg-gray-200 rounded-[25px] p-3 pl-10 pr-8  focus:outline-none"
//     placeholder="Search..."/>
//   <IoIosSearch className="absolute left-52 top-1/2 transform -translate-y-1/2  text-xl" />
//     </div>


//     </div>
//   )
  


function Blog() {
  const navigate = useNavigate();
  const { data: BlogData } = useQuery('getBlog', getBlog);
  const { mutate: CreateBlog } = useCreateBlog();

 
  const handleCreateBlog = () => {
    CreateBlog(BlogData, {
      onSuccess: () => {
        message.success('Added to blog!');
        navigate('/blog');
      },
      onError: () => {
        message.error('Failed to add to blog.');
      },
    });
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-0 flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row mt-8 gap-8">
        <div className="w-full lg:w-2/3">
         
          {BlogData?.data?.map((item, index) => (
            <div key={index} className="border p-4 mb-4 rounded shadow">
              <img src={`http://127.0.0.1:8000/${item.image}`}alt="" className="w-full h-auto" />
              <h2 className="text-2xl font-bold mb-2">{item.header}</h2>
              <h4 className="text-[18px]">{item.description}</h4>
              <p className="text-gray-700">{item.Paragraphs }</p>
            </div>
          ))}

         
         
        </div>

      
       
      </div>

      <div className="h-20" />
    </div>
  );
}

export default Blog;
