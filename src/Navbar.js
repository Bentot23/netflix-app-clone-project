import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect( () => {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else handleShow(false)
    });
    // return () => {
    //     window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img
            className='nav_logo'
            // src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/300px-Netflix_2014_logo.svg.png?20140810085105"
            alt="Netflix Logo"
        />
        <img
            className='nav_avatar'
            // src="https://pbs.twimg.com/profile_images/1240119990411"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="Netflix Logo"
        />
        {/* <div className="nav_right">UNLIMITED TV SHOWS & MOVIES
            <button className="btn_join_now">JOIN NOW</button>
            <button className="btn_sign">SIGN IN</button>
        </div> */}
    </div>
  )
}

export default Navbar
// https://commons.wikimedia.org/wiki/File:Captura_de_pantalla_Netfilx.png
// https://commons.wikimedia.org/wiki/File:Netflix-avatar.png

