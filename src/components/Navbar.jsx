import React from 'react'

export default function Navbar() {
    return (
        <header className='flex items-center justify-between gap-4 py-7'>
            <a href="/"><h1 className='text-lg font-medium'>DEV <span className='text-primary bold'>.K</span></h1></a>
            <div className='gap-10 flex items-center'>
                <a href='#home' className='text-sm text-slate-600 cursor-pointer  hover:text-primary hover:font-medium'>HOME</a>
                <a href='#group-projects' className='text-sm text-slate-600 cursor-pointer  hover:text-primary hover:font-medium'>GROUP PROJECTS</a>
                <a href='#personal-projects' className='text-sm text-slate-600 cursor-pointer  hover:text-primary hover:font-medium'>PERSONAL PROJECTS</a>
            </div>
        </header>
    )
}