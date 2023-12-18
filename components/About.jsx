import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import about from '../public/assets/about.png'

const About = () => {
    return (
        <div>
            <section id='about' className="flex dark:bg-[rgb(16,22,37)] flex-col md:flex-row items-center w-full p-2 py-16" >
                <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                    <div className="col-span-2">
                        <span className="uppercase dark:text-[rgb(14,178,243)] text-[rgb(16,129,212)] tracking-widest text-xl font-thin">About</span>
                        <h2 className="font-bold py-4 dark:text-[rgb(14,178,243)]">Who I Am</h2><br />

                        <p className='dark:text-white'>// I am not your normal developer</p>
                        <p className="py-2 dark:text-white text-gray-600">I specialize in building mobile-responsive front-end UI applications that connect with APIs and other backend technologies. I&apos;m passionate about learning new technologies and understand that there is more than one way to accomplish a task. I am proficient in building full-stack applications using HTML, CSS, JavaScript, Node, and React. I am a quick learner and can pick up new tech stacks as needed. I believe that being a great developer involves not sticking to one specific language but choosing the best tool for the job.</p>
                        <p className="py-2 dark:text-white text-gray-600">I have spent the last 3 years in Information Technology as an IT Support Specialist, obtaining my certificate in CompTIA A+ and teaching myself how to program. I most recently acquired my CompTIA Security+ and am currently pursuing my CS degree while working full-time. I have always had a knack for technology, and this passion, coupled with the desire to understand how tech is created, is what inspired me to pursue a career in technology.</p>
                        {/*<p className="py-2 dark:text-white text-gray-600">In 2020 I started working with HTML & CSS, what I thought was just a hobby turned into a love for programming. Fascinated with how intricate programming could be I was quickly drawn to learn more. I started learning JavaScript and was even more amazed by being able to give simple web pages personality  through interactivity. Once I learned enough JavaScript I moved to learning the React framework and started freelancing for local businesses in my community.</p>*/}

                        <Link className="underline text-gray-600" href="/#projects">Check out some of my latest projects</Link>
                    </div>
                    {/*<div className=" dark:bg-white flex justify-center w-ful h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center p-4 hover:scale-105 transition duration-300 ease-in">*/}
                    {/*    <Image width={450} height={200} className="rounded-xl" src={about} alt='' />*/}
                    {/*</div>*/}
                </div>
            </section>
        </div>
    )
}

export default About