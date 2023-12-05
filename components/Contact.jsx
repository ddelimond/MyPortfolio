import React from 'react'
import contact from '../public/assets/contact.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
    return (
        <div id='contact' className='dark:bg-[rgb(16,22,37)]  w-full lg:h-full p-2 ' >
            <section className=' max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <span className='uppercase dark:text-[rgb(14,178,243)] text-[rgb(16,129,212)] tracking-widest text-xl font-thin'>Contact</span>
                <h2 className='font-bold py-4 dark:text-[rgb(14,178,243)]'>Get In Touch</h2>
                <br />
                <section className='grid sm:grid-cols-3 lg:grid-cols-5  gap-20 lgss:gap-8'>
                    <section className='dark:bg-[white] h-full w-full shadow-xl shadow-gray-400 rounded-xl col-span-3 lg:col-span-2 p-4'>
                        <section className='lg:p-4 h-full '>
                            <div>
                                <Image src={contact} className='rounded-lg hover:scale-105 ease-in duration-300' alt="contact image" />
                            </div>
                            <div>
                                <h2 className='py-2'>Darrren Delimond</h2>
                                <p className='py-2'> Fullstack Web Developer</p>
                                <p>I am available for freelance or full-time positions. Contact me and let&apos;s talk</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect with me</p>
                            </div>
                            <div className='social flex  items-center justify-between mx-auto text-[rgb(16,129,212)] dark:text-[rgb(14,178,243)] my-4 w-full sm:w-[80%]'>
                                <Link target='_blank' href='https://www.linkedin.com/in/darren-delimond-6b9297114/' className='text-[rgb(16,129,212)] dark:text-[rgb(14,178,243)] transition duration-500 hover:scale-[1.2] rounded-full shadow-lg shadow-gray-400 p-4'><FaLinkedinIn size={25} /></Link>
                                <Link target='_blank' href='https://github.com/ddelimond' className=' text-[rgb(16,129,212)] dark:text-[rgb(14,178,243)] transition duration-500 hover:scale-[1.2] rounded-full shadow-lg shadow-gray-400 p-4'><FaGithub size={25} /></Link>
                                <Link target='_blank' href='mailto:darrendelimond@yahoo.com' className='text-[rgb(16,129,212)] dark:text-[rgb(14,178,243)] transition duration-500 hover:scale-[1.2] rounded-full shadow-lg shadow-gray-400 p-4'><AiOutlineMail size={25} /></Link>
                                <Link target='_blank' href='https://twitter.com/D2theDev' className='text-[rgb(16,129,212)] dark:text-[rgb(14,178,243)] transition duration-500 hover:scale-[1.2] rounded-full shadow-lg shadow-gray-400 p-4'><FaTwitter size={25} /></Link>
                            </div>
                        </section>
                    </section>


                    <section className='dark:bg-[#ecf0f3] col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300'
                                            type='text'
                                            name='name'
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>
                                            Phone Number
                                        </label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300'
                                            type='text'
                                            name='phone'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='email'
                                        name='email'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='text'
                                        name='subject'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea
                                        className='border-2 rounded-lg p-3 border-gray-300'
                                        rows='10'
                                        name='message'
                                    ></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </section>
                </section>

                <div className='flex justify-center py-12'>
                    <Link href='/#top'>
                        <div className='dark:bg-[white] rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp
                                className='text-[#5651e5]'
                                size={30}
                            />
                        </div>
                    </Link>
                </div>

            </section>
        </div>
    )
}

export default Contact