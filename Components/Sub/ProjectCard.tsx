'use client';

import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCards = ({ src, title, description, url }: Props) => {
  const handleImageClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
      
      {/* Image with onClick */}
      <div onClick={handleImageClick} className='cursor-pointer'>
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className='w-full object-contain'
        />
      </div>

      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='mt-2 text-gray-300'>{description}</p>
      </div>

      <div className='relative p-4 flex justify-center items-center'>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='cursor-pointer p-2 items-center flex justify-center w-3xl text-white bg-gradient-to-r from-purple-500 to bg-cyan-500 rounded-3xl'
        >
          View
        </a>
      </div>
    </div>
  );
};

export default ProjectCards;
