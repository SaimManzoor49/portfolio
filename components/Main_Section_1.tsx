'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { BsStars } from 'react-icons/bs'
import { Button } from './ui/button'
import { useInView } from "framer-motion";



export default function Main_Section_1() {
  const IntroLeft = useRef(null);
  const IntroRight = useRef(null);
  const IntroTopElement = useRef(null);

  const isInViewLeftIntro = useInView(IntroLeft, { once: true });
  const isInViewRightIntro = useInView(IntroRight, { once: true });
  const isInViewTopElementIntro = useInView(IntroTopElement, { once: true });

  const leftIntroStyles = {
    transform: isInViewLeftIntro ? "none" : "translateX(-200px)",
    opacity: isInViewLeftIntro ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
  }

  const rightIntroStyles = {
    transform: isInViewRightIntro ? "none" : "translateX(200px)",
    opacity: isInViewRightIntro ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
  }
  const topElementIntroStyles = {
    transform: isInViewTopElementIntro ? "none" : "translateY(-200px)",
    opacity: isInViewTopElementIntro ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
  }

  return (
    <>
      <div className=' relative'>
        <video className="rotate-180 w-screen absolute top -z-10 " style={{ height: "590px" }}  loop muted autoPlay src="/BLight.webm" ></video>
      </div>
      <div className="mt-40 flex justify-center items-center  lg:px-20 ">


        <div className="w-full  lg:w-1/2" style={leftIntroStyles} ref={IntroLeft} >
          <div className="pr-10 mt-16 flex justify-center items-center flex-col text-center lg:block lg:justify-start lg:flex-col lg:text-start  ">

            <span className='mb-0 border-2 p-2 rounded-full flex  max-[320px]:w-full w-72 items-center gap-2 shadow-i border-color ' ref={IntroTopElement} style={topElementIntroStyles}> <BsStars /> Joiner Full Stack Software Engineer</span>

            <h1 className='text-7xl font-bold ' >Providing <span className='gradient-color'> the best </span> Project experience</h1>
            <p className='text-lg font-bold text-gray-400 mt-4'>All the best and most modern resources at your fingertips. Access online Website, Mobile, Software, coding examples, tutorials and much more. All in one place</p>
            <Button variant="outline" className='text-lg px-7 shadow-in border-color font-bold mt-4'>Hire meh!!</Button>


          </div>
        </div>
        <div className=" w-1/2 hidden lg:flex  justify-center " style={rightIntroStyles} ref={IntroRight}>

          <Image src={'https://hyat-myat.vercel.app/mainIconsdark.svg'} alt='stack' width={800} height={200} style={{ width: '100%', height: '500px' }} />
        </div>
      </div>
    </>
  )
}
