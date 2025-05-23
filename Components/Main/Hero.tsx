import React from 'react'
import HeroContent from '../Sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col md:h-full h-[800px] w-screen md:w-full'>
        <video
            autoPlay
            muted
            loop
            className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover'
        >
            <source src="/blackhole.webm" type='video/webm'></source>
        </video>
        <HeroContent />
    </div>
  )
}

export default Hero