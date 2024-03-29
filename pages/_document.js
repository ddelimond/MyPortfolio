import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
    return (
        <Html className='bg-[#ecf0f3] dark:bg-[rgb(16,22,37)]'>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
            </Head>
            <body className='bg-[#ecf0f3] dark:bg-[rgb(16,22,37)]'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
