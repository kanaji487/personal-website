"use client"
import React from 'react';
import { saveAs} from "file-saver";

const Navbar = () => {
  const resumeFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1aYipzSDuSlxjUz4dKGXWaDt1GCfGxLSZ/view?usp=drive_link",
      "my-resume.pdf"
    )
  }
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="font-burtons text-xl text-[#FFA3FD]">AS</h1>
      <ul className="flex items-center">
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 cursor-pointer"
            onClick={resumeFile}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;