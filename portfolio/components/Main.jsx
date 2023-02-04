/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaInstagramSquare, FaGithub } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className ='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
              <p className='uppercase text-sm tracking-widest text-gray-400'>
                Let's work together
              </p>
              <h1 className='py-4 text-gray-600'>
                Hello, I am <span className='text-[#60c2a9]'>Greg</span>
              </h1>
              <h1 className='py-2 text-gray-600'>
                A FrontEnd developer in the making and an aspiring Full stack developer in the near future :)
              </h1>
              <p className='py-4  max-w-[70%] m-auto text-sky-900'>
                I'm a Greek front end developer that focuses on using HTML, CSS, Js and React in order to build beautiful, clean and fully functional websites.
              </p>
              <div className='flex items-center justify-center max-w-[330px] m-auto pt-4'>
                <div className='rounded-full shadow-inner shadow-[#3e76ec]  p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-lg hover:shadow-[#3e76ec] m-[-4px]'>
                  <Link href='https://www.linkedin.com/in/grigorios-paschalidis-b62944167/'>
                    <FaLinkedinIn size={25} />
                  </Link>
                </div>
                <div className='rounded-full shadow-inner  shadow-[#ffce01] p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-lg hover:shadow-[#ffce01] m-[-4px]'>
                  <FaInstagramSquare size={25} />
                </div>
                <div className='rounded-full shadow-inner shadow-[#000000] p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-lg hover:shadow-[#000000] m-[-4px]'>
                <Link href='https://github.com/GrigPasch'>
                  <FaGithub size={25} />
                </Link>
                </div>
              </div>
              <div className='flex items-center  justify-center max-w-[330px] m-auto py-4 h-0'>
                <div className='rounded-full shadow-inner shadow-[#179a13] p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-lg hover:shadow-[#179a13] m-[-6px]'>
                  <AiOutlineMail size={25} />
                </div>
                <div className='rounded-full shadow-inner shadow-[#ff0000] p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-lg hover:shadow-[#ff0000] m-[-6px]'>
                  <BsPersonLinesFill size={25} />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main