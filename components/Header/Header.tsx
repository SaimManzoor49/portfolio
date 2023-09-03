import Image from 'next/image'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { BsFillInfoSquareFill, BsInfoSquare } from 'react-icons/bs'
import { FaSquarePhone } from 'react-icons/fa6'
import { MdOutlineSegment, MdContactPhone } from 'react-icons/md'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { AiOutlineHome } from 'react-icons/ai'
import { PiProjectorScreenChartBold } from 'react-icons/pi'
import { ImBooks } from 'react-icons/im'



export default function Header() {
    return (
        <>
        <div className="header z-40">

            <div className="flex items-center  justify-around  py-3   ">
                <div className="flex items-center">
                    <Image src='/logo.webp' alt='logo' width={30} height={30} className='logo' priority />
                    <h6 className='text-slate-300 text-xl logo-name' >notFreak</h6>
                </div>
                <div className=" text-white hidden md:flex justify-around items-center border-2 border-blue-950 rounded-full py-2 mid-nav-items " style={{ width: '42vw' }}>
                    <p className='text-sm'>Home</p>
                    <p className='text-sm'>Project</p>
                    <p className='text-sm'>Resources</p>
                    <DropdownMenu >
                        <DropdownMenuTrigger className='flex items-center'>More <RiArrowDropDownLine size={'24px'} /></DropdownMenuTrigger>

                        <DropdownMenuContent  className='py-3'>
                            <DropdownMenuItem><BsFillInfoSquareFill className='me-3 text-blue-400' size={'18px'} /> About</DropdownMenuItem>
                            <DropdownMenuItem> <FaSquarePhone className='me-2 text-blue-400' size={'21px'} />Contact</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="flex items-center">
                    <div className="md:hidden">
                        <Sheet  >
                            <SheetTrigger className='me-2 mt-1' ><MdOutlineSegment size={'30px'} /></SheetTrigger>
                            <SheetContent side={'left'} className="w-[260px] sm:w-[500px] md:hidden" >
                                <SheetHeader>
                                    <SheetTitle className='flex items-center' >
                                        <Image priority src='/logo.webp' alt='logo' width={30} height={30} className='logo' />
                                        <p className='text-slate-300 text-xl logo-name ms-1' >notFreak</p></SheetTitle>
                                    <SheetDescription className='gap-2 flex flex-col'>

                                        <Button variant="outline" className='auth-button w-full'><AiOutlineHome size={18} className='me-2' /> Home</Button>
                                        <Button variant="outline" className='auth-button w-full' > <BsInfoSquare size={18} className='me-2' />About</Button>
                                        <Button variant="outline" className='auth-button w-full' > <MdContactPhone size={18} className='me-2' />Contact</Button>
                                        <Button variant="outline" className='auth-button w-full' > <PiProjectorScreenChartBold size={18} className='me-2' />Projects</Button>
                                        <Button variant="outline" className='auth-button w-full' > <ImBooks size={18} className='me-2 ' />Resources</Button>

                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <Button variant="outline" className='shadow-in border-color'>Sign In</Button>
                </div>
            </div>
        </div>
        </>
        // warning app-index.js:31 Warning: Extra attributes from the server: class,style at html
    )
}
