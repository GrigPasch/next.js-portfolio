/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image  from 'next/image'
import olafImg from '../public/assets/skills/olaf.webp'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#60c2a9]'>
                Projects
            </p>
            <h2 className='py-4'>
                Things I've done 
            </h2>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#3b383d] to-[#000000] hover:text-[#fff]'>
                <Image className='rounded-xl group-hover:opacity-10'
                    src={olafImg} 
                    alt='/' 
                    width={300}
                    height={400}
                />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-[#fff] tracking-wider text-center'>
                        I am working on this part of the site on what to add, so until further notice, here is a cute picture of my dog Olaf for the time being :) . 
                        He is a stray rescue, mixed German Shepherd and almost 11 years old, so you know, say hi to him.
                    </h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects