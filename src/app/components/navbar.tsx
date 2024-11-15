import React from 'react'
import Image from "next/image";
import Logo from "../../../public/logo.png"


const navbar = () => {
  return (
    <>
    <nav className="w-full h-20 sticky top-0 bg-[#044E83] flex justify-between items-center px-6 z-50">
        <Image
            src={Logo}
            alt="Logo"
            className="w-[80px] h-auto absolute top-6 "
          ></Image>

        <div className="relative left-28 text-xs">
            <p className="text-[#b9d8f3] text-lg font-extrabold xl:text-2xl xl:font-bold font-sans">
               Tuition Free Education Program on Latest Technologies
             </p>
          </div>

          <ul className="hidden md:flex h-full items-center text-white md:space-x-4 lg:text-lg lg:space-x-8">
            <li>Home</li>
            <li>Apply</li>
            <li>Jobs</li>
            <li>Results</li>
            <li>Courses</li>
          </ul>

      
    </nav>
    </>
  )
}

export default navbar
