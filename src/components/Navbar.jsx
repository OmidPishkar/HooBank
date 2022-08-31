import React , { useState } from 'react'

import {close , logo , menu} from '../assets'

import {navLinks} from '../constants'

const Navbar = () => {
    const [toggle , setToggle] = useState(false)

    return (
        <div className='w-full flex py-6 justify-between items-center navbar'>
            <img
                src={logo}
                alt='logo'
                className='w-[124px] h-[32px]' 
            />

            <ul className='list-none sm:flex hidden justify-end items-center flex-1 gap-10'>
                {navLinks.map( (nav) => {
                    return (
                        <li key={nav.id}
                            className='font-poppins font-normla cursor-pointer text-[16px] text-white'
                        >
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    )
                })}
            </ul>

            <div className='sm:hidden flex justify-end items-center flex-1'>
                <img src={toggle ? close : menu}
                    alt='menu'
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle( prev => !prev)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'}
                sm:hidden p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    
                    <ul className='list-none flex flex-col justify-end items-center flex-1 gap-3'>
                        {navLinks.map( (nav , index) => {
                            return (
                                <li key={nav.id}
                                    className='font-poppins font-normla cursor-pointer text-[16px] text-white'
                                >
                                    <a href={`#${nav.id}`}>
                                        {nav.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar