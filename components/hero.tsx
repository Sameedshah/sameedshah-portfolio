
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';

export const Hero = () => (
    <section className="text-gray-600 body-font font-poppin bg-gradient-to-r from-blue-400 to-emerald-400">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Image
                    className="object-cover object-center rounded mx-auto w-[50rem]"
                    width={500}
                    height={500}
                    alt="Muhammad Sameed Shah"
                    src={require("../public/assests/ID.png")} />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">
                    I am
                    <br className="hidden lg:inline-block " />
                    <Typewriter
                        options={{
                            strings: ['Next.JS Developer', 'Web 2.0 Developer', 'Web 3.0 Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <div className='w-[100px] h-[2px] bg-blue-700'> </div>
                <p className="mb-8 leading-relaxed text-lg font-semibold ">
                    Whether you're looking for a Next.JS Developer to help bring your ideas to life or need assistance with an existing project, I'm here to help. Please feel free to explore my portfolio and get in touch if you have any questions or would like to work together on a project. Thank you for visiting!
                </p>
                <div className="flex justify-center">
                    <Link href={"#Contact"}> 
                    <button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        Get in Touch!
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
)
export default Hero; 
