import React from 'react'
import campaigns from "./Assets/Group.png";
import auto from "./Assets/Email maketing.png";
import fraud from "./Assets/surface1.png";
import analytics from "./Assets/Group 623.png";
import integ from "./Assets/Vector (4).png";
import viral from "./Assets/icon.png";
import action from "./Assets/Union.png";
import live from "./Assets/Group 1174.png";
import resource from "./Assets/Group (1).png";
import monster from "./Assets/monters.png";

function Leftnav() {
  return (
    <div className="leftnav">
        <button className="btn1">
          <img src={campaigns} alt="" />
          All Campaigns
        </button>
        <button className="btn1">
          <img src={auto} alt="" />
          Automation Center
        </button>
        <button className="btn1">
          <img src={fraud} alt="" />
          Fraud Analytics
        </button>
        <button className="btn1">
          <img src={analytics} alt="" />
          Analytics
        </button>
        <button className="btn1">
          <img src={integ} alt="" />
          Integrations
        </button>
        <button className="btn1">
          <img src={viral} alt="" />
          Viral Pack
        </button>
        <button className="btn1">
          <img src={action} alt="" />
          Action builder
        </button>
        <button className="btn1">
          <img src={live} alt="" />
          Live Editor
        </button>
        <button className="btn1">
          <img src={resource} alt="" />
          Resource Center
        </button>

        <div className="bottom">
          <div className="card1">
            <img src={monster} alt="" />
            <span>Upgrade to </span> <br />
            <span id="sp2"> Perkzilla Unlimited</span>
            <button className="btn2">Upgrade</button>
          </div>
          <button className="btn3">+Add Expansion Pack</button>
        </div>
      </div>
  )
}

export default Leftnav
