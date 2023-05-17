import React from 'react'
import setting from "./Assets/uiw_setting.png"
import monitor from "./Assets/lucide_monitor.png"
import box1 from "./Assets/material-symbols_dashboard-customize.png"
import box2 from "./Assets/material-symbols_code-blocks-rounded.png"
import box3 from "./Assets/ic_baseline-remove-red-eye.png"
import editor from "./Assets/Group 1175.svg"
import header from "./Assets/Group 427318797.png"
import teaser from "./Assets/ph_selection-background-bold.png"
import social from "./Assets/bxs_megaphone.png"
import timer from "./Assets/timer.png"
import entries from "./Assets/material-symbols_patient-list-rounded.png"
import heading from "./Assets/Vector.png"
import paint from "./Assets/mdi_paint-outline.png"
import gift from "./Assets/ion_gift.png"
import text from "./Assets/material-symbols_timer-rounded.png"
import image from "./Assets/Group 427318795.png"
import Card from "./Card";



function Rightnav() {
    const cards =[
        {
          "url":`${header}`,
          "heading":"Header"
        },
        {
          "url":`${teaser}`,
          "heading":"Teaser"
        },
        {
          "url":`${social}`,
          "heading":"Social network"
        },
        {
          "url":`${timer}`,
          "heading":"Timer"
        },
        {
          "url":`${entries}`,
          "heading":"Entries"
        },
        {
          "url":`${heading}`,
          "heading":"Heading"
        },
        {
          "url":`${text}`,
          "heading":"Text"
        },
        {
          "url":`${image}`,
          "heading":"Image"
        },
        {
          "url":`${paint}`,
          "heading":"Branding"
        },
        {
          "url":`${gift}`,
          "heading":"Rewards"
        },
        
      ]
  return (
    <div className="rightnav">
        <div className="top">
          <img src={setting} alt="" />
          <img src={monitor} alt="" />
          <img src={box3} alt="" />
          <img src={box2} alt="" />
          <img src={box1} alt="" />
        </div>
        <div className="line"></div>
        <div className="main">
          <div className="mtop">
            <span>Element</span>
            {/* <form action="">
            <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>

            </form> */}

          </div>
          <div className="cardbox">
            {cards.map((ele)=>{
              return(
                <Card
                url={ele.url}
                heading={ele.heading}
                />
              )
            })}

          </div>

          <button className="btn4">
            <img src={editor} alt="" />

            Live Editor</button>
        </div>

      </div>
  )
}

export default Rightnav
