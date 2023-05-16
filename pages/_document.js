import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect, useState } from "react";

export default function Document() {

    // stored variable is intially null
    const [stored, setStored] = useState('Light')

    // once DOM is loaded the stored variable is set to the theme value stored in local storage
    // if nothing is stored in local storage the variable is set to null

    useEffect(
        () => {
            if (localStorage.getItem('theme') !== null) {
                setStored(localStorage.getItem('theme'))
            } else {
                localStorage.setItem('theme', 'Light')
            }
        }, []);


    // mode stores the value returned from stored once the DOM is loaded
    const [mode, setMode] = useState(stored);
    useEffect(()=>{
setMode(stored)
    },)

    console.log(stored)


    return (
        <Html className='bg-[#ecf0f3] dark:bg-[rgb(16,22,37)]'>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
    