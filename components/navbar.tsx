"use client"
import { FaDownload } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
const Navbar = () => {
    return (
        <div className='z-50 sticky top-0'>
            <header className=" text-gray-800 body-font bg-gradient-to-r from-blue-400 to-emerald-400">
                <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                    <a className="flex title-font font-poppins items-center font-extrabold text-gray-900 mb-4 md:mb-0">
                        <Image src={require("../public/assests/SSD.png")} alt="Sameed Shah Developer" width={100} height={100} className='w-16' />
                        <span className="ml-3 text-xl">SSD Portfolio.</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-blue-700 flex flex-wrap items-center text-base justify-center font-extrabold">
                        <Link href={"#"} className="mr-5 hover:text-blue-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">Home</Link>
                        <Link href={"#about"} className="mr-5 hover:text-blue-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">About</Link>
                        <Link href={"#skills"} className="mr-5 hover:text-blue-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">Skills</Link>
                        <Link href={"#project"} className="mr-5 hover:text-blue-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">Projects</Link>
                        <Link href={"#Contact"} className="mr-5 hover:text-blue-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">Contact</Link>
                    </nav>
                    <a href="/assests/CV-sameed.pdf">
                        <button className="inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-poppins transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"> Resume
                            <FaDownload className='text-xl ml-2 ' />
                        </button>
                    </a>
                </div>
            </header>
        </div>
    )
}
export default Navbar;

