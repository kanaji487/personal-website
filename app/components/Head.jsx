import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillFacebook, AiFillGithub } from "react-icons/ai";
import avatarImage from "../../public/image/my pic.png";

const HeadSecction = () => {
  return (
    <div className="text-center p-10 py-10">
      <h2 className="text-4xl py-2 text-[#FFA3FD] font-medium md:text-6xl">
        Auttawut Singkeaw
      </h2>
      <h3 className="text-xl py-2 text-[#865DFF] md:text-3xl">
        Junior Front end developer.
      </h3>
      <p className="text-base py-5 leading-8 text-[#865DFF] max-w-xl mx-auto md:text-xl">
        I am just a developer who creates and grows out of mistakes. Who does not give up. Mistakes and corrections are endless.
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-[#865DFF]">
        <Link href="https://twitter.com/SunnyUIbegin" target="_blank" ><AiFillTwitterCircle /></Link>
        <Link href="https://www.linkedin.com/in/auttawut-singkeaw-36940a211/" target="_blank"><AiFillLinkedin /></Link>
        <Link href="https://www.facebook.com/agcc487" target="_blank"><AiFillFacebook /></Link>
        <Link href="https://github.com/kanaji487" target="_blank"><AiFillGithub /></Link>
      </div>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-[10rem] h-[10rem] relative overflow-hidden mt-10 md:h-96 md:w-96">
        <Image src={avatarImage} layout="fill" objectFit="cover" alt="" />
      </div>
    </div>
  );
};

export default HeadSecction;
