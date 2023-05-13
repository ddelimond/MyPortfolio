import React from 'react'
import moment from 'moment'

const Footer = () => {
    let year = moment().format('YYYY')
    return (
        <footer className="absolute w-full h-20 bottom-[-10%] flex flex-wrap text-center justify-center items-center bg-white "> &copy; {year} All rights reseved Darren Delimond</footer>
    )
}

export default Footer