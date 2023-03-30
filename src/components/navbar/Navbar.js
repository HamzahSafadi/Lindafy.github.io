import React from "react";
import AppleStore from "../../assets/AppleStore";
import GooglePlay from "../../assets/GooglePlay";
import Logo from "../../assets/Logo";
import MoreIcon from "../../assets/MoreIcon";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="NavbarContainer">
        <div className="NavLogo">
          <Logo />
          <p>Landify</p>
        </div>
        <ul className="NavMenu">
          <li>About</li>
          <li>Products</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>
            More
            <span style={{ marginLeft: 10 }}>
              <MoreIcon />
            </span>
          </li>
        </ul>
        <div className="NavButtons">
          <GooglePlay />
          <span style={{ paddingLeft: 12 }}>
            <AppleStore />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
