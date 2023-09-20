import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import web2 from "../../../public/image/port/artgallery.png";

const Item2 = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white flex-1">
      <Image className="w-full h-[20rem] object-cover" src={web2} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl">
          <Link href="https://auttawut-art-gallery.netlify.app/" >Art gallery</Link>
        </div>
        <p className="text-gray-700 text-base">
          This website was created to: Learn how to use react.
        </p>
      </div>
      <div className="px-6 pt-[10rem] pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Art gallery
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #React
        </span>
      </div>
    </div>
  );
}

export default Item2;