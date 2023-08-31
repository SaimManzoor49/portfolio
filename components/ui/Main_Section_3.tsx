'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsStars } from 'react-icons/bs'
export default function Main_Section_3() {
  const [hover,setHover] = useState(false)
  return (
    <>
    <div className="flex flex-col justify-center items-center mt-28">

      <h4 className=' text-5xl sm:text-6xl text-center font-bold'>Performance <span className='gradient-color'>&</span> Security </h4>
      <div className="relative"  style={{minHeight:'600px'}}  >
        <div className="">
        <video src={'/lockBG.webm'} autoPlay loop muted style={{maxWidth:'1500px'}} />
        </div>
        <span onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>

        <Image className='absolute top-[44%] left-[46%] z-10' src={'/lockBody.png'} alt='lockBody '  height={80} width={80} style={{width:"100px",height:'auto'}} />
        <Image className={`absolute top-[39%] left-[46.75%] ${hover&&'top-[45%]'} transition-all duration-300 `} src={'/lockTop.webp'} alt='lockBody '  height={75} width={75} style={{width:"75px",height:'auto'}} />
        </span>
        <span className='mb-0 border-2 p-3 rounded-full flex items-center gap-2 shadow-i border-color absolute top-[60%] left-[46%] z-30   ' >Encryption</span>

        
      </div>

      <div className="flex flex-co">
      <q>Why do programmers prefer using the dark mode? Because light attracts bugs!</q>
      <video src="/smile.mp4" className='rounded-full text-right' autoPlay loop muted style={{maxWidth:'50px'}} ></video>
      </div>
    </div>
    </>
  )
}
