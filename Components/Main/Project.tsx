import React from 'react'
import ProjectCard from '../Sub/ProjectCard'

const Project = () => {
  return (
    <section
    id='projects'
        className='flex flex-col items-center justify-center mb-20'
    >
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-cyan-500 py-20'>
            My Projects
        </h1>
        <div
            className='h-full w-full flex flex-col md:flex-row gap-10 px-10'
        > 
            <ProjectCard
          src="/Project1.png"
          title="Smart Attendance System (QuickAttend)"
          description="QuickAttend is a simple & powerful web app that makes attendance easy for students, teachers, and administrators. "
        />
        <ProjectCard
          src="/Project1.png"
          title="Smart Attendance System (QuickAttend)"
          description="QuickAttend is a simple & powerful web app that makes attendance easy for students, teachers, and administrators. "
        />
        <ProjectCard
          src="/Project1.png"
          title="Smart Attendance System (QuickAttend)"
          description="QuickAttend is a simple & powerful web app that makes attendance easy for students, teachers, and administrators. "
        />
        </div>
    </section>
  )
}

export default Project