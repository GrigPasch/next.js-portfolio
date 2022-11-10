import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ImageProperties from './ImageProperties'

const ProjectItems = () => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#3b383d] to-[#000000]'>
        <Image src={ImageProperties} alt='/' className='rounded-xl group-hover:opacity-10'/>
        <div className='hidden griuo-hover:block absolute top-[50%] left-[5-%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>
                Property
            </h3>
            <p className='pb-4 pt-2 text-white text-center'>
                React.js
            </p>
            <Link href='/'>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
                    More Info
                </p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItems