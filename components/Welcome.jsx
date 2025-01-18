import Link from 'next/link'
import React from 'react'
import { FaFileDownload, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";



const Welcome = () => {
  return (
    <section id='tops' className='welcome w-full dark:bg-[rgb(16,22,37)] h-screen text-center'>
      <section className=' max-w-[1240px] w-full h-full mx-auto p-2  flex justify-center items-center'>
        <article>
          <p className=' tracking-widest uppercase dark:text-white text-gray-600'>LET&apos;S BUILD THE UNTHINKABLE TOGETHER</p>
          <h1 className='py-4 dark:text-white text-gray-700'>Hi, I&apos;m <span className='text-[rgb(16,129,212)] dark:text-[rgb(14,178,243)]'>Darren</span><br /> A FullStack Web Developer</h1>
          <p className='py-4 dark:text-white text-gray-600 max-w-[70%] m-auto'> I&apos;m a fullstack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on building responsive applications new languages and frameworks.</p>
          <article className='social flex  max-w-[330px] m-auto items-center justify-center gap-x-5 mx-auto my-4 w-full sm:w-[80%]'>
            <Link target='_blank' href='https://www.linkedin.com/in/darren-delimond-6b9297114/' className='text-[rgb(16,129,212)] dark:text-[rgb(14,178,243)] transition duration-500 hover:scale-[1.2] rounded-full shadow-lg shadow-gray-400 p-6'><FaLinkedinIn size={25} /></Link>
            <Link target='_blank' href='https://github.com/ddelimond' className='text-[rgb(16,129,212)] dark:text-[rgb(14,178,243)] transition duration-500 hover:scale-[1.2] rounded-full shadow-lg shadow-gray-400 p-6'><FaGithub size={25} /></Link>
            <Link target='_blank' href='mailto:ddelimo@wgu.edu' onClick={()=>{alert('Please email me to get a copy of my resume')}} className='text-[rgb(16,129,212)] dark:text-[rgb(14,178,243)] transition duration-500 hover:scale-[1.2] rounded-full shadow-lg shadow-gray-400 p-6' download="Darren Delimond's Resume"><FaFileDownload size={25} /></Link>
            <Link target='_blank' href='https://twitter.com/D2theDev' className='text-[rgb(16,129,212)] dark:text-[rgb(14,178,243)] transition duration-500 hover:scale-[1.2] rounded-full shadow-lg shadow-gray-400 p-6'><FaTwitter size={25} /></Link>

          </article>
        </article>
      </section>
    </section>
  )
}

export default Welcome