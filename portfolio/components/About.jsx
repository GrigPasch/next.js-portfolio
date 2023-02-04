/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#60c2a9]'>
                    About
                </p>
                <h2 className='py-4'>
                    Who I am
                </h2>
                <p className='py-2 text-gray-600'>
                    Hello, I'm Grigoris. I'm a 28 years old frontend developer from Greece, that loves writing code in order to build websites. I started being interested in web design
                    after a University class, where we were taught the basics of HTML, CSS. Since then 4+ years have passed in which I've done some seminars, spent countless hours on the web searching
                    for stuff and doing youTube tutorials in order to learn more and further improve myself. Lately I've been mostly using React for SPA(Single Page Applications) and 
                    using .jsx or .tsx alongside Tailwind.css. 
                </p>
                <p className='py-2 text-gray-600'>
                    I'm a sucker for all things animal, especially dogs(proud father of one), I love techngology in general and I also like gaming,anime and outdoors. Outgoing, fun
                    to be around or so i've been told and always giving my all to achieve results.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                    Have a look at some things I've done :)
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-[450ms]'>
                <picture>
                    <source type="image/webp"/>
                    <img 
                        className='rounded-xl'
                        srcSet="/assets/skills/me.webp"
                        src="/assets/skills/me.webp"
                        alt = "Picture of me :)"   
                    />
                </picture>
            </div>
        </div>
    </div>
  )
}

export default About