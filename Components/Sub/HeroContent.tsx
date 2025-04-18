"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/Utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const HeroContent = () => {
    const [isLiked, setisLiked] = useState(false)
    return (<motion.div
        initial={"hidden"}
        animate="visible"
        className='flex flex-row items-center justify-center md:px-20 px-10 md:mt-40 mt-52 w-full z-[20]'
    >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
                variants={slideInFromTop}
                className='Welcome-box py-[8px] px-[7px] border-[#7042f88b] opacity-[0.9]'
            >

                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                <h1 className='Welcome-text text-[13px]'>Jash Gusani (FullStack Developer)</h1>
            </motion.div>

            <motion.div
                variants={slideInFromLeft(0.5)}
                className='flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto'
            >
                <span>
                    "Passionate About
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Full-Stack </span>
                    Development And
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Real-Time </span>  Applications
                </span>
            </motion.div>
            <motion.p
                variants={slideInFromLeft(0.8)}
                className='text-lg text-gray-400 border border-gray-500 rounded-2xl p-4  my-5 max-w-[600px]'
            >
                I&apos;m a Full Stack Developer with experience in React, Node.js, Express.js, MongoDB, Firebase, Tailwind CSS, Bootstrap, Material UI, GitHub, Git and many more Chackout My Projects.
            </motion.p>
            <motion.a
                variants={slideInFromLeft(1)}
                className="py-2 button-primary flex flex-row justify-center gap-1 text-center text-white cursor-pointer rounded-lg max-w-[200px] items-center"
                onClick={() => setisLiked(!isLiked)}
            >
                {isLiked ? <>Liked <AiFillHeart className="text-blue-500 " /></> : <>Like <AiOutlineHeart className='text-gray-500' /></>}
            </motion.a>
        </div>
        <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full h-full flex justify-center items-center relative"
        >
            {/* Main Icon Image */}
            <Image
                src="/mainIconsdark.svg"
                alt="work icons"
                width={650}
                height={650}
                className="w-full max-w-[90%] md:max-w-[650px] h-auto"
            />
        </motion.div>


    </motion.div>)
}

export default HeroContent