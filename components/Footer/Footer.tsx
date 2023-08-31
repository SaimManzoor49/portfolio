import Link from 'next/link'
import React from 'react'
import { BsDiscord, BsGithub, BsInstagram, BsLinkedin, BsMailbox, BsTwitter } from 'react-icons/bs'
import { MdOutlineEngineering } from 'react-icons/md'
import {  FcReading} from 'react-icons/fc'
import { RiMailAddFill } from 'react-icons/ri'

export default function Footer() {
  return (
    <>
    <div className="flex px-4 justify-between smxl:justify-around items-center  my-20 flex-wrap gap-4">

    <div className="">
        <h6 className='text-2xl font-bold' >Contacts</h6>
        <div className=" flex flex-col justify-between h-32 mt-6" >
            <Link href={''} className='flex items-center gap-3 text-lg' ><BsLinkedin /> LinkedIn</Link>
            <Link href={''} className='flex items-center gap-3 text-lg' ><BsGithub /> Github</Link>
            <Link href={''} className='flex items-center gap-3 text-lg' ><BsDiscord />Discord</Link>
        </div>
    </div>
    <div className="">
        <h6 className='text-2xl font-bold' >Social Media</h6>
        <div className=" flex flex-col justify-between h-32 mt-6" >
            <Link href={''} className='flex items-center gap-3 text-lg' ><BsInstagram /> Instagram</Link>
            <Link href={''} className='flex items-center gap-3 text-lg' ><BsTwitter /> Twitter</Link>
            <Link href={''} className='flex items-center gap-3 text-lg' ><BsDiscord />Discord</Link>
        </div>

    </div>
    <div className=" ">
        <h6 className='text-2xl font-bold' >About</h6>
        <div className=" flex flex-col justify-between h-32 mt-6 " >
            <p className='flex items-center gap-3 text-lg' ><MdOutlineEngineering />Software Engineer</p>
            <p className='flex items-center gap-3 text-lg' ><FcReading /> Learn About me</p>
            <Link href={''} className='flex items-center gap-3 text-lg' ><RiMailAddFill />saimmanzoor49@yahoo.com</Link>
        </div>

    </div>

    </div>
    <div className="flex flex-col justify-center items-center p-4 relative ">
        <p className=' absolute text-center font-bold logo-name '>&copy; Saim Manzoor {new Date().getFullYear()} Inc. All rights reserved.</p>
        {/* <video src="/footerBG.MOV" autoPlay loop muted   className='absolute z-10' ></video> */}
        <video src="/footerBG.MOV" autoPlay loop muted style={{maxWidth: '186px',
    maxHeight: '850px'}}  className=' hidden xsm:block absolute -z-10 footerBG left-[-14vw] top-[-95%] opacity-75 ' ></video>
    </div>
    </>
  )
}
