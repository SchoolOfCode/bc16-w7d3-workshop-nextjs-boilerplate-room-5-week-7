import "./page.css";

import Hero from "../src/Hero/Hero.jsx";
import Trusted from "../src/Trusted/Trusted.jsx";
import HowItWorks from "../src/HowItWorks/HowItWorks.jsx";


export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <HowItWorks />
    </>
  );
}
