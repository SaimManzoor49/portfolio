import Image from 'next/image'
import React from 'react'
import { color } from '@/lib/constants'
import Link from 'next/link'
interface Props {
    title: string,
    image: string,
    about: string,
    tech: string[],
    id:string

}

export default function ProjectCardLg({
    title,
    image,
    about,
    tech,
    id,
}: Props) {
    return (
        <section className='bg-[#0e082e] rounded-xl border border-slate-700 w-[32%]  p-4' >
            <Link href={`project/${id}`} >
            <div className="w-full h-auto">
                <Image src={image} alt={title} width={1800} height={1800}  />
            </div>
            <div className="p-4">
                <h1 className='text-xl font-bold'>{title}</h1>
                <p className='text-gray-400 truncate'>{about}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                    {tech.map((t, i) => (<span key={i} className={`p-1 rounded-sm`} style={{ backgroundColor: color[i] }} >{t}</span>))}
                </div>

            </div>
        </Link>
        </section>
    )
}
