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
            <section id='projects' className=" flex flex-col justify-center w-full dark:bg-[rgb(16,22,37)]  px-2 py-16">
                {/* display: flex;
                flex-direction: column;
                justify-content: center;
                */}
                <span className="uppercase dark:text-[rgb(14,178,243)] text-[rgb(16,129,212)] tracking-widest text-xl font-thin">Projects</span>
                <h2 className="font-bold py-4 dark:text-[rgb(14,178,243)]">What I&apos;ve Built</h2>
                <section className="flex flex-warp justify-center max-w-[1240px]">

                    {/* display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin: auto;
                    max-width: 1240px; */}
                    <ProjectItem image={songly} title='Songly' tools='React, Express, Node' url='/songly' />
                    {/* small = width: 80% */}
                    {/* med =  min-width: 40%;
                    max-width: 80%; */}
                    <ProjectItem image={reelflix} title='Reelflix' tools='Html, Css, JavaScript' url='/reelflix' />
                    <ProjectItem image={infintech} title='Infintech' tools='Html, Css, JavaScript' url='/infintech' />
                    <ProjectItem image={stash} title='Stash' tools='React, Express, Node' url='/stash' />
                </section>
            </section>
        </div>
    )
}

export default Projects