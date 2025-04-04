"use client"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/Utils/motion'
import React from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/16/solid'

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center '>
            <motion.div
                variants={slideInFromTop}
                className='Welcome-box py-[8px] px-[7px] border-[#7042f88b] opacity-[0.9]'
            >

                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                <h1 className='Welcome-text text-[13px]'>Turning ideas into scalable web solutions</h1>
            </motion.div>
            <motion.div variants={slideInFromLeft(0.5)} className='text-[30px] font-medium text-white mt-[10px] text-center mb-[15px]'>
            Making Apps with Modern Technologies
            </motion.div>
            <motion.div variants={slideInFromRight(0.5)} className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'>
            Keep your ideas sharp and your tasks sharper.
            </motion.div>
        </div>
    )
}

export default SkillText