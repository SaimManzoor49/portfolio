'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { AiOutlineFundProjectionScreen, AiOutlineMenu, AiOutlineProfile } from 'react-icons/ai'
interface ChildComp {
  handleComp: (val: string) => void;
}


// export default function AdminSidebar({handleComp}:React.FC<ChildComp>) {
export default function AdminSidebar({handleComp}:ChildComp) {
  const [toShow, setToShow] = useState('addproject')

  useEffect(()=>{
    handleComp(toShow)
  },[toShow])

  return (
    <>

      <div className="">

        <div className=" max-w-xs  flex flex-col bg-[#200a36aa] p-2 h-screen   bsolute top-0 left-0   ">
          <div className="flex items-center p-6 ps-0">
            <Image src='/logo.webp' alt='logo' width={30} height={30} className='logo' priority />
            <h6 className='text-slate-300 text-xl logo-name' >notFreak</h6>
          </div>
          <div className=" flex gap-2 flex-col">

            <Button className={`flex gap-2 shadow-in border-color rounded-none w-[210px] ${toShow === 'addproject' && 'border-4 border-cyan-700'}`} onClick={() => { setToShow('addproject') }} ><AiOutlineFundProjectionScreen size={'20px'} /> Add Project</Button>
            <Button className={`flex gap-2 shadow-in border-color rounded-none w-[210px] ${toShow === 'updateprofile' && 'border-4 border-cyan-700'}`} onClick={() => { setToShow('updateprofile') }} ><AiOutlineProfile size={'20px'} /> Update Profile</Button>
            <Button className={`flex gap-2 shadow-in border-color rounded-none w-[210px] ${toShow === 'addprojec' && 'border-4 border-cyan-700'}`} onClick={() => { setToShow('') }} ><AiOutlineFundProjectionScreen size={'20px'} /> Add Project</Button>
          </div>
        </div>
      </div>
    </>
  )
}
