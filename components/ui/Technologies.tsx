'use client'

import React from 'react'
import { Skill_data, Frontend_skill, Backend_skill, Full_stack, Other_skill, Other_skill2, Other_skill3 } from '../../lib/constants'
import SkillLogo from './SkillLogo'
import { useRef } from "react";
import { useInView } from "framer-motion";



export default function Technologies() {
  const smallRef = useRef(null);
  const largeRef = useRef(null);
  const isInViewSmall = useInView(smallRef, { once: true });
  const isInViewLarge = useInView(largeRef, { once: true });

  const logoStylesSmall = {
    opacity: isInViewSmall ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  }
  const logoStylesLarge = {
    opacity: isInViewLarge ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  }

  return (
    <>


      <div className="flex items-center flex-wrap  xl:hidden mb-10">

        <div className=" flex justify-center flex-wrap items-center gap-8 ">
          {Skill_data.map((s, i) => (
            <div ref={smallRef} key={i} style={{ ...logoStylesSmall, transitionDelay: `${i * 0.4}s`  } } className='transform-none' >
              <SkillLogo skill={s} index={i} />
            </div>))}
        </div>

      </div>



      <div className="flex-col justify-center items-center hidden xl:flex ">
        <div className="">


          <div className=" flex justify-center items-center gap-8">
            {Frontend_skill.map((s, i) => (
              <div ref={largeRef} key={i} style={{ ...logoStylesLarge, transitionDelay: `${i * 0.5}s` }}>
                <SkillLogo skill={s} index={i} />
              </div>))}
          </div>
          <div className=" flex justify-center items-center my-4 gap-14">
            {Backend_skill.map((s, i) => (
              <span ref={largeRef} key={i} style={{ ...logoStylesLarge, transitionDelay: `${i * 0.5}s` }}>
                <SkillLogo skill={s} index={i} />
              </span>))}
          </div>
          <div className=" flex justify-center items-center my-4 gap-16">
            {Full_stack.map((s, i) => (
              <span ref={largeRef} key={i} style={{ ...logoStylesLarge, transitionDelay: `${i * 0.5}s` }}>
                <SkillLogo skill={s} index={i} />
              </span>))}
          </div>
          <div className=" flex justify-center items-center my-4 gap-20">
            {Other_skill.map((s, i) => (
              <span ref={largeRef} key={i} style={{ ...logoStylesLarge, transitionDelay: `${i * 0.5}s` }}>
                <SkillLogo skill={s} index={i} />
              </span>))}
          </div>
          <div className=" flex justify-center items-center my-4 gap-24">
            {Other_skill2.map((s, i) => (
              <span ref={largeRef} key={i} style={{ ...logoStylesLarge, transitionDelay: `${i * 0.5}s` }}>
                <SkillLogo skill={s} index={i} />
              </span>))}
          </div>
          <div className=" flex justify-center items-center my-4 gap-38">
            {Other_skill3.map((s, i) => (
              <span ref={largeRef} key={i} style={{ ...logoStylesLarge, transitionDelay: `${i * 0.5}s` }}>
                <SkillLogo skill={s} index={i} />
              </span>))}
          </div>

        </div>
      </div>


    </>
  )
}
