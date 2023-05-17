import React, { useState } from 'react'
import "./Card.css"



function Card(props) {

  const handledrag=(e,item)=>{
    console.log("Drag has started")
    e.dataTransfer.setData("itemName",item)

  
  }

  return (
    <div draggable onDragStart={(e)=>handledrag(e,props.heading)} className='card'>
        <img src={props.url} alt="" />
        <h4>{props.heading}</h4>
      
    </div>
  )
}

export default Card
