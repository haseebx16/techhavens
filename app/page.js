import Image from "next/image";
import Header from "./Components/Navbar";
import Hero from "./Components/Hero";
import Think from "./Components/Think";
import Identity from "./Components/Identity";
import Choose from "./Components/Choose";
import WhyChooseUs from "./Components/WhyChooseUs";

export default function Home() {
  return (
   <div>
      <Header/>
      <Hero/>
      <Think/>
      <WhyChooseUs/>
      <Identity/>
      <Choose/>
   </div>
  );
}
