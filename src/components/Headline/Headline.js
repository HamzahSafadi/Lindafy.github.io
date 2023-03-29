import React from "react";
import HeadlineMobile from "../../assets/HeadlineMobile";
import NextIcon from "../../assets/NextIcon";
import "./Headline.css";

function Headline() {
  return (
    <div className="HeadlineContainer">
      <div className="HeadlineImage">
        <HeadlineMobile />
      </div>
      <div className="HeadlineContent">
        <h3>Headline</h3>
        <div style={{ maxWidth: 550, marginTop: 15 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem
            egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non.
            Non commodo volutpat, pharetra, vel.
          </p>
          <p
            style={{
              color: "#8C30F5",
              paddingTop: 15,
              alignItems: "center",
              display: "flex",
            }}
          >
            <span style={{ paddingRight: 5 }}>Get Started</span>
            <NextIcon />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Headline;
