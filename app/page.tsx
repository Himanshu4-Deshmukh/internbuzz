import Who from "@/components/Who";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";

// import Features from "@/components/Features";
// import { Inter } from "@next/font/google";
// import Testimonials from "@/components/Testimonials";
// import Brands from "@/components/Brands";
// const inter = inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Who/>
      <Services/>
      {/* <Features /> */}
      {/* <Brands />  */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Pricing />
      {/* <Testimonials /> */}
      <Contact />
    
    </>
  );
}
