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
            <section id='projects' className=" w-full dark:bg-[rgb(16,22,37)]  px-2 py-16">
                <span className="uppercase dark:text-[rgb(14,178,243)] text-[rgb(16,129,212)] tracking-widest text-xl font-thin">Projects</span>
                <h2 className="font-bold py-4 dark:text-[rgb(14,178,243)]">What I've Built</h2>
                <section className="grid md:grid-cols-2 gap-8">
                    <ProjectItem image={songly} title='Songly' tools='React, Express, Node' url='/songly' />
                    <ProjectItem image={reelflix} title='Reelflix' tools='Html, Css, JavaScript' url='/reelflix' />
                    <ProjectItem image={infintech} title='Infintech' tools='Html, Css, JavaScript' url='/infintech' />
                    <ProjectItem image={stash} title='Stash' tools='React, Express, Node' url='/stash' />
                </section>
            </section>
        </div>
    )
}

export default Projects