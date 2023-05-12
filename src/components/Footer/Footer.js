import React from "react";
import AppleStore from "../../assets/AppleStore";
import GooglePlay from "../../assets/GooglePlay";
import Logo from "../../assets/Logo";
import "./Footer.css";

function Footer() {
  return (
    <div className="FooterContainer">
      <div className="FooterLinks">
        <div style={{ paddingLeft: 20 }}>
          <Logo />
        </div>
        <div className="FirstLinks">
          <ul>
            <li>Download Now</li>
          </ul>
          <ul>
            <li>Licenese</li>
          </ul>
        </div>
        <div className="SecondLinks">
          <ul>
            <li>About</li>
          </ul>
          <ul>
            <li>Features</li>
          </ul>
          <ul>
            <li>Pricing</li>
          </ul>
          <ul>
            <li>Careers</li>
          </ul>
          <ul>
            <li>Help</li>
          </ul>
          <ul>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <p style={{ paddingLeft: 15, color: "#D9DBE1" }}>
          © 2020 Landify UI Kit. All rights reserved
        </p>
      </div>
      <div className="FooterGetApp">
        <p>Get the App</p>
        <GooglePlay />
        <AppleStore />
      </div>
    </div>
  );
}

export default Footer;
