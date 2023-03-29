import React from "react";
import Airbnb from "../../assets/Airbnb";
import BookMyShow from "../../assets/BookMyShow";
import HubSpot from "../../assets/HubSpot";
import QuoteMark from "../../assets/QuoteMark";
import SmallQuoteMark from "../../assets/SmallQuoteMark";
import "./SuccessStories.css";

function SuccessStories() {
  return (
    <div className="StoriesContainer">
      <div className="StoriesLeftSide">
        <div className="test">
          <span>
            <QuoteMark />
          </span>
          <div className="StoriesLeftContent">
            <h1>
              Real Stories from <br />
              Real Customers
            </h1>
            <p>Get inspired by these stories</p>
          </div>
        </div>

        <div className="StoriesCard">
          <span>
            <HubSpot />
          </span>
          <p>
            <SmallQuoteMark /> To quickly start my startup landing page design,
            I was looking for a landing page UI Kit. Landify is one of the best
            landing page UI kit I have come across. It’s so flexible, well
            organised and easily editable.
          </p>
          <h5>Floyd Miles</h5>
          <h6>Vice President, GoPro</h6>
        </div>
      </div>

      <div className="StoreisRightSide">
        <div className="StoriesCardTop">
          <span>
            <Airbnb />
          </span>
          <p>
            <SmallQuoteMark />I used landify and created a landing page for my
            startup within a week. The Landify UI Kit is simple and highly
            intuitive, so anyone can use it.
          </p>
          <h5>Jane Cooper</h5>
          <h6>CEO, Airbnb</h6>
        </div>
        <div className="StoriesCardBottom">
          <span>
            <BookMyShow />
          </span>
          <p>
            <SmallQuoteMark /> Landify saved our time in designing my company
            page.
          </p>
          <h5>Kristin Watson</h5>
          <h6>Co-Founder, BookMyShow</h6>
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
