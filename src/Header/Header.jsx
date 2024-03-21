'use client'

import "./Header.css";
import Link from "next/link";
import { useState } from 'react';
import Image from "next/image";
import hamburger from '/Images/menu-open-button.png'
import hamburgerClosed from '/Images/menu-close-button.png'

function Header() {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggle = () => {
      setNavbarOpen(!navbarOpen);
     };

  return (
    <header className="site-header">
<h1 className="site-title">🔥 Fireplace Palace</h1>

 <nav className="navbar">
        <button
          className="toggle"
          onClick={() => setNavbarOpen((prev) => !prev)}
         >  

          {navbarOpen ? <Image src={hamburgerClosed} alt="navclosed"
         /> : <Image src={hamburger} alt="navopen"
         />}
</button> 

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/founders">Meet the founders</Link>
          </li>
        </ul>
       </nav> 
    </header>
  );
}

export default Header;
