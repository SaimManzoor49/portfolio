'use client'

import React, { useRef } from 'react'
import { useInView } from "framer-motion";
import { BsStars } from 'react-icons/bs';
import Technologies from './ui/Technologies';

export default function ExperiencesSMain_Section_2() {

  const IntroTopElement = useRef(null);


  const isInViewTopElementIntro = useInView(IntroTopElement, { once: true });


  const topElementIntroStyles = {
    transform: isInViewTopElementIntro ? "none" : "translateY(-200px)",
    opacity: isInViewTopElementIntro ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-52 relative">
        <span className='mb-0 border-2 p-2 rounded-full flex  max-[320px]:w-full w-72 items-center gap-2 shadow-i border-color -z-1 ' ref={IntroTopElement} style={topElementIntroStyles}> <BsStars /> Joiner Full Stack Software Engineer</span>

        <h1 className='text-5xl pl-1 text-center  sm:text-6xl font-bold my-4'>Think better with Next Js 13</h1>
        <div className="my-14">

          <q className='quote text-lg'>It&apos;s not a bug, it&apos;s an undocumented feature.</q>
          {/* <p className='text-right  max-[320px]:w-full  -mr-3 quote'>– Anonymous</p> */}
          <p className='text-right    -mr-0 sm:-mr-10   quote'>– Anonymous</p>
        </div>
        <div className="mb-14">

        <Technologies />
        </div>
        <video src="/cards-video.webm"   height={600} loop muted autoPlay   className='absolute top-1/3 -z-10 opacity-75 ' ></video>
      </div>
    </>
  )
}
