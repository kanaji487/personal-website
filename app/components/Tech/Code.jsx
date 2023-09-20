import React from "react";
import Image from "next/image";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoTailwindCss, BiLogoJavascript, BiLogoReact, BiLogoTypescript } from "react-icons/bi";
import codes from "../../../public/image/code.png";

const Code = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-auto bg-white flex-1">
      <div className="flex flex-row">
        <Image src={codes} width={100} height={100} alt="" />
        <h3 className="text-xl font-medium text-black px-[3rem]">
          Computer language
        </h3>
      </div>
      <div className="text-left">
        <h4 className="py-4 text-teal-600 text-xl">Tools I Use</h4>
        <div className="flex flex-row my-4">
          <AiFillHtml5 className="w-8 h-8 text-black" />
          <h3 className="text-black ml-4 my-auto">HTML</h3>
        </div>
        <div className="flex flex-row my-4">
          <BiLogoCss3 className="w-8 h-8 text-black" />
          <h3 className="text-black ml-4 my-auto">CSS</h3>
        </div>
        <div className="flex flex-row my-4">
          <BiLogoTailwindCss className="w-8 h-8 text-black" />
          <h3 className="text-black ml-4 my-auto">Tailwind CSS</h3>
        </div>
        <div className="flex flex-row my-4">
          <BiLogoJavascript className="w-8 h-8 text-black" />
          <h3 className="text-black ml-4 my-auto">JavaScript</h3>
        </div>
        <div className="flex flex-row my-4">
          <BiLogoReact className="w-8 h-8 text-black" />
          <h3 className="text-black ml-4 my-auto">React</h3>
        </div>
        <div className="flex flex-row my-4">
          <BiLogoTypescript className="w-8 h-8 text-black" />
          <h3 className="text-black ml-4 my-auto">TypeScript</h3>
        </div>
      </div>
    </div>
  );
};

export default Code;
