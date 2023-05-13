import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu,AiOutlineMail,AiOutlineClose } from "react-icons/ai";
import {FaGithub, FaLinkedinIn,   } from "react-icons/fa";
import {BsFillPersonLinesFill   } from "react-icons/bs";


const Navbar = () => {
 
    const [closeMenu, setCloseMenu] = useState(false) 
    const handleClose = () => {setCloseMenu(true)}
    const handleOpen = () => {setCloseMenu(false)}

    

    return (
        <div id='top' className='fixed w-full h-20  shadow-gray-400  shadow-xl z-[1000] bg-[#ecf0f3]'>
            <nav className='flex justify-between items-center w-full h-full p-2 2xl:px-16 text-[#101625]'>
                <section className='leftSide flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                    <Link href='/'>
                        <Image src='/../public/assets/Logo.png' alt='Site Logo' width='124' height='50'/>
                    </Link>
                </section>
                <section className='rightSide relative '>
                    <ul className='hidden md:flex justify-between w-full'>
                        <Link href='/'><li className='transform ml-10 transition duration-500 hover:scale-[1.2] hover:text-[rgb(16,129,212)] dark:hover:text-[rgb(14,178,243)]'>Home</li></Link>
                        <Link href='#about'><li className='transform ml-10 transition duration-500 hover:scale-[1.2] hover:text-[rgb(16,129,212)] dark:hover:text-[rgb(14,178,243)]'>About</li></Link>
                        <Link href='#skills'><li className='transform ml-10 transition duration-500 hover:scale-[1.2] hover:text-[rgb(16,129,212)] dark:hover:text-[rgb(14,178,243)]'>Skills</li></Link>
                        <Link href='#projects'><li className='transform ml-10 transition duration-500 hover:scale-[1.2] hover:text-[rgb(16,129,212)] dark:hover:text-[rgb(14,178,243)]'>Projects</li></Link>
                        <Link href='#contact'><li className='transform ml-10 transition duration-500 hover:scale-[1.2] hover:text-[rgb(16,129,212)] dark:hover:text-[rgb(14,178,243)]'>Contact</li></Link>
                    </ul>
                    <section className='mobileMenu cursor-pointer md:hidden'>
                        <AiOutlineMenu size={25} onClick={handleOpen}/>
                    </section>
                </section>
                <section className={closeMenu?'':'md:hidden menuOverlay fixed left-0 top-0 w-full h-screen bg-black/70'}>
                <article className={closeMenu? 'menu fixed left-[-100%] top-0 p-10 ease-in duration-500':'menu  fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  bg-[#ecf0f3] p-10 ease-in duration-500'}>
                        <section className='flex w-full items-center justify-between'>
                            <Image src='/../public/assets/Logo.png' alt='Site Logo' width='87' height='35'/>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 transition duration-500 ease-in hover:scale-[1.2] cursor-pointer'>
                                <AiOutlineClose onClick={handleClose} size={25}/>
                            </div>
                        </section>
                        <article className='border-b border-gray-300 my-4 '>
                            <p className='w-[85%] md:w-[90%]  py-4'>Let's build the unthinkable together</p>
                        </article>
                        <section className='flex flex-col PY-4'>
                            <ul className='uppercase'>
                                <Link href='/'><li className=' w-[20%] transform text-sm py-4 transition duration-500 hover:scale-[1.2] '>HOME</li></Link>
                                <Link href='#about'><li className='w-[20%] transform text-sm py-4 transition duration-500 hover:scale-[1.2]'>ABOUT</li></Link>
                                <Link href='#skills'><li className=' w-[20%] transform text-sm py-4 transition duration-500 hover:scale-[1.2]'>SKILLS</li></Link>
                                <Link href='#projects'><li className='w-[20%] transform text-sm py-4 transition duration-500 hover:scale-[1.2]'>PROJECTS</li></Link>
                                <Link href='#contact'><li className='w-[20%] transform text-sm py-4 transition duration-500 hover:scale-[1.2]'>CONTACT</li></Link>
                            </ul> 
                            <article className='pt-40'>
                                <p className='tracking-widest uppercase text-[rgb(16,129,212)] dark:text-[rgb(14,178,243)]'>Let's Connect</p>
                                <article className='social flex  items-center justify-between my-4 w-full sm:w-[80%]'>
                                    <Link href='https://www.linkedin.com/in/darren-delimond-6b9297114/' className='transition duration-500 hover:scale-[1.2] rounded-full shadow-lg shadow-gray-400 p-4'><FaLinkedinIn size={25} /></Link>
                                    <Link href='https://github.com/ddelimond' className='transition duration-500 hover:scale-[1.2] rounded-full shadow-lg shadow-gray-400 p-4'><FaGithub size={25} /></Link>
                                    <Link href='#contact'className='transition duration-500 hover:scale-[1.2] rounded-full shadow-lg shadow-gray-400 p-4'><AiOutlineMail size={25}  /></Link>
                                    <Link href='https://www.linkedin.com/in/darren-delimond-6b9297114/'className='transition duration-500 hover:scale-[1.2] rounded-full shadow-lg shadow-gray-400 p-4'><BsFillPersonLinesFill size={25}  /></Link>
                                </article>
                            </article>
                        </section>
                    </article>
                </section>

            </nav>
        </div>
    )
}

export default Navbar