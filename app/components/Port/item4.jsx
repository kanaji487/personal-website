import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import web4 from '../../../public/image/port/airbnb.png';

const Item4 = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white flex-1">
      <Image className="w-full h-[20rem] object-cover" src={web4} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl">
          <Link href="https://github.com/kanaji487/airbnb-clone">
            Airbnb clone
          </Link>
        </div>
        <p className="text-gray-700 text-base">
            This website is designed to learn how to work in full stack of Next.js 
            ,connecting to databases with MongoDB and using Typescript.
        </p>
      </div>
      <div className="px-6 pt-[7rem] pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Airbnb
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Typescript
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #MongoDB
        </span>
      </div>
    </div>
  );
}

export default Item4;