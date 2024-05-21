import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import happyImg from "../assets/happy.gif"
import mathPaper from "../assets/math-paper-texture.jpg"

import shyImg from "../assets/shy.gif"

function Container() {

    const randomX = gsap.utils.random(-800, 400, 150)
    const randomY = gsap.utils.random(-500, 200, 100)

    const [xValue, setXValue] = useState(0);
    const [yValue, setYValue] = useState(0);

    const boxRef = useRef();

    useGSAP(()=>{
        gsap.to(boxRef.current, {
            x: xValue,
            y: yValue,
            duration: 1,
            ease: 'power2.out'
        })
    }, [xValue, yValue])

    const [isYes, setIsYes] = useState(false);


  return (
    <div className='container bg-slate-600 h-[700px] w-[1200px] flex flex-col items-center relative'
        style={{
            background: `url(${mathPaper})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}
    >
        <h1 
        className='bg-white h-20 w-1/2 mt-10 text-center flex items-center justify-center text-3xl font-bold'
        >{isYes? "Love you❤": "Wanna go for date?"}</h1>
        
        <div className="imageContainer">
            {/* <img src="./shy.gif" className='h-2/4 mt-20'/> */}
            {isYes? <img src={happyImg} className='h-4/5 mt-20' alt='shy' /> : <img src={shyImg} className='h-2/4 mt-20'/>}
        </div>

        {
            isYes? null:
            <>
                <button
                className='bg-slate-400 h-12 w-20 absolute font-semibold text-xl top-3/4 left-1/4'
                onClick={()=> {
                    setIsYes(true)
                }}
                >Yes</button>

                <button 
                className='movable bg-slate-400 h-12 w-20 absolute font-semibold text-xl top-3/4 left-3/4'
                onMouseOver={()=>{
                    setXValue(randomX)
                    setYValue(randomY)
                }}
                ref={boxRef}
                >No</button>
        </>
    }
    </div>
  )
}

export default Container