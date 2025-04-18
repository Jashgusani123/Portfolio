import { Backend_skill,  Skill_data1, Skill_data2, Skill_data3 } from '@/Constants'
import React from 'react'
import SkillDataProvider from '../Sub/SkillDataProvider'
import SkillText from '../Sub/SkillText'

const Skills = () => {
  return (
    <section
      id="skills"
      className='flex flex-col h-full justify-center items-center md:mt-0 mt-20 gap-3 relative overflow-hidden '
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Skill_data1.map((image, index) => (
          <SkillDataProvider src={image.Image} key={index} width={image.width} height={image.height} index={index} />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Skill_data2.map((image , index)=>(
                <SkillDataProvider src={image.Image} key={index} width={image.width} height={image.height} index={index}/>
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Skill_data3.map((image , index)=>(
                <SkillDataProvider src={image.Image} key={index} width={image.width} height={image.height} index={index}/>
            ))}
        </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Backend_skill.map((image , index)=>(
                <SkillDataProvider src={image.Image} key={index} width={image.width} height={image.height} index={index}/>
            ))}
        </div>
        {/* <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Full_stack.map((image , index)=>(
                <SkillDataProvider src={image.Image} key={index} width={image.width} height={image.height} index={index}/>
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Other_skill.map((image , index)=>(
                <SkillDataProvider src={image.Image} key={index} width={image.width} height={image.height} index={index}/>
            ))}
        </div> */}
            <div className='w-full h-full absolute '>
              <div className='w-full h-full z-[10] opacity-30 absolute flex items-center justify-center bg-cover'>
                <video className='w-full h-auto ' preload='false' playsInline loop muted autoPlay src="/cards-video.webm"/>
              </div>
            </div>
    </section>
  )
}

export default Skills