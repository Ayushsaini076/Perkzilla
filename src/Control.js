import React from 'react'
import { useState } from "react";
import dashboard from './Assets/material-symbols_dashboard.png';
import del from './Assets/mdi_delete.png'
import dragger from './Assets/ri_drag-move-2-fill.png'
import plus from './Assets/Frame 156.png'


function Control() {
const [visibility,setVisibility]=useState(false);
  const [btnvisible,setBtnvisible]=useState(true);
  const [card1,setCard1]=useState(false)
  const [card2,setCard2]=useState(false)
  const [card3,setCard3]=useState(false)
  const [card4,setCard4]=useState(false)
  const [card5,setCard5]=useState(false)
  const [cnt3,setCnt3]=useState(false)

  const handleclick=()=>{
    setBtnvisible(!btnvisible)

    setVisibility(!visibility)
    
  }
  const handlechild=(data)=>{
    console.log(data.target.id)
    const Id = data.target.id

    
    if(Id==='card1'){
      setCard1(true)
    }
    else if(Id==='card2'){
      setCard2(true)
    }
    else if(Id==='card3'){
      setCard3(true)
    }
    else if(Id==='card4'){
      setCard4(true)
    }
    else if(Id==='card5'){
      setCard5(true)
    }

    setCnt3(true);

    setBtnvisible(!btnvisible)


    setVisibility(!visibility); 

  }
  const handleDragover = (event)=>{
    event.preventDefault();
    console.log("Dragging over now")
  }

  var [items,setItems]=useState([]);
  const handleDrop = (e,targetArea)=>{
    console.log("Item dropped");
    let itemname = e.dataTransfer.getData('itemName');
    setItems([...items,{itemname,targetArea}]);
    console.log(itemname,targetArea)


  }

  const [sidebar,setSidebar]=useState(false);
  const handleside=()=>{
    console.log('sidebar function called');
    setSidebar(true);

  }

  const handledel=(data)=>{
    console.log()
    
    if(data.target.id==='img1'){
        setCard1(false)
      }
      else if(data.target.id==='img2'){
        setCard2(false)
      }
      else if(data.target.id==='img3'){
        setCard3(false)
      }
      else if(data.target.id==='img4'){
        setCard4(false)
      }
      else if(data.target.id==='img5'){
        setCard5(false)
      }
  }
  return (
    <div className="mainarea">
        {btnvisible && <div id="c1" className="container">
        <div className="container-child">
            <button onClick={handleclick} className="btn5" >+ Add New Section</button>
        </div>
        </div>}
        

        {visibility&&<div id="c2" className="container2 ">
          <div id="card1" onClick={handlechild} className="containerchild">
            <div  className="child1"></div>
          </div>
          <div id="card2" onClick={handlechild} className="containerchild">
          <div  className="child2"></div>
          <div  className="child2"></div>
          </div>
          <div id="card3" onClick={handlechild} className="containerchild">
          <div  className="child3"></div>
          <div  className="child3"></div>
          <div  className="child3"></div>
            
          </div>
          <div id="card4" onClick={handlechild} className="containerchild">
          <div  className="child3"></div>
          <div  className="child2"></div>

          </div>
          <div id="card5" onClick={handlechild} className="containerchild">
            <div className="child2"></div>
            <div className="child3"></div>
          </div>
        </div>}
        
        <div id="card1-connector" className="container3">
        
        {card1 &&<div onClick={handleside}  className="containerchild2 cont">
        {sidebar && <div className='sidebar'>
                <img src={dashboard} alt="" />
                <img id='img1' onClick={handledel} style={{cursor:'pointer'}} src={del} alt="" />
                <img src={plus} alt="" />
                <img src={dragger} alt="" />
        </div>}
        <div droppable onDragOver={(e)=>handleDragover(e)} onDrop={(e)=>handleDrop(e,'Area1')} className="cc1 cc">
        {items.length!=0?items.map((ele)=>{
        if(ele.itemname==="Heading" && ele.targetArea==='Area1'){
            return(
                <h4>Lorem, ipsum.</h4>
            )
        }
        else if(ele.itemname==="Text" && ele.targetArea==='Area1'){
            return(
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, deserunt.</p>
            )
        }
      }):<span>+</span>}
        </div>
      </div>}

        
        
        {card2 &&<div onClick={handleside} className="containerchild2 cont">
        {sidebar && <div className='sidebar'>
                <img src={dashboard} alt="" />
                <img id='img2' onClick={handledel} style={{cursor:'pointer'}}   src={del} alt="" />
                <img src={plus} alt="" />
                <img src={dragger} alt="" />
            </div>}
            
          <div droppable onDragOver={(e)=>handleDragover(e)} onDrop={(e)=>handleDrop(e,'Area2')} className="cc2 cc">
          {items.length!=0?items.map((ele)=>{
            if(ele.itemname==="Heading" && ele.targetArea==='Area2'){
                return(
                    <h4>Lorem, ipsum.</h4>
                )
            }
            else if(ele.itemname==="Text" && ele.targetArea==='Area2'){
                return(
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, deserunt.</p>
                )
            }
          }):<span>+</span>}
          

          </div>
          <div droppable onDragOver={(e)=>handleDragover(e)} onDrop={(e)=>handleDrop(e,'Area3')} className="cc2 cc">
            
          {items.length!=0?items.map((ele)=>{
            if(ele.itemname==="Heading" && ele.targetArea==='Area3'){
                return(
                    <h4>Lorem, ipsum.</h4>
                )
            }
            else if(ele.itemname==="Text" && ele.targetArea==='Area3'){
                return(
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, deserunt.</p>
                )
            }
          }):<span>+</span>}
          
          
          
          </div>
        </div>}
        {card3 &&<div onClick={handleside} className="containerchild2 cont">
        {sidebar && <div className='sidebar'>
                <img src={dashboard} alt="" />
                <img id='img3' onClick={handledel} style={{cursor:'pointer'}}  src={del} alt="" />
                <img src={plus} alt="" />
                <img src={dragger} alt="" />
            </div>}
            <div droppable onDragOver={(e)=>handleDragover(e)} onDrop={(e)=>handleDrop(e,'Area4')} className="cc3 cc">
            {items.length!=0?items.map((ele)=>{
            if(ele.itemname==="Heading" && ele.targetArea==='Area4'){
                return(
                    <h4>Lorem, ipsum.</h4>
                )
            }
            else if(ele.itemname==="Text" && ele.targetArea==='Area4'){
                return(
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, deserunt.</p>
                )
            }
          }):<span>+</span>}
            </div>
            <div droppable onDragOver={(e)=>handleDragover(e)} onDrop={(e)=>handleDrop(e,'Area5')} className="cc3 cc">
            {items.length!=0?items.map((ele)=>{
            if(ele.itemname==="Heading" && ele.targetArea==='Area5'){
                return(
                    <h4>Lorem, ipsum.</h4>
                )
            }
            else if(ele.itemname==="Text" && ele.targetArea==='Area5'){
                return(
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, deserunt.</p>
                )
            }
          }):<span>+</span>}
            </div>
            <div droppable onDragOver={(e)=>handleDragover(e)} onDrop={(e)=>handleDrop(e,'Area6')} className="cc3 cc">
            {items.length!=0?items.map((ele)=>{
            if(ele.itemname==="Heading" && ele.targetArea==='Area6'){
                return(
                    <h4>Lorem, ipsum.</h4>
                )
            }
            else if(ele.itemname==="Text" && ele.targetArea==='Area6'){
                return(
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, deserunt.</p>
                )
            }
          }):<span>+</span>}
            </div>
          </div>}
        {card4 && <div onClick={handleside} className="containerchild2 cont">
        {sidebar && <div className='sidebar'>
                <img src={dashboard} alt="" />
                <img id='img4' onClick={handledel} style={{cursor:'pointer'}}  src={del} alt="" />
                <img src={plus} alt="" />
                <img src={dragger} alt="" />
            </div>}
          <div droppable onDragOver={(e)=>handleDragover(e)} onDrop={(e)=>handleDrop(e,'Area7')} className="cc3 cc">
          {items.length!=0?items.map((ele)=>{
            if(ele.itemname==="Heading" && ele.targetArea==='Area7'){
                return(
                    <h4>Lorem, ipsum.</h4>
                )
            }
            else if(ele.itemname==="Text" && ele.targetArea==='Area7'){
                return(
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, deserunt.</p>
                )
            }
          }):<span>+</span>}
          </div>
          <div droppable onDragOver={(e)=>handleDragover(e)} onDrop={(e)=>handleDrop(e,'Area8')} className="ar cc2 cc">
          {items.length!=0?items.map((ele)=>{
            if(ele.itemname==="Heading" && ele.targetArea==='Area9'){
                return(
                    <h4>Lorem, ipsum.</h4>
                )
            }
            else if(ele.itemname==="Text" && ele.targetArea==='Area9'){
                return(
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, deserunt.</p>
                )
            }
          }):<span>+</span>}
          </div>
        </div>}
        {card5 &&<div onClick={handleside} className="containerchild2 cont">
        {sidebar && <div className='sidebar'>
                <img src={dashboard} alt="" />
                <img id='img5' onClick={handledel} style={{cursor:'pointer'}}  src={del} alt="" />
                <img src={plus} alt="" />
                <img src={dragger} alt="" />
            </div>}
          <div droppable onDragOver={(e)=>handleDragover(e)} onDrop={(e)=>handleDrop(e,'Area9')} className="ar cc2 cc">
          {items.length!=0?items.map((ele)=>{
            if(ele.itemname==="Heading" && ele.targetArea==='Area9'){
                return(
                    <h4>Lorem, ipsum.</h4>
                )
            }
            else if(ele.itemname==="Text" && ele.targetArea==='Area9'){
                return(
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, deserunt.</p>
                )
            }
          }):<span>+</span>}
          </div>
          <div droppable onDragOver={(e)=>handleDragover(e)} onDrop={(e)=>handleDrop(e,'Area10')} className="cc3 cc">
          {items.length!=0?items.map((ele)=>{
            if(ele.itemname==="Heading" && ele.targetArea==='Area10'){
                return(
                    <h4>Lorem, ipsum.</h4>
                )
            }
            else if(ele.itemname==="Text" && ele.targetArea==='Area10'){
                return(
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, deserunt.</p>
                )
            }
          }):<span>+</span>}
          </div>
        </div>}
        </div>

      </div>
  )
}

export default Control
