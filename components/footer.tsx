"use client"
import Link from 'next/link';
import Image from 'next/image';
import {BsInstagram} from 'react-icons/Bs'
import {TfiLinkedin} from 'react-icons/tfi'
import React from 'react';
const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-blue-400 to-emerald-400'>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        
                    <Image src={require("../public/assests/SSD.png")} alt = "Sameed Shah Developer" width={100} height={100} className='w-16'/>

                        <span className="ml-3 text-xl font-poppin font-bold">Sameed Shah Developer</span>
                    </a>
                    <p className="text-sm text-gray-800 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-blue-600 sm:py-2 sm:mt-0 mt-4">
                        © 2023 S.S.D 
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                     
                        <Link href={"https://www.instagram.com/mr_sameed.pro/"} target='_blank' className="ml-3 text-gray-700">
                        <BsInstagram className='text-xl hover:text-[#eb5454]'/>
                        </Link> 
                        <Link href={"https://www.linkedin.com/in/muhammad-sameed-shah-947594257/"} target='_blank' className="ml-3 text-gray-700">
                        <TfiLinkedin className='text-xl hover:text-[#4b4bff]'/>
                        </Link>
                    </span>
                </div>
            </footer>
        </div>
        
    )
}
export default Footer; 