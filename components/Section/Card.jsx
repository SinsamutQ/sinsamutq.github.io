import React from "react";
import Image from "next/image";

import {FaGithub, FaFacebook} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";

const Card = () => {
    return (
        <div className="w-full" id="about">
            <div className="felx flex-col justity-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">

                <div>
                    <img src="/img/exploding-head.png" className="w-32 mx-auto shadow-xl rounded-full" alt="profile photo" />
                </div>

                <div className="font-['SoleiiBold'] text-center mt-5">
                    <p className="text-xl sm:text-2xl text-gray-900">
                        Wasin Kaewplung
                    </p>
                    <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                        Web Developer / React
                    </p>

                    <div className="flex align-center justify-center mt-4">
                        <a className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com">
                            <FaGithub/>
                            <span className="sr-only">Github</span>
                        </a>
                        <a className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300" href="https://www.facebook.com/wasinkaewplung/">
                            <FaFacebook/>
                            <span className="sr-only">Facebook</span>
                        </a>
                        {/* <a className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com">
                            <RiInstagramFill/>
                            <span className="sr-only">Instagram</span>
                        </a> */}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Card
