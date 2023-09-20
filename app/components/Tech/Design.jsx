import React from 'react';
import Image from 'next/image';
import design from "../../../public/image/design.png";
import { SiAdobephotoshop, SiAdobeaftereffects, SiAdobeillustrator, SiAdobexd, SiAdobepremierepro } from "react-icons/si";
import { BiLogoFigma } from "react-icons/bi";

const Design = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white flex-1 h-[34rem]">
      <div className='flex flex-row'>
        <Image src={design} width={100} height={100} alt="" />
        <h3 className="text-xl font-medium text-black px-[4rem]">Graphic & Edit</h3>
      </div>
      <div className='text-left'>
        <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
        <div className="flex flex-row my-4">
          <SiAdobephotoshop className="w-8 h-8 text-black" />
          <h3 className="text-black ml-4 my-auto">Photoshop</h3>
        </div>
        <div className='flex flex-row my-4'>
          <SiAdobeaftereffects className='w-8 h-8 text-black' />
          <h3 className='text-black ml-4 my-auto'>After Effect</h3>
        </div>
        <div className='flex flex-row my-4'>
          <SiAdobeillustrator className='w-8 h-8 text-black' />
          <h3 className='text-black ml-4 my-auto'>Illustrator</h3>
        </div>
        <div className='flex flex-row my-4'>
          <SiAdobexd className='w-8 h-8 text-black' />
          <h3 className='text-black ml-4 my-auto'>XD</h3>
        </div>
        <div className='flex flex-row my-4'>
          <SiAdobepremierepro className='w-8 h-8 text-black' />
          <h3 className='text-black ml-4 my-auto'>Premiere Pro</h3>
        </div>
        <div className='flex flex-row my-4'>
          <BiLogoFigma className='w-8 h-8 text-black' />
          <h3 className='text-black ml-4 my-auto'>Figma</h3>
        </div>
      </div>
    </div>
  );
}

export default Design;