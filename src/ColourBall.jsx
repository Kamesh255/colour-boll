import React, { useState } from 'react'
import './ColourBall.css';

const colours = [
    {
        id  : 1,
        colour : "#D5E8D4" 
    },
    {
        id  : 2,
        colour : "#FFE6CD" 
    },
    {
        id  : 3,
        colour : "#6801FF" 
    },
    {
        id  : 4,
        colour : "#D9E8FB" 
    },
    {
        id  : 5,
        colour : "#E2D5E7" 
    }
  ]

const ColourBall = () => {

    const [number , setNumber] = useState("")

   
  return (
    <div className='bollBox'>
        <div className='emptyDiv'>
                 
        </div>
        <div className='colourDiv'> 
        {colours.map((el)=>{
            return( 
                <div style={{backgroundColor:`${el.colour}`,marginTop:"10px", width:"70px",height:"70px",borderRadius:"50%"}}></div> 
            )
        })}
        </div>
        <div className='btnDiv'>
            <div style={{marginTop:"150px", display:"flex",flexDirection:"column",}}> 
                <input style={{minHeight:"50px",Width:"100px",textAlign:"center",fontWeight:"600"}} type="text" placeholder='Type your number' onChange={(e)=> setNumber(e.target.value)}/>
                <button style={{minHeight:"50px",Width:"100px"}} >Shoot</button>
            </div>
        </div>
    </div>
  )
}

export default ColourBall