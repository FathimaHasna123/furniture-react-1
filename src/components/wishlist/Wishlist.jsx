import React from 'react';
import { GiShoppingCart } from "react-icons/gi";
import { FaFacebookF, FaPinterestP, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { useQuery } from 'react-query';
import { getWishlist } from '../../utils/wishlist/wishlistApi';
import { useCreateWishlist, useDeleteWishlist } from '../../utils/wishlist/wishlistHook';
import { message } from 'antd'; 

function Wishlist() {
  
  const { data: WishlistData, refetch } = useQuery({
    queryKey: ['getWishlist'],
    queryFn: getWishlist,
  });

  const { mutate: Create } = useCreateWishlist();
  const { mutate: Delete } = useDeleteWishlist();

  const handleDelete = (id) => {
    Delete(id, {
      onSuccess() {
        message.success('Deleted successfully');
        refetch();
      },
      onError() {
        message.error('Failed to delete');
      }
    });
  };

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-start px-8 py-6">
      <h1 className="text-4xl font-semibold mb-6">Default Wishlist</h1>

      <div className="w-full overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-1 py-1 border text-center">Select</th>
              <th className="px-1 py-1 border">Action</th>
              <th className="px-1 py-1 border text-center">Image</th>
              <th className="px-4 py-2 border text-left">Product Name</th>
              <th className="px-1 py-1 border">Add to Cart</th>
            </tr>
          </thead>
          <tbody>
            {WishlistData?.data?.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-2 py-2 border text-center">
                  <input type="checkbox" className="w-3 h-3 text-blue-600 border-gray-300 rounded" />
                </td>
                <td className="px-4 py-2 border text-center">
                  <button onClick={() => handleDelete(item.id)} className="text-lg hover:text-red-700">✕</button>
                </td>
                <td className="px-2 py-2 border text-center">
                 <img src={`http://127.0.0.1:8000/${item.productName?.image}`}
                  alt=""
                 className="w-14 h-14 object-cover rounded"/>

                </td>
                <td className="px-4 py-2 border">{item.productName?.productName}</td>
                <td className="px-4 py-2 border text-center">
                  <button className="flex items-center gap-2 text-white bg-blue-600 hover:bg-red-950 px-6 py-3 rounded">
                    <GiShoppingCart className="w-5 h-5 text-white" />
                    <span className="text-sm">Read More</span>
                  </button>
                </td>
              </tr>
            ))}
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
