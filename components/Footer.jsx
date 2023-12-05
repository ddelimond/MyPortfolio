import React from 'react'
import moment from 'moment'

const Footer = () => {
    let year = moment().format('YYYY')
    return (
        <footer className="w-full h-20 bottom-[-5%] flex flex-wrap text-black text-center justify-center items-center bg-white "> &copy; {year} All rights reserved Darren Delimond</footer>
    )
}

export default Footer