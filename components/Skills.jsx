import Image from 'next/image'
import React from 'react'
import html from '../public/assets/skills/html.png'
import css from '../public/assets/skills/css.png'
import javascript from '../public/assets/skills/javascript.png'
import express from '../public/assets/skills/express.png'
import react from '../public/assets/skills/react.png'
import node from '../public/assets/skills/node.png'
import git from '../public/assets/skills/git.png'
import gpt from '../public/assets/skills/gpt.png'
import vercel from '../public/assets/skills/vercel.png'
import nextjs from '../public/assets/skills/nextjs.png'
import netlify from '../public/assets/skills/netlify.png'
import mysql from '../public/assets/skills/mysql.png'
import mongo from '../public/assets/skills/mongo.png'

const Skills = () => {
    return (
        <div id='skills' className="w-full dark:bg-[rgb(16,22,37)]  lg:h-screen pt-[100px] p-2">
            <section className=" max-w-[1240px]  mx-auto flex flex-col justify-center h-full">
                <span className="uppercase dark:text-[rgb(14,178,243)] text-[rgb(16,129,212)] tracking-widest text-xl font-thin">Skills</span>
                <h2 className="font-bold py-4 dark:text-[rgb(14,178,243)]">What I Can Do</h2><br />
                <section className="md:grid md:grid-cols-2 lg:grid-cols-4 flex flex-col w-[90%] m-auto justify-center gap-y-4 md:gap-8">

                    <div className="rounded-lg dark:bg-[white]  shadow-md shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={html} alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">html</h3>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg dark:bg-[white] shadow-md shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={css} alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">css</h3>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg dark:bg-[white] shadow-md shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={javascript} alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">javascript</h3>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg dark:bg-[white] shadow-md shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={mongo} alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">mongodb</h3>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg dark:bg-[white] shadow-md shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={mysql} alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">mysql</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg dark:bg-[white] shadow-md shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={git} alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">git</h3>
                            </div>
                        </div>
                    </div>
                    {/*<div className="rounded-lg dark:bg-[white] shadow-md shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">*/}
                    {/*    <div className="grid grid-cols-2 gap-4 justify-center items-center">*/}
                    {/*        <div className="m-auto">*/}
                    {/*            <Image src={gpt} alt='' width="64" height="64" />*/}
                    {/*        </div>*/}
                    {/*        <div className="flex flex-col justify-center items-center">*/}
                    {/*            <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">chat gpt</h3>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </section>
            </section>
        </div >
    )
}

export default Skills