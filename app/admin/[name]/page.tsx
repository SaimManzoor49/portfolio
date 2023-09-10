'use client'

import AddProject from '@/components/Dashboard/AddProject'
import AdminSidebar from '@/components/Dashboard/AdminSidebar'
import UpdateProfile from '@/components/Dashboard/UpdateProfile'
import React, { useState } from 'react'

export default function Page() {
  const [compToShow,setCompToShow]=useState('addproject')

  const  handleComp = (val:string)=>{
    setCompToShow(val)
  }

  console.log(compToShow)

  return (
    <>
    <div className="flex h-screen">

    <div className="">

    <AdminSidebar handleComp={handleComp} />
    </div>
    <div className="p-4 w-full ">
    <div className="bg-[#200a36aa] w-full h-full p-4">

    <h1 className='text-yellow-200 text-2xl'> myFunction: (str: string) void;</h1>

    {compToShow==='addproject'&& <AddProject/>}
    {compToShow==='updateprofile'&& <UpdateProfile/>}

    </div>
    </div>
    </div>
    </>
  )
}
