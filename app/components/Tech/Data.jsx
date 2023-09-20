import React from 'react';
import Image from 'next/image';
import consulting from "../../../public/image/consulting.png";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMariadb, SiMysql, SiOracle } from "react-icons/si";

const Data = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1 h-[34rem]">
      <div className="flex flex-row">
        <Image src={consulting} width={100} height={100} alt="" />
        <h3 className="text-xl font-medium text-black px-[4rem]">Database</h3>
      </div>
      <div className="text-left">
        <h4 className="py-4 text-teal-600 text-xl">Tools I Use</h4>
        <div className="flex flex-row my-4">
          <BiLogoMongodb className="w-8 h-8 text-black" />
          <h3 className="text-black ml-4 my-auto">MongoDB</h3>
        </div>
        <div className="flex flex-row my-4">
          <SiMariadb className="w-8 h-8 text-black" />
          <h3 className="text-black ml-4 my-auto">MariaDB</h3>
        </div>
        <div className="flex flex-row my-4">
          <SiMysql className="w-8 h-8 text-black" />
          <h3 className="text-black ml-4 my-auto">mySQL</h3>
        </div>
        <div className="flex flex-row my-4">
          <SiOracle className="w-8 h-8 text-black" />
          <h3 className="text-black ml-4 my-auto">Oracle</h3>
        </div>
      </div>
    </div>
  );
}

export default Data;