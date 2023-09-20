import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import web1 from "../../../public/image/port/ecom.jpeg";

const Item1 = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white flex-1">
      <Image className="w-full h-[20rem] object-cover" src={web1} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl">
          <Link href="https://github.com/kanaji487/ecommerce-shop-starter" >E-commorce website</Link>
        </div>
        <p className="text-gray-700 text-base">
        This website was created to: Study the working principles of e-commerce systems such as 
        cart loading system, Product Price Calculation System and Product Detailed System.
        </p>
      </div>
      <div className="px-6 pt-[5.5rem] pb-2 flex flex-row">
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #E-commerce
        </span>
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Next.JS
        </span>
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #React
        </span>
      </div>
    </div>
  );
}

export default Item1;