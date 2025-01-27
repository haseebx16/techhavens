"use client";

import Header from "./Components/Navbar";
import Hero from "./Components/Hero";
import Think from "./Components/Think";
import Identity from "./Components/Identity";
import Choose from "./Components/Choose";
import WhyChooseUs from "./Components/WhyChooseUs";
import Client from "./Components/Client";
import Testimonials from "./Components/Testimonials";
import Connect from "./Components/Connect";
import Footer from "./Components/Footer";
import Realm from "./Components/Realm";
import PreLoader from "./Components/PreLoader";
import { useState } from "react";

export default function Home() {

  return (
   <div>
      <PreLoader/>
      <Header/>
      <Hero/>
      <Realm/>
      <Think/>
      <WhyChooseUs/>
      <Identity/>
      <Client/>
      <Choose/>
      <Testimonials/>
      <Connect/>
      <Footer/>
   </div>
  );
}
