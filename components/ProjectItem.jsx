import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({ image, title, tools, url }) => {
    return (
        <div class="">
            <div class="flex relative justify-center items-center w-full  h-auto shadow-lg shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[rgb(16,129,212)] to-[rgb(14,178,243)] ">
                <Image alt="project image" class="rounded-xl group-hover:opacity-30 w-full transition ease-in duration-200" src={image} />
                <div class="hidden group-hover:flex flex-col justify-center items-center absolute w-full h-full gap-y-6 transition ease-in duration-200">
                    <h3 class="text-white text-2xl tracking-wider">{title}</h3>
                    <span class="text-gray-200 ">{tools}</span>
                    <Link class="text-gray-00 bg-white p-4 rounded-lg font-bold" href={url}>More Info</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem