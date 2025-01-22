import Link from 'next/link'
import React from 'react'
import ProjectItem from './ProjectItem'
import songly from '../public/assets/projects/songly.png'
import stash from '../public/assets/projects/stash.png'
import reelflix from '../public/assets/projects/reelflix.png'
import infintech from '../public/assets/projects/infintech.png'


const Projects = () => {
    return (
        <div classnam="">
            <section id='projects' className=" flex flex-col md:max-w-[1240px] md:m-auto justify-center w-full dark:bg-[rgb(16,22,37)]  px-2 py-16">

                <span className="uppercase dark:text-[rgb(14,178,243)]  text-[rgb(16,129,212)] tracking-widest text-xl font-thin">Projects</span>
                <h2 className="font-bold py-4  dark:text-[rgb(14,178,243)]">What I&apos;ve Built</h2>
                <section className="flex flex-col items-center md:w-[1240px] md:m-auto gap-[40px] md:flex-row md:flex-wrap  justify-center w-full md:max-w-[1240px]">

                    <ProjectItem image={songly} title='Songly' tools='React, Tailwind, JavaScript' url='/songly' />
                    <ProjectItem image={reelflix} title='Reelflix' tools='Html, CSS, JavaScript' url='/reelflix' />
                    <ProjectItem image={stash} title='Stash' tools='React, Express, Node' url='/stash' />
                    <ProjectItem image={infintech} title='Infinite Tech' tools='Html, CSS, JavaScript' url='/infintech' />

                </section>
            </section>
        </div>
    )
}

export default Projects