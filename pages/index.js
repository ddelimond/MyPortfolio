import Head from 'next/head'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Link from 'next/link'



const index = () => {
  return (
    <div className='relative'>
      <Head>
        <title>Darren | Fullstack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/public/assets/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/public/assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/public/assets/favicon-16x16.png" />
        <link rel="manifest" href="/public/assets/site.webmanifest" />
        <link rel="mask-icon" href="/public/assets/safari-pinned-tab.svg" color="#17748f" />
        <link rel="shortcut icon" href="/public/assets/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/public/assets/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Welcome/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default index
