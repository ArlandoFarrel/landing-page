import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// import './Style.css';
import './Style.css'
function Header() {
  const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div>
      <header>
        <div className="container">
          <div className="header-left">
            <h1>Group 3</h1>
          </div>
          <span className="fa fa-bars menu-icon" />
          <div className="header-right">
          <ul className={nav ? "slide" : ""}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Card">Product</Link></li>
          </ul>
          </div>
          <div className="menu-toggle">
                            <a onClick={() => handleNav()}>
                                <i className="fa-solid fa-bars fa-2x"></i>
                            </a>
                        </div>
        </div>
      </header>
    </div>
  )
}

export default Header
