'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import { Project } from '@/lib/constants'
import Image from 'next/image'
export default function page() {

  const { id } = useParams()

  const data = Project.find((p) => (p.id === id))

  return (
    <>
      {
        data &&
        <div className="mt-24 p-2">

          <div className="p-1 md:px-32">
            <h1 className='text-2xl font-bold'>{data?.title}</h1>
            <div className="w-full h-auto my-3">
              <Image className='' src={'/Screenshot 2023-09-03 084136.png'} alt={data.id} width={1800} height={1800}  />
            </div>
            <div className="flex flex-col gap-3">

            <h1 className='text-2xl font-bold'>Hello ❤️</h1>
            <p className='text-gray-400'>{data.blog}</p>
            <h1 className='text-2xl font-bold'>Technology & Feature ⚙️</h1>
            <ul className='ms-5' style={{listStyleType:"circle"}}>
            {data.technology_feature.map((t,i)=>(
              <li key={i} >{t}</li>              
              ))}
              </ul>
              <h1 className='text-2xl font-bold'>About this app 🆎</h1>
              <p className='text-gray-200'>{data.about_this_app}</p>
              <h1 className='text-2xl font-bold'>Dependencies 🏬</h1>
              <p className='text-gray-200'>{data.dependencies_blog}</p>

                <div className="bg-[#0c0728] p-4 border rounded-md">

                  <ul>
                    {data.package.map((p)=>(
                      <li key={p} className='hover:bg-[#34314c] p-2' >{p}</li>
                    ))}
                  </ul>

                </div>

              </div>
          </div>
        </div>
      }
    </>
  )
}
