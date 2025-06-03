import React, { useState } from 'react';
import { GiShoppingCart } from "react-icons/gi";
import { FaFacebookF, FaPinterestP, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { useQuery } from 'react-query';
import { getWishlist } from '../../utils/wishlist/wishlistApi';

function Wishlist() {
  const { data: WishlistData } = useQuery({
    queryKey: ['getWishlist'],
    queryFn: getWishlist,
  });
  
  console.log(WishlistData)
  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     name: 'Product A',
  //     price: '$10',
  //     date: 'May 1, 2025',
  //     stock: 'In Stock',
  //     image: 'http://127.0.0.1:8000/', 
  //   },
  // ]);

  // const removeItem = (id) => {
  //   setItems(prev => prev.filter(item => item.id !== id));
  // };

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-start px-8 py-6">
      <h1 className="text-4xl font-semibold mb-6">Default Wishlist</h1>

      <div className="w-full overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-1 py-1 border text-center">
                <input type="checkbox" className="w-3 h-3 text-blue-600 border-gray-300 rounded" />
              </th>
              <th className="px-1 py-1 border"></th>
              <th className="px-1 py-1 border text-center">Image</th>
              <th className="px-4 py-2 border text-left">Product Name</th>
              <th className="px-4 py-2 border text-left">Unit Price</th>
              <th className="px-4 py-2 border text-left">Date Added</th>
              <th className="px-4 py-2 border text-left">Stock Status</th>
              <th className="px-1 py-1 border"></th>
            </tr>
          </thead>

          <tbody>
            { WishlistData?.data?.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-2 py-2 border text-center">
                  <input type="checkbox" className="w-3 h-3 text-blue-600 border-gray-300 rounded" />
                </td>
                <td className="px-4 py-2 border text-center">
                  <button onClick={() => removeItem(item.id)} className="text-lg hover:text-red-700">✕</button>
                </td>
                <td className="px-2 py-2 border text-center">
                  <img src={`http://127.0.0.1:8000/${item.image}`} alt="" className="w-14 h-14 object-cover rounded" />
                </td>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">{item.price}</td>
                <td className="px-4 py-2 border">{item.date}</td>
                <td className="px-4 py-2 border">{item.stock}</td>
                <td className="px-4 py-2 border text-center">
                  <button className="flex items-center gap-2 text-white bg-blue-600 hover:bg-red-950 px-6 py-3 rounded">
                    <GiShoppingCart className="w-5 h-5 text-white" />
                    <span className="text-sm">Read More</span>
                  </button>
                </td>
              </tr>
            ))}

        
            <tr>
              <td className="px-4 py-2" colSpan={2}>
                <div className="w-full max-w-xs">
                  <select
                    id="Actions"
                    className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none text-sm"
                  >
                    <option value="">Actions</option>
                    <option value="add">Add to cart</option>
                    <option value="remove">Remove</option>
                  </select>
                </div>
              </td>

              <td colSpan={2}>
                <button className="text-white text-[16px] bg-blue-600 hover:bg-red-950 rounded px-4 py-3 mt-1">  Apply Action</button>
              </td>

              <td></td>
              <td></td>

              <td>
                <button className="text-white text-[16px] bg-blue-600 hover:bg-red-950 rounded px-4 py-3"> Add selected to Cart</button>
              </td>

              <td>
                <button className="text-white text-[16px] bg-blue-600 hover:bg-red-950 rounded px-4 py-3"> Add All to Cart</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

   
      <div className="w-full flex justify-end items-center gap-4 text-right mt-5">
        <h4 className="text-[20px]">Share on</h4>
        <FaFacebookF className="w-6 h-6 hover:text-blue-600" />
        <FaTwitter className="w-6 h-6 hover:text-blue-600" />
        <FaPinterestP className="w-6 h-6 hover:text-blue-600" />
        <FaWhatsapp className="w-6 h-6 hover:text-blue-600" />
        <HiOutlineClipboardDocumentList className="w-6 h-6 hover:text-blue-600" />
        <MdEmail className="w-6 h-6 hover:text-blue-600" />
      </div>
    </div>
  );
}

export default Wishlist
