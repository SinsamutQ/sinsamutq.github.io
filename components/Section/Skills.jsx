import React from "react";

import {FaReact} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io";
import {IoLogoNodejs} from "react-icons/io";
import {DiMongodb} from "react-icons/di";
import {SiTailwindcss} from "react-icons/si";

import {SiGnubash} from "react-icons/si";
import {BiGitMerge} from "react-icons/bi";
import {SiFlutter} from "react-icons/si";

const Skills = () => {
    return (

        <div className="font-['SoleiiBold'] max-w-4xl mx-auto justify-center pt-4" id="tech">
            
            <p className="tracking-wide text-2xl text-black text-center sm:text-2xl pt-4 pb-6 font-bold">
                Main Skill
            </p>

            <div className="flex flex-wrap justify-center">

                <div className="flex flex-col w-36 h-36 p-6 my-2 mx-3 overflow-hidden bg-neutral-900 shadow-2xl rounded-xl sm:w-46">
                    <FaReact color="#2563eb" className="m-auto text-4xl"/>
                    <p className="mt-1 sm:text-base pt-1 text-white font-semibold text-center">React</p>
                    <p className="text-xs sm:text-md text-gray-300 text-center ">Framwork</p>
                </div>
                <div className="flex flex-col w-36 h-36 p-6 my-2 mx-3 overflow-hidden bg-neutral-900 shadow-2xl rounded-xl sm:w-46">
                    <img src="/img/nextjs.png" width={42} className="m-auto rounded-full "/>
                    <p className="mt-1 sm:text-base pt-2 text-white font-semibold text-center">Next JS</p>
                    <p className="text-xs sm:text-md text-gray-300 text-center ">Fontend</p>
                </div>
                <div className="flex flex-col w-36 h-36 p-6 my-2 mx-3 overflow-hidden bg-neutral-900 shadow-2xl rounded-xl sm:w-46">
                    <IoLogoJavascript color="#eab308" className="m-auto text-4xl"/>
                    <p className="mt-1 sm:text-base pt-1 text-white font-semibold text-center">Javascript</p>
                    <p className="text-xs sm:text-sm text-gray-300 text-center">Language</p>
                </div>
                <div className="flex flex-col w-36 h-36 p-6 my-2 mx-3 overflow-hidden bg-neutral-900 shadow-2xl rounded-xl sm:w-46">
                    <IoLogoNodejs color="#22c55e" className="m-auto text-4xl"/>
                    <p className="mt-1 sm:text-base pt-1 text-white font-semibold text-center">Node JS</p>
                    <p className="text-xs sm:text-sm text-gray-300 text-center">Beckend</p>
                </div>
                <div className="flex flex-col w-36 h-36 p-6 my-2 mx-3 overflow-hidden bg-neutral-900 shadow-2xl rounded-xl sm:w-46">
                    <DiMongodb color="#22c55e" className="m-auto text-4xl"/>
                    <p className="mt-1 sm:text-base pt-1 text-white font-semibold text-center">MongoDB</p>
                    <p className="text-xs sm:text-base text-gray-300 text-center">Database</p>
                </div>
                <div className="flex flex-col w-36 h-36 p-6 my-2 mx-3 overflow-hidden bg-neutral-900 shadow-2xl rounded-xl sm:w-46">
                    <SiTailwindcss color="#2563eb" className="m-auto text-4xl"/>
                    <p className="mt-1 sm:text-base pt-1 text-white font-semibold text-center">Tailwind</p>
                    <p className="text-xs sm:text-sm text-gray-300 text-center">Css</p>
                </div>
            
            </div>

            <p className="tracking-wide text-2xl text-black text-center sm:text-2xl pt-10 pb-6 font-bold">
                Another Tool & Skill
            </p>

            <div className="flex flex-wrap justify-center">

                <div className="flex flex-col w-36 h-36 p-6 my-2 mx-3 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-46">
                    <BiGitMerge color="black" className="m-auto text-4xl"/>
                    <p className="mt-1 sm:text-base pt-1 text-black font-semibold text-center">Git</p>
                    <p className="text-xs sm:text-sm text-gray-700 text-center">push and merge</p>
                </div>
                <div className="flex flex-col w-36 h-36 p-6 my-2 mx-3 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-468">
                    <SiGnubash color="black" className="m-auto text-4xl"/>
                    <p className="mt-1 sm:text-base pt-1 text-black font-semibold text-center">Bash</p>
                    <p className="text-xs sm:text-sm text-gray-700 text-center">Command</p>
                </div>
                <div className="flex flex-col w-36 h-36 p-6 my-2 mx-3 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-46">
                    <SiFlutter color="#2196f3" className="m-auto text-4xl"/>
                    <p className="mt-1 sm:text-base pt-1 text-black font-semibold text-center">Flutter</p>
                    <p className="text-xs sm:text-sm text-gray-700 text-center">Mobile</p>
                </div>

            </div>
            
        </div>
    )
}

export default Skills
