import Image from 'next/image'
import React from 'react'
interface props{
skill:{
    skill_name: string,
    Image: string,
    width: number,
    hight: number,
}
index: number
}


export default function SkillLogo({skill,index}:props) {
  return (
    <>
        <div className='h-auto' style={{ width:'80px'}}>
            <Image src={skill.Image} alt={skill.skill_name} height={skill.hight} width={skill.width} priority />
            {/* <Image src={skill.Image} alt={skill.skill_name}  width={skill.width} /> */}
        </div>
    
    </>
  )
}
