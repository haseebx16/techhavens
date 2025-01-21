import Image from "next/image";
import Header from "./Components/Navbar";
import Hero from "./Components/Hero";
import Think from "./Components/Think";
import Identity from "./Components/Identity";
import Choose from "./Components/Choose";
import WhyChooseUs from "./Components/WhyChooseUs";
import Client from "./Components/Client";

export default function Home() {
  return (
   <div>
      <Header/>
      <Hero/>
      <Think/>
      <WhyChooseUs/>
      <Identity/>
      <Client/>
      <Choose/>
   </div>
  );
}
