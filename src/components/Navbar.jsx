import React from 'react'

export default function Navbar() {
    return (
        <header className='flex items-center justify-between gap-4 py-7'>
            <a href="/" className="transform transition-transform duration-300 hover:scale-105">
                <h1 className='text-lg font-medium'>DEV .K</h1>
            </a>
            <div className='gap-10 flex items-center'>
                <a href='#home' className='text-sm text-slate-600 cursor-pointer  hover:text-primary hover:font-medium'>HOME</a>
                <a href='#group-projects' className='text-sm text-slate-600 cursor-pointer  hover:text-primary hover:font-medium'>PROJECTS</a>
                <a href='#connect' className='text-sm text-slate-600 cursor-pointer  hover:text-primary hover:font-medium'>CONTACT ME</a>
            </div>
        </header>
    )
}