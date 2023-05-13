import Image from 'next/image'
import React from 'react'

const Skills = () => {
    return (
        <div id='skills' className="w-full lg:h-screen p-2">
            <section className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <span className="uppercase dark:text-[rgb(14,178,243)] text-[rgb(16,129,212)] tracking-widest text-xl font-thin">Skills</span>
                <h2 className="font-bold py-4 dark:text-[rgb(14,178,243)]">What I Can Do</h2><br />
                <section className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">


                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/html.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">html</h3>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/css.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">css</h3>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/javascript.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">javascript</h3>
                            </div>
                        </div>
                    </div>


                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/tailwind.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">tailwind</h3>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/ scss.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">scss</h3>
                            </div>
                        </div>
                    </div>


                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/mongo.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">mongodb</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/express.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">express</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/react.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">react</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/node.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">node</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/python.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">python</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/mysql.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">mysql</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/django.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">django</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/github.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">github</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/postman.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">postman</h3>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/stackoverflow.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">stackoverflow</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/google.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">google</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/netlify.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">netlify</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/vercel.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">vercel</h3>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-xl shadow-gray-400 p-4 flex justify-center cursor-pointer transition duration-500 ease-in hover:scale-105">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/skills/nextjs.png' alt='' width="64" height="64" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="font-bold uppercase dark:text-[rgb(14,178,243)]">nextjs</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div >
    )
}

export default Skills