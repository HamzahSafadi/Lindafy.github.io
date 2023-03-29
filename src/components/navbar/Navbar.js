import React from "react";
import AppleStore from "../../assets/AppleStore";
import BackgroundTop from "../../assets/BackgroundTop";
import GooglePlay from "../../assets/GooglePlay";
import Logo from "../../assets/Logo";
import MoreIcon from "../../assets/MoreIcon";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="NavbarContainer">
        <span className="NavLogo">
          <Logo />
          <p>Landify</p>
        </span>
        <div className="NavMenu">
          <ul>
            <li>About</li>
          </ul>
          <ul>
            <li>Products</li>
          </ul>
          <ul>
            <li>Pricing</li>
          </ul>
          <ul>
            <li>Blog</li>
          </ul>
          <ul>
            <li>Jobs</li>
          </ul>
          <ul>
            <li>
              More
              <span style={{ marginLeft: 10 }}>
                <MoreIcon />
              </span>
            </li>
          </ul>
        </div>
        <div className="NavButtons">
          <GooglePlay />
          <span style={{ paddingLeft: 12 }}>
            <AppleStore />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
