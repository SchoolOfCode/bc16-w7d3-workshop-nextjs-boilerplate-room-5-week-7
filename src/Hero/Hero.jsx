
import Image from 'next/image'
import heroMobile from '/Images/hero-mobile.png'

import "./Hero.css";




function Hero() {
  return (
    <section className="hero-section">
   <Image
        src={heroMobile}
       width={400}
         height={400}
          alt="hero-image"
         />
    <div className="discover">
      <h2>
        Discover the <br />
        Perfect Fireplace...
      </h2>

      <p>
        Book consultation:{" "}
        <span className="phone-number">0121 345 6789</span>
      </p>
    </div>
  </section>
  );
}

export default Hero;


{/* <img className="hero-img" src={heroMobile} /> */}