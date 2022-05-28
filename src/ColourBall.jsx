import React, { useEffect, useState } from 'react'
import './ColourBall.css';  
 const URL = "https://flip-product-data.herokuapp.com/colours"
const ColourBall = () => {
    const [number , setNumber] = useState("")
    const [colour , setColour] = useState([])

    const getColours = async () =>{
        try{
            const req = await fetch (`${URL}`)
            const res = await req.json()
            setColour(res)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getColours()
    },[])

   
  return (
    <div className='bollBox'>
        <div className='emptyDiv'>
                 
        </div>
        <div className='colourDiv'> 
        {colour.map((el)=>{
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