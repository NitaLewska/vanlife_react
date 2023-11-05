import { Link } from "react-router-dom";
import "./Header.css"

export default function Header() {
  return (
    <header>
      <Link to="/" className="main_logo">#VANLIFE
      </Link>
      <nav>
        <Link>About</Link>
        <Link>Vans</Link>
      </nav>
    </header>
  );
}
