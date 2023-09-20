import React from 'react';
import Image from 'next/image';
import consulting from "../../public/image/consulting.png";
import Design from './Tech/Design';
import Code from './Tech/Code';
import { SiMariadb, SiMysql, SiOracle } from "react-icons/si";
import Data from './Tech/Data';

const TechSecction = () => {
  return (
    <div className="lg:flex gap-10">
      <Design />
      <Code />
      <Data />
    </div>
  );
}

export default TechSecction;