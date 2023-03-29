import React from "react";
import BetterComponents from "../../assets/BetterComponents";
import Flexibility from "../../assets/Flexibility";
import MultipleLayout from "../../assets/MultipleLayout";
import RobustWorkflow from "../../assets/RobustWorkflow";
import UserFriendly from "../../assets/UserFriendly";
import WellOrganized from "../../assets/WellOrganized";
import "./FeaturesSection.css";

function FeaturesSection() {
  return (
    <div className="FeaturesContainer">
      <div className="FeaturesContent">
        <h1>Tailor-made features</h1>
        <p>
          Lorem ipsum is common placeholder text used to demonstrate
          <br /> the graphic elements of a document or visual presentation.
        </p>
      </div>
      <div className="CardsContainer">
        <div className="Card">
          <div style={{ paddingBottom: 24 }}>
            <RobustWorkflow />
          </div>
          <h3>Robust Workflow</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
        <div className="Card">
          <div style={{ paddingBottom: 24 }}>
            <Flexibility />
          </div>
          <h3>Flexibility</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
        <div className="Card">
          <div style={{ paddingBottom: 24 }}>
            <UserFriendly />
          </div>
          <h3>User Friendly</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
        <div className="Card">
          <div style={{ paddingBottom: 24 }}>
            <MultipleLayout />
          </div>
          <h3>Multiple Layout</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
        <div className="Card">
          <div style={{ paddingBottom: 24 }}>
            <BetterComponents />
          </div>
          <h3>Better Components</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
        <div className="Card">
          <div style={{ paddingBottom: 24 }}>
            <WellOrganized />
          </div>
          <h3>Well Organized</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
