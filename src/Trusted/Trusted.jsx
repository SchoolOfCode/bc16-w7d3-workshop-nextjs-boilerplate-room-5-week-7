"use client";

import { useState, useEffect } from "react";
import "./Trusted.css";




function Trusted() {
  const [country, setCountry] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${country}`)
      .then((response) => response.json())
      .then((json) => {
        const items = Array.isArray(json) ? json : [json];
        console.log(items); 
        setItems(items); 
      });
  }, [country]);
  


  // function MyButton() {
  //   const [isActive, setIsActive] = useState(false);
  
  //   const handleClick = () => {
  //     setIsActive(!isActive);
  //   };


  return (
    <section className="trusted">
      <h1>Trusted.</h1>
      <p className="trusted-para">
        We have got thousands of happy customers all over the UK. Choose your
        country to see the latest review:
      </p>
      <div className="button-container">
        <button className="reviewButton" onClick={() => setCountry("england")} type="button">England</button>
        <button className="reviewButton" onClick={() => setCountry("wales")} type="button">Wales</button>
        <button className="reviewButton" onClick={() => setCountry("scotland")} type="button">Scotland</button>
      </div>
      {items.map((item, index) => {
  console.log(item);
  return (
    <div key={index}>
      <div className="divReviews">
      <p>&quot;{item.text}&quot;</p>
      </div>
      <p className="reviewer">{item.author} - {item.location}</p>
    </div>
  );




})}


    </section>
  );
}

export default Trusted;

