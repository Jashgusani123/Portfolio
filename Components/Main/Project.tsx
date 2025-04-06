"use client"

import React from 'react'
import ProjectCard from '../Sub/ProjectCard'
import { slideInFromLeft, slideInFromRight } from '@/Utils/motion'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Project = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
});
const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};
const animationDelay = 0.3;
  return (
    <section
      id='projects'
      className='flex flex-col items-center justify-center mb-20'
    >
      <motion.div  className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-cyan-500 py-2'  ref={ref} initial="hidden" variants={imageVariants} animate={inView ? "visible" : "hidden"} transition={{ delay:  animationDelay }}>
        My Projects
      </motion.div>

      <motion.div  className='cursive text-[20px] text-gray-300 mb-10 text-center'  ref={ref} initial="hidden" variants={imageVariants} animate={inView ? "visible" : "hidden"} transition={{ delay:  animationDelay }}>
        Craft your code, build your vision.
      </motion.div>

      <div
        className='h-full w-full flex flex-col md:flex-row gap-10 px-10'
      >
        <ProjectCard
          src="/Project1.png"
          title="Smart Attendance System (QuickAttend)"
          description="QuickAttend is a simple & powerful web app that makes attendance easy for students, teachers, and administrators. "
          url='https://attendance-system-gold-six.vercel.app/'
        />
        <ProjectCard
          src="/Project2.png"
          title="E-Commerce Website"
          description="An E-Commerce website built with React, Node.js, and MongoDB. It allows users to browse products, add them to the cart, and make secure payments."
          url='https://e-commerce-client-2025.vercel.app/'
        />
        <ProjectCard
          src="/Project3.png"
          title="Chess Game"
          description="A Online Chess game built with Ejs, Node.js, MongoDB abd Socket.io. It allows users to play against each other or against the computer."
          url='https://chess-t0e4.onrender.com'
        />
      </div>
    </section>
  )
}

export default Project