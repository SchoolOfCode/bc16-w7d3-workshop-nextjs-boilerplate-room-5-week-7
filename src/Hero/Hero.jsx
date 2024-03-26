import Image from "next/image";
import heroMobile from "/Images/hero-mobile.png";
import Link from "next/link";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <Image className="hero-img" src={heroMobile} width={400} height={400} alt="hero-image" />
      <div className="discover">
        <h2>
          Discover the <br />
          Perfect Fireplace...
        </h2>

        <p>
        <Link className="bookingLink" href="/booking" >
                    Book Consultation
                  </Link> 
        </p>
      </div>
    </section>
  );
}

export default Hero;

{
  /* <img className="hero-img" src={heroMobile} /> */
}



