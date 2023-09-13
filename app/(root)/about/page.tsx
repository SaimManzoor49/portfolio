import Link from 'next/link'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

export default function Page() {
    return (
        <>
            <div className="mt-24 py-4 px-4 sm:px- md:px-8">
                <Link href={'/'} className='flex items-center fixed gap-1' ><BiArrowBack size={'24px'} /> Back</Link>
                <div className="p-1 md:px-20 mt-6">
                    <h1 className='text-4xl font-bold'>Hey ☘️, I&apos;m Saim Manzoor</h1>
                    <p className='text-gray-300 mt-2'>I began my programming journey with C++ and later transitioned to web development as I explored the world of technology. The field of web development captivated me with its endless opportunities for creativity and innovation in crafting online experiences during my late teens.
                    </p>
                    <p className='text-lg mt-4 '>
                        I am currently pursuing a <span className='text-green-300'>Bachelor of Science in Software Engineering.</span> In addition to my formal education, I actively supplement my studies by learning from various online resources, including <span className='text-yellow-300'>YouTube</span>. This <span className='text-yellow-300'>self-directed learning approach</span> allows me to explore a wide range of topics and stay up-to-date with the latest developments in the field.
                    </p>
                    <h1 className='text-4xl font-bold mt-4'>Development Experience ⏳</h1>
                    <p className='mt-2 text-gray-300'>
                        I&apos;m a skilled web app developer with experience in <span className='text-blue-400'>TypeScript</span> and<span className='text-yellow-500'> JavaScript</span>, and expertise in frameworks like<span className='text-blue-600'>React</span>, <span className='text-green-400'>NodeJs</span>, and <span className='text-red-600'>NextJs</span>. I&apos;m a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. <Link href={'/contact'} className='text-blue-400 underline font-bold'>Let&apos;s work</Link> together to bring your ideas to life!
                    </p>
                    <h1 className='text-4xl font-bold mt-4'>Tech Stack ⚙️</h1>
                    <p className='mt-4'>I currently have over 1.5 Years experience With html, css, Javascript, , TypeScript, Next js 13 Tailwind css, chakra-ui, bootstrap, antD, shadcn-ui,  context api, Payment Stripe, socket-io, Node js , Express js, Mongodb , FireBase , FireStore , Basic Skill with Prisma ORM, Webhooks , Jwt authentication and much more!!!</p>

                    <p className='mt-6 font-bold'>Take a look at a few of my <Link href={'/#projects'} className='text-blue-400 underline'>Projects.</Link></p>




                </div>
            </div>

        </>
    )
}
