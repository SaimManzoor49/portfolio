'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


export default function Main_Section_3() {
  const [hover, setHover] = useState(false)


  return (
    <>
      <div className="flex flex-col justify-center items-center mt-28">

        <h4 className=' text-5xl sm:text-6xl text-center font-bold'>Performance <span className='gradient-color'>&</span> Security </h4>
        <div className="hidden  lg:block"  >
          <div className="relative" style={{ minHeight: '600px' }}>
            <video src={'/lockBG.webm'} className='' autoPlay loop muted style={{ maxWidth: '1500px' }} />
            <span onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
              <Image className='absolute top-[44%] left-[46%] z-20' src={'/lockBody.png'} alt='lockBody ' height={80} width={80} style={{ width: "100px", height: 'auto' }} />
              <Image className={`absolute top-[39%] left-[46.75%] z-10 ${hover && 'top-[45%]'} transition-all duration-300 `} src={'/lockTop.webp'} alt='lockBody ' height={75} width={75} style={{ width: "75px", height: 'auto' }} />
            </span>
            <span className='mb-0 border-2 p-3 rounded-full flex items-center gap-2 shadow-i border-color absolute top-[60%] left-[46%] z-10   ' >Encryption</span>
          </div>
        </div>

        <div className="lg:hidden w-full">
          <div className="flex justify-center items-center relative w-full " style={{ minHeight: '600px' }}>

            <span  className=' ' onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} >
              <Image className={` absolute top-[29%]    left-[40%] xsm:left-[43%]  sm:left-[46%]      ml-3 ${hover && 'top-[36%]'} transition-all duration-300 `} src={'/lockTop.webp'} alt='lockBody ' height={75} width={75} style={{ width: "75px", height: 'auto' }} />
              <Image className='    absolute top-[36%]  left-[40%] xsm:left-[43%]  sm:left-[46%]     ' src={'/lockBody.png'} alt='lockBody ' height={80} width={80} style={{ width: "100px", height: 'auto' }} />
            {/* <span className='mb-0 border-2 p-3 rounded-full flex items-center gap-2 shadow-i border-color absolute top-[60%] left-[46%] z-10   ' >Encryption</span> */}
            </span>
          </div>


        </div>

        <div className="flex flex-co">
          <q>Why do programmers prefer using the dark mode? Because light attracts bugs!</q>
          <video src="/smile.mp4" className='rounded-full text-right' autoPlay loop muted style={{ maxWidth: '50px' }} ></video>
        </div>
      </div>
    </>
  )
}
