import React from "react";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FiMail } from "react-icons/fi";
import { MdPhone } from "react-icons/md"
import { FaYoutube } from "react-icons/fa";

const Footer = () => (
    <div className="w-full h-full bg-transparent text-gray-200 z-50 shadow-lg p-[15px]" id="footer">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row gap-6 items-center justify-around flex-wrap">

                {/* Community Section */}
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[25px]">Community</div>

                    <a
                        href="https://www.youtube.com/@codecrafters-91"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center my-[15px] z-50 cursor-pointer"
                    >
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px] ">YouTube</span>
                    </a>

                    <a
                        href="https://github.com/jashgusani123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center my-[15px] z-50 cursor-pointer"
                    >
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">GitHub</span>
                    </a>

                    <a
                        href="https://linkedin.com/in/jashgusani91"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center my-[15px] z-50 cursor-pointer"
                    >
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">LinkedIn</span>
                    </a>
                </div>


                {/* About Section */}
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[25px]">About</div>
                    {/* Email placed here */}
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <MdPhone className="text-[18px] animate-pulse text-[#a765ff]" />
                        <span className="text-[15px] ml-[6px] flex flex-row flex-wrap gap-2">+91 9913934207</span>
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer group">
                        <FiMail className="text-[18px] glow-email" />
                        <span className="text-[15px] ml-[6px]">jashgusani20@gmail.com</span>
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; 2025 Jash Gusani Portfolio. All rights reserved.
            </div>
        </div>
    </div>
);

export default Footer;
