"use client";
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link';


const Appbar = () => {

    const [menu, setMenu] = useState(false);
    const [menuClass, setMenuClass] = useState("");

    const menuClick = () => {
        console.log(menu)
        if (menu) {
            setMenuClass("animate-menuclose")
        }
        else {
            setMenuClass("animate-menuopen")
        }
        setMenu(prev => !prev);
    }

    return (<nav>
        <div className='fixed z-20 w-[85svw] lg:w-[75svw] xl:w-[60svw] h-[7.5svh] px-5 py-1 bg-primary/10 top-5 left-[50%] transform-[translate(-50%)] flex justify-between items-center rounded-2xl border shadow-xl shadow-primary/10 backdrop-blur-2xl'>
            <Link href={"/"} className='text-2xl font-neon' >
                LGI Modz
            </Link>

            <div className="md:hidden">
                <Button onClick={menuClick}><Menu size={"25"} /></Button>
            </div>
            <div className='hidden md:flex'>
                <Link href={"/patches"}>
                    <Button className='w-full'>View Patches</Button>
                </Link>
            </div>
        </div>
        {/* Dummy */}
        <div className="w-screen h-[8svh]"></div>
        <div className={`fixed top-[-100%] left-0 w-screen min-h-[10%] bg-secondary rounded-b-3xl flex flex-col items-center py-5 z-[21] ${menuClass}`}>
            <div className="w-[80%]">
                <div className="flex justify-end">
                    <Button onClick={menuClick} className=''><X size={"25"} /></Button>
                </div>
                <div className="w-full my-2">
                    <Button className='w-full'>Order Now</Button>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Appbar