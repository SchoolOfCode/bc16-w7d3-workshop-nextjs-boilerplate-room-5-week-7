import "./Header.css";
import Link from "next/link";
// import ClientComponent from './ClientComponent';

function Header() {
  return (
    <header className="site-header">
      <h1 className="site-title">🔥 Fireplace Palace</h1>
      <nav>
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
