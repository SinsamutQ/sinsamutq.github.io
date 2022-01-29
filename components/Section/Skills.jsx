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
            
            <p className="tracking-wide text-2xl text-black text-center sm:text-2xl pt-4 font-bold">
                Main Skill
            </p>

            <div className="flex flex-wrap justify-center">
                <div className="flex flex-col w-40 p-8 m-6 overflow-hidden bg-neutral-900 shadow-2xl rounded-xl sm:w-52">
                    <FaReact color="#2563eb" className="mx-auto text-5xl"/>
                    <p className="mt-5 sm:text-xl text-white font-semibold text-center">React</p>
                    <p className="text-xs sm:text-base text-gray-300 pt-2 text-center ">Framwork</p>
                </div>
                <div className="flex flex-col w-40 p-8 m-6 overflow-hidden bg-neutral-900 shadow-2xl rounded-xl sm:w-52">
                    <img src="/img/nextjs.png" width={50} height={50} className="mx-auto rounded-full"/>
                    <p className="mt-5 sm:text-xl text-white font-semibold text-center">Next JS</p>
                    <p className="text-xs sm:text-base text-gray-300 pt-2 text-center ">Fontend</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-neutral-900 shadow-2xl rounded-xl sm:w-52">
                    <IoLogoJavascript color="#eab308" className="mx-auto text-5xl"/>
                    <p className="mt-5 sm:text-xl text-white font-semibold text-center">Javascript</p>
                    <p className="text-xs sm:text-base text-gray-300 pt-2 text-center">Language</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-neutral-900 shadow-2xl rounded-xl sm:w-52">
                    <IoLogoNodejs color="#22c55e" className="mx-auto text-5xl"/>
                    <p className="mt-5 sm:text-xl text-white font-semibold text-center">Node JS</p>
                    <p className="text-xs sm:text-base text-gray-300 pt-2 text-center">Beckend</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-neutral-900 shadow-2xl rounded-xl sm:w-52">
                    <DiMongodb color="#22c55e" className="mx-auto text-5xl"/>
                    <p className="mt-5 sm:text-xl text-white font-semibold text-center">MongoDB</p>
                    <p className="text-xs sm:text-base text-gray-300 pt-2 text-center">Database</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-neutral-900 shadow-2xl rounded-xl sm:w-52">
                    <SiTailwindcss color="#2563eb" className="mx-auto text-5xl"/>
                    <p className="mt-5 sm:text-xl text-white font-semibold text-center">Tailwind</p>
                    <p className="text-xs sm:text-base text-gray-300 pt-2 text-center">Css</p>
                </div>
            
            </div>

            <p className="tracking-wide text-2xl text-black text-center sm:text-2xl pt-4 font-bold">
                Another Tool & Skill
            </p>
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <BiGitMerge color="black" className="mx-auto text-2xl sm:text-4xl"/>
                    <p className="mt-5 sm:text-xl font-semibold text-center">Git</p>
                    <p className="text-xs sm:text-base text-gray-600 pt-2 text-center">push and merge</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiGnubash color="black" className="mx-auto text-2xl sm:text-4xl"/>
                    <p className="mt-5 sm:text-xl font-semibold text-center">Bash</p>
                    <p className="text-xs sm:text-base text-gray-600 pt-2 text-center">Command</p>
                </div>
                <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiFlutter color="#2196f3" className="mx-auto text-2xl sm:text-4xl"/>
                    <p className="mt-5 sm:text-xl font-semibold text-center">Flutter</p>
                    <p className="text-xs sm:text-base text-gray-600 pt-2 text-center">Mobile</p>
                </div>
            </div>
            
        </div>
    )
}

export default Skills
