/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Image } from 'next/image'
import Link from 'next/link'
import ImageProperties from './ImageProperties'
import ProjectItems from './ProjectItems'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase'>
                Projects
            </p>
            <h2 className='py-4'>
                Things I've done 
            </h2>
            <div className='grid md:grid-cols-2 gap-8 text-[#60c2a9]'>
                <ProjectItems 
                    title='Property' 
                    backgroundImg={ImageProperties}
                    projectUrl='/property'
                />
             </div>
        </div>
        
    </div>
  )
}

export default Projects