import React from 'react'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import stashImg from '../public/assets/projects/stash.png'


const stash = () => {

    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={stashImg}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Stash App</h2>
                    <h3>React / Tailwind / Javascript / Node</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        This is a Online Ecommerce site that allows users to browse products, register, login, and checkout, users can also filter products by size and color. The application was built using Vite, Redux, Stripe, Mongo Db, Express, React, Node, Material UI an a few other tech such as styled components and Tailwind CSS. Please feel free to play with the application, sign up, login and check out! Not all sections of the application are clickable or have functions due to time constraints.Please keep this in mind when trying to make an update in the shopping cart or search for products.

                        Testing Visa Checkout To test your integration against Visa Checkout’s sandbox, create a new Visa Checkout user account during the checkout process on your website. Configure the account to use the test card number 4242 4242 4242 4242, a random three-digit CVC number, and any expiration date in the future. Complete the checkout process as normal. If everything worked correctly, You should make it to the Thank you screen.
                    </p>

                    <h3>Please give the application products about 30 seconds to load,
                        the site&apos;s API has been deployed using the free tier option on Render.com, which shuts down the server due to inactivity.</h3>

                    <a
                        href='https://github.com/ddelimond/Stash-v2'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                    <a
                        href='https://stashv2.netlify.app'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4'>Demo</button>
                    </a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Tailwind
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Javascript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Express
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Node
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> MongoDb
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


export default stash