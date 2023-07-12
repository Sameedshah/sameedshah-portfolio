import React from "react";
import { AiFillHtml5} from "react-icons/ai";
import {IoLogoCss3} from "react-icons/io";
import {TbBrandJavascript} from "react-icons/tb";
import {GrMysql} from "react-icons/gr";
import {TbBrandNextjs, TbBrandTailwind} from "react-icons/tb";

const Skill = () => {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font bg-gradient-to-r from-blue-400 to-emerald-400">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl title-font text-gray-900 font-poppin font-extrabold">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center">
                    <AiFillHtml5 className="text-5xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-bold">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-800 h-1 rounded-xl w-[95%]"></div>
                  </div>
                  <p className="font-bold text-blue-800 text-right">95%</p>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center ">
                    <IoLogoCss3 className="text-5xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg font-bold">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-800 h-1 rounded-xl w-[85%]"></div>
                  </div>
                  <p className="font-bold text-blue-800 text-right">85%</p>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center ">
                    <TbBrandJavascript className="text-5xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg  font-bold ">
                    JavaScript / TypeScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-800 h-1 rounded-xl w-[80%]"></div>
                  </div>
                  <p className="font-bold text-blue-800 text-right">80%</p>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center">
                    <TbBrandNextjs className="text-5xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg font-bold">
                    Next JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-800 h-1 rounded-xl w-[80%]"></div>
                  </div>
                  <p className="font-bold text-blue-800 text-right">80%</p>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center ">
                    <TbBrandTailwind className="text-5xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg font-bold">
                    Tailwind CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-800 h-1 rounded-xl w-[95%]"></div>
                  </div>
                  <p className="font-bold text-blue-800 text-right">95%</p>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center">
                    <GrMysql className="text-8xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg font-bold">
                    MySQL
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-800 h-1 rounded-xl w-[60%]"></div>
                  </div>
                  <p className="font-bold text-blue-800 text-right">60%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;

      
{/* <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[45%]"> 45%</div>
</div> */}


