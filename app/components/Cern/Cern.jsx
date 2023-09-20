"use client"
import React, { Component } from 'react';
import Slider from "react-slick";

const Cern = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function(index) {
            console.log(
            `Slider Changed to: ${index + 1}, background: #fff; color: #bada55`
            );
        }
    }
  return (
    <div>
      <h1 className='text-white'>Cern</h1>
      {/* card slider */}
      <div>
        <h2 className='text-white'>Swipe To Slide</h2>
        <Slider {...settings}>
            {/* item 1 */}
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Cern;