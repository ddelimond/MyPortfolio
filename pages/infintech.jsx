import React from 'react'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import infintechImg from '../public/assets/projects/infintech.png'


const infintech = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={infintechImg}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Infintech App</h2>
                    <h3>HTML / CSS / Javascript</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        I built this application in Javascript and it is hosted on Netlify.
                        This app features a functional slideshow created with jQuery, form, and  mock blog article. 
                        The application is meant to serve as a sample site for a tech company
                        It features a dropping and ascending navbar and a featured selection.
                    </p>

                    <a
                        href='https://github.com/ddelimond/Infintech'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>View Code</button>
                    </a>
                    
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> HTML
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> CSS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Javascript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Netlify
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    );
};

export default infintech