"use client"
import React from 'react';
import Item1 from './item1';
import Item2 from './item2';
import Item3 from './item3';
import Item4 from './item4';

const PortSecction = () => {

  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl my-4 text-white text-center underline">Portofolio</h3>
      </div>
      {/* card */}
      <div className='flex flex-row flex-wrap gap-4 w-full'>
        <Item1 />
        <Item2 />
        <Item3 />
        <Item4 />
      </div>
    </section>
  );
};

export default PortSecction;
