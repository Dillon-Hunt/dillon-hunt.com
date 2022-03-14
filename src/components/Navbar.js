import '../styles/Navbar.css';

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
        <Link className="NavbarItem" to="https://dillon-hunt.com/">
            Home
        </Link>
        <Link className="NavbarItem" to="https://dillon-hunt.com/">
            Blog
        </Link>
    </div>
  );
}

export default Navbar;
