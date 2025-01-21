"use client";

import React from "react";
import Slider from "react-slick";
import { font } from "./fonts/font";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO, Example Corp",
      text: "Tech Haven transformed our vision into a reality with their exceptional design and development skills. Their attention to detail and commitment to quality is unmatched. We couldn’t be happier with the results!",
      
    },
    {
      name: "Jane Smith",
      title: "CTO, Startup Co.",
      text: "Working with Tech Haven was a seamless experience. Their team delivered beyond our expectations, combining creativity and expertise. They truly brought our project to life!",
      
    },
    {
      name: "Emily Johnson",
      title: "Manager, Global Enterprises",
      text: "Tech Haven exceeded our expectations at every step. Their professionalism, attention to detail, and innovative solutions were unmatched. We couldn't be happier with the results!",
      
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div
      className={`${font.className} py-8 md:p-16 p-8 flex flex-col justify-center items-center bg-customBlue w-full`}
    >
      <section className="md:w-[100%] w-full flex flex-col justify-center items-center">
        <h1 className="md:text-3xl text-2xl text-cards text-center font-extrabold">
          Our Clients
        </h1>
        <h1 className="md:text-5xl text-white text-3xl pt-4 text-center font-extrabold">
          What Our Clients Say About Us
        </h1>
        <p className="md:text-xl text-white text-lg pt-4 text-center md:max-w-xl">
          Through solutions, we have established relations around trust. Our clientele is winding and extending. We hope
          to wrap you in our trust too.
        </p>
      </section>

      <Slider {...settings} className="w-full max-w-4xl mt-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 text-center bg-transparent rounded-md shadow-lg"
          >
            <p className="text-lg text-white italic">"{testimonial.text}"</p>
            <h3 className="mt-4 text-xl font-bold text-cards">
              {testimonial.name}
            </h3>
            <p className="text-sm text-cards">{testimonial.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
