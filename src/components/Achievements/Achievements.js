import React from "react";
import BetterComponents from "../../assets/BetterComponents";
import Countries from "../../assets/Countries";
import MultipleLayout from "../../assets/MultipleLayout";
import RobustWorkflow from "../../assets/RobustWorkflow";
import "./Achievements.css";

function Achievements() {
  return (
    <div className="AchContainer">
      <div className="AchHeader">
        <h2>
          Our 18 years of
          <br /> achievements
        </h2>
        <p>With our super powers we have reached this</p>
      </div>

      <div className="CounterContainer">
        <div className="CounterCardsTop">
          <div className="CounterCard">
            <span style={{ paddingRight: 16 }}>
              <RobustWorkflow />
            </span>
            <div style={{ flexDirection: "column" }}>
              <h4>10,000 +</h4>
              <p>Downloads Per Day</p>
            </div>
          </div>
          <div className="CounterCard">
            <span style={{ paddingRight: 16 }}>
              <BetterComponents />
            </span>
            <div style={{ flexDirection: "column" }}>
              <h4>500 +</h4>
              <p>Clients</p>
            </div>
          </div>
        </div>
        <div className="CounterCardsBottom">
          <div className="CounterCard">
            <span style={{ paddingRight: 16 }}>
              <MultipleLayout />
            </span>
            <div style={{ flexDirection: "column" }}>
              <h4>2 Million </h4>
              <p>Users</p>
            </div>
          </div>
          <div className="CounterCard">
            <span style={{ paddingRight: 16 }}>
              <Countries />
            </span>
            <div style={{ flexDirection: "column" }}>
              <h4>140</h4>
              <p>Countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
