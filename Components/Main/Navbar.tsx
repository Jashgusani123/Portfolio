import { Socials } from '@/Constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => (
    <div
    className='w-full h-[64px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 md:px-10 pointer-events-auto'
  >
  
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <a href="/" className='h-auto w-auto flex flex-row items-center'>
                {/* <Image
            src={"/Portfolio.png"}
            alt='Logo'
            width={40}
            height={40}
            className='cursor-pointer hover:animate-slowspin'
        /> */}
                <span className='font-bold ml-[10px] hidden md:block text-gray-300'>Portfolio</span>
            </a>
            <div className='w-[500px] h-full flex flex-row items-center justify-center '>
                <div className='flex items-center justify-between border border-[#7042f861] bg-[#0300145E] mr-[15px] px-[20px] py-[10px] rounded-full w-full h-auto text-gray-200'>
                    <a href="#footer" className='cursor-pointer'>About Me</a>
                    <a href="#skills" className='cursor-pointer'>Skills </a>
                    <a href="#projects" className='cursor-pointer'>Project</a>
                </div>
            </div>
            <div className='flex-row hidden md:flex gap-5'>
                {Socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={social.src}
                            alt={social.name}
                            width={24}
                            height={24}
                            className="cursor-pointer" />
                    </a>
                ))}
            </div>

        </div>
    </div>
)

export default Navbar