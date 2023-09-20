import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import web3 from '../../../public/image/port/aware-timesheet-new.jpg';

const Item3 = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white flex-1">
      <Image className="w-full h-[20rem] object-cover" src={web3} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl">
          <Link href="https://github.com/kanaji487/Aware-vite-timesheet" >Aware timesheet</Link>
        </div>
        <p className="text-gray-700 text-base">
            This website was created to create time attendance systems for Aware companies.<br/>
            Note The project was ordered to be stopped because it was not yet possible to conclude 
            what kind of website it would look like.
        </p>
      </div>
      <div className="px-6 pt-10 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Timesheet
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #React
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Aware
        </span>
      </div>
    </div>
  )
}

export default Item3;