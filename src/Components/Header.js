import React from 'react';
import './Style.css';
function Header() {
  return (
    <div>
       <header>
        <div className="container">
          <div className="header-left">
            {/* <img className="logo" src="https://prog-8.com/images/html/advanced/main_logo.png" /> */}
            <h1 className="logo">Group 3</h1>
          </div>
          {/* Tambahkan ikon menu disini */}
          <span className="fa fa-bars menu-icon" />
          <div className="header-right">
            <a href="#">Pelajaran</a>
            <a href="#">Daftar</a>
            <a href="#" className="login">Log in</a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
