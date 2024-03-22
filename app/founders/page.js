import Image from "next/image";
import foundersImg from "/Images/founder-mike-and-mandy.png";
import founders1 from "/Images/founders-1.png";
import founders2 from "/Images/founders-2.png";
import founders3 from "/Images/founders-3.png";
import "/app/founders/page.css";

export default function FoundersPage() {
  return (
    <section className="founders">
      <div className="mike-and-mandy">
        <h1 className="meetTitle">Meet the artisans behind our masterpieces!</h1>
        <h2 className="mandmTitle">Mike and Mandy</h2>
        <Image className="foundersImg" src={foundersImg} width={400} height={400} alt="founders-image" />
      </div>

      <div className="about">

        <div className="card">
          <h3 className="titles">Our craftsmanship</h3>
          <p>
            Mike and Mandy studied and honed their craft under the fireplace sensei Vik Von Blaze. Nothing gets
            delivered to a customer without their sign off.
          </p>
          <Image className="foundersImg" src={founders1} alt="founders-image1" />
        </div>

        <div className="card">
          <h3 className="titles">Our experience</h3>
          <p>
            Numbers don&apos;t lie - We&apos;ve been around for 20+ years and have a long list of happy customers who
            gladly recommend us.
          </p>
          <Image className="foundersImg" src={founders2} alt="founders-image2" />
        </div>

        <div className="card">
          <h3 className="titles">Our guarantee</h3>
          <p>
            If you&apos;re not 100% satisfied, we will fully refund your purchase. Also, we offer free repairs for the
            first 20 years of ownership. Find that somewhere else!
          </p>
          <Image className="foundersImg" src={founders3} alt="founders-image3" />
        </div>
        </div>

    </section>
  );
}
