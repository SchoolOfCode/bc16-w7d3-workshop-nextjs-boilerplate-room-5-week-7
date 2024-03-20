import Image from 'next/image'
import hiwOne from '/Images/how-it-works-1.png'
import hiwTwo from '/Images/how-it-works-2.png'
import hiwThree from '/Images/how-it-works-3.png'

import "./HowItWorks.css";


function HowItWorks() {
    return (
        <section className="how-it-works">
        <h3>How it works</h3>
        <div className="image-cards">
          <div className="card-1">
            <Image src={hiwOne} alt="hiwOne"
            />
            <p className="img-subheading">Give us call...</p>
            <p className="img-caption">
              Call us and book in a &quot;Design Consultation&quot; on a date
              and time to suit
            </p>
          </div>
          <div className="card-2">
          <Image src={hiwTwo} alt="hiwTwo"
            />
            <p className="img-subheading">We come to you...</p>
            <p className="img-caption">
              We come to your home to do an assessment of the space and to
              your style preference.
            </p>
          </div>
          <div className="card-3">
          <Image src={hiwThree} alt="hiwThree" />
            <p className="img-subheading">We recommend...</p>
            <p className="img-caption">
              We send you a bespoke set of fireplace recommendations.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
export default HowItWorks;  