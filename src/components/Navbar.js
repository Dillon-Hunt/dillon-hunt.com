import '../styles/Navbar.css';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Navbar'>
        <Link className='NavbarItem' to='/'>
            Home
        </Link>
        <Link className='NavbarItem' to='/blog'>
            Blog
        </Link>
    </div>
  );
}

export default Navbar;
