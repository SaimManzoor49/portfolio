import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectCardLg from './ProjectCardLg'
import { Project } from '@/lib/constants'
export default function Main_Section_4() {


  return (
    <>
    <div className=" xl:hidden flex flex-col gap-4 items-center justify-center my-20 p-4 md:px-32 ">
{Project.map((proj)=>(
    <ProjectCard key={proj.id} image={'/Screenshot 2023-09-03 084136.png'} title={proj.title} about={proj.about_this_app} tech={proj.technology_feature} id={proj.id} />
))}
    </div>
    <div className=" hidden xl:flex flex-wrap gap-4 items-cente my-20 p-4 md:px-20  ">
{Project.map((proj)=>(
    <ProjectCardLg key={proj.id} image={'/Screenshot 2023-09-03 084136.png'} title={proj.title} about={proj.about_this_app} tech={proj.technology_feature} id={proj.id} />
))}
    </div>
    </>


  )
}
