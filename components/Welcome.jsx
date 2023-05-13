import Link from 'next/link'
import React from 'react'
import {FaGithub, FaLinkedinIn,   } from "react-icons/fa";
import { AiOutlineMail} from "react-icons/ai";
import {BsFillPersonLinesFill   } from "react-icons/bs";



const Welcome = () => {
  return (
    <section id='tops' className='welcome w-full h-screen text-center' >
        <section className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <article>
                <p className=' tracking-widest uppercase text-gray-600'>LET'S BUILD THE UNTHINKABLE TOGETHER</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[rgb(16,129,212)] dark:text-[rgb(14,178,243)]'>Darren</span><br/> A FullStack Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'> I'm a fullstack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive applications new languages and frameworks.</p>
                <article className='social flex  max-w-[330px] m-auto items-center justify-center gap-x-5 mx-auto my-4 w-full sm:w-[80%]'>
                    <Link href='https://www.linkedin.com/in/darren-delimond-6b9297114/' className='text-[rgb(16,129,212)] dark:text-[rgb(14,178,243)] transition duration-500 hover:scale-[1.2] rounded-full shadow-lg shadow-gray-400 p-6'><FaLinkedinIn size={25} /></Link>
                    <Link href='https://github.com/ddelimond' className='text-[rgb(16,129,212)] dark:text-[rgb(14,178,243)] transition duration-500 hover:scale-[1.2] rounded-full shadow-lg shadow-gray-400 p-6'><FaGithub size={25} /></Link>
                    <Link href='#contact'className='text-[rgb(16,129,212)] dark:text-[rgb(14,178,243)] transition duration-500 hover:scale-[1.2] rounded-full shadow-lg shadow-gray-400 p-6'><AiOutlineMail size={25}  /></Link>
                    <Link href='https://www.linkedin.com/in/darren-delimond-6b9297114/'className='text-[rgb(16,129,212)] dark:text-[rgb(14,178,243)] transition duration-500 hover:scale-[1.2] rounded-full shadow-lg shadow-gray-400 p-6'><BsFillPersonLinesFill size={25}  /></Link>                   
                </article>
            </article>
        </section>
    </section>
  )
}

export default Welcome