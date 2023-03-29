import React from "react";
import Airbnb from "../../assets/Airbnb";
import FedEx from "../../assets/FedEx";
import Google from "../../assets/Google";
import HubSpot from "../../assets/HubSpot";
import Microsoft from "../../assets/Microsoft";
import Walmer from "../../assets/Walmer";
import "./ClientSection.css";

function ClientSection() {
  return (
    <div className="ClientContainer">
      <ul>
        <li>
          <Airbnb />
        </li>
      </ul>
      <ul>
        <li>
          <HubSpot />
        </li>
      </ul>
      <ul>
        <li>
          <Google />
        </li>
      </ul>
      <ul>
        <li>
          <Microsoft />
        </li>
      </ul>
      <ul>
        <li>
          <Walmer />
        </li>
      </ul>
      <ul>
        <li>
          <FedEx />
        </li>
      </ul>
    </div>
  );
}

export default ClientSection;
