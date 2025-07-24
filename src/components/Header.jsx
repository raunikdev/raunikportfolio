import { useState } from 'react';
import './css/Header.css';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <p className="heading">
        <a href="/" className="headinga">PortFolio-Raunik</a>
      </p>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`header-list ${menuOpen ? 'show' : ''}`}>
        <li><a className="attribute-header" href="/#Home">Home</a></li>
        <li><a className="attribute-header" href="/About">About</a></li>
        <li><a className="attribute-header" href="/#projects">Projects</a></li>
        <li><a className="attribute-header" href="#Contact">Contact</a></li>
      </ul>
    </header>
    // <header>
    //     <p className='heading'><a href="/" className="headinga">PortFolio-Raunik</a></p>
    //     <ul className='header-list'>
    //         <li><a className="attribute-header" href="#Home">Home</a></li>
    //         <li><a className="attribute-header" href="/About">About</a></li>
    //         <li><a className="attribute-header" href="#Projects">Projects</a></li>
    //         <li><a className="attribute-header" href="">Contact</a></li>

    //     </ul>
    // </header>
  )
}
export default Header; 