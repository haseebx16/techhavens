import Image from "next/image";
import Header from "./Components/Navbar";
import Hero from "./Components/Hero";
import Think from "./Components/Think";

export default function Home() {
  return (
   <div>
      <Header/>
      <Hero/>
      <Think/>
   </div>
  );
}
