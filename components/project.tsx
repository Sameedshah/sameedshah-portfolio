import Image from "next/image"
import Link from "next/link"
import React from "react"
export const Project = () => {
    return (
        <div id="project">
            <div className=" mx-auto md:px-6 bg-gradient-to-r from-blue-400 to-emerald-400">
                {/* Section: Design Block */}
                <section className="pb-14 text-center ">
                    <h2 className="mb-12 pb-4 text-center text-3xl font-bold">
                        Projects I am Proud of
                    </h2>
                    <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
                        <div className="mb-6 lg:mb-0 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded bg-gray-800">
                            <div className="relative block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                                <div className="flex">
                                    <div className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                        data-te-ripple-init=""
                                        data-te-ripple-color="light"
                                    >
                                        <Image src={require("../public/assests/projects-resourses/raast.png")} alt="Project 01"
                                            className="w-full"
                                        />
                                        <Link href={"https://github.com/Sameedshah/RIET.git"} target="_blank">
                                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">

                                <h5 className="mb-4 text-lg font-bold text-white">RAAS Institute of Emerging Technology</h5>
                                <p className="mb-6 text-white">
                                    Frontend Website of RAAS Institute of Emerging Technology using HTML, CSS
                                </p>
                                <Link
                                    href={"https://github.com/Sameedshah/RIET.git"}
                                    target="_blank"
                                    data-te-ripple-init=""
                                    data-te-ripple-color="light"
                                    className="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                >
                                    Read more
                                </Link>
                            </div>
                        </div>


                        <div className="mb-6 lg:mb-0 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded bg-gray-800">
                            <div className="relative block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                                <div className="flex">
                                    <div className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                        data-te-ripple-init=""
                                        data-te-ripple-color="light"
                                    >
                                        <Image src={require("../public/assests/projects-resourses/raast.png")} alt="Project 01"
                                            className="w-full"
                                        />
                                        <Link href={"https://github.com/Sameedshah/RIET.git"} target="_blank">
                                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">

                                <h5 className="mb-4 text-lg font-bold text-white">RAAS Institute of Emerging Technology</h5>
                                <p className="mb-6 text-white">
                                    Frontend Website of RAAS Institute of Emerging Technology using HTML, CSS
                                </p>
                                <Link
                                    href={"https://github.com/Sameedshah/RIET.git"}
                                    target="_blank"
                                    data-te-ripple-init=""
                                    data-te-ripple-color="light"
                                    className="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                >
                                    Read more
                                </Link>
                            </div>
                        </div>

                        <div className="mb-6 lg:mb-0 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded bg-gray-800">
                            <div className="relative block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                                <div className="flex">
                                    <div className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                        data-te-ripple-init=""
                                        data-te-ripple-color="light"
                                    >
                                        <Image src={require("../public/assests/projects-resourses/raast.png")} alt="Project 01"
                                            className="w-full"
                                        />
                                        <Link href={"https://github.com/Sameedshah/RIET.git"} target="_blank">
                                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">

                                <h5 className="mb-4 text-lg font-bold text-white">RAAS Institute of Emerging Technology</h5>
                                <p className="mb-6 text-white">
                                    Frontend Website of RAAS Institute of Emerging Technology using HTML, CSS
                                </p>
                                <Link
                                    href={"https://github.com/Sameedshah/RIET.git"}
                                    target="_blank"
                                    data-te-ripple-init=""
                                    data-te-ripple-color="light"
                                    className="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                >
                                    Read more
                                </Link>
                            </div>
                        </div>


                    </div>



                </section>
            </div>
        </div>
    )
}