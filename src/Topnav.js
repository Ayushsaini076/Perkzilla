import React from 'react'
import trophy from "./Assets/icon Winner.png";
import notif from "./Assets/notifcations.png";
import monster2 from "./Assets/monters2.png";
import darr from "./Assets/Frame 147.png"

function Topnav() {
  return (
    <div className="topnav">
        <span id="sp">Automatin center&gt;rewards</span>

        <form action="">
          <input className="sin" placeholder="Search Subscribe Here" type="text" />
        </form>
        <div id="d1" >
          <div className="winner">
          <img  src={trophy} alt="" />

          </div>
          

          <span id="sp3">Renee Maddox</span>
        </div>

        <img src={notif} alt="" />

        <div className="prof">
        <img src={monster2} alt="" />
        <span>Welcome,Lifu</span>
        <img src={darr} alt="" />

        </div>
        
      </div>
  )
}

export default Topnav
