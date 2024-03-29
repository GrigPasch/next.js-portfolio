/* eslint-disable react/no-unescaped-entities */
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import logoImg from '../public/assets/skills/logo.webp'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import { FaLinkedinIn, FaInstagramSquare, FaGithub, FaHandScissors } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'
import Image from 'next/image'


const Navbar = () => {
  const [nav,setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () =>{
    setNav(!nav);
  }

  useEffect(() => {
    const handleShadow = () =>{
      if (window.scrollY >= 90) {
        setShadow(true);
      }
      else {
        setShadow(false);
      }
    }
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-gradient-to-b from-[#3b383d] to-[#000000]' : 
    'fixed w-full h-20 z-[100] bg-gradient-to-b from-[#3b383d] to-[#000000]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image 
            src={logoImg} 
            alt='/'
            width={150}
            height={50} 
          />
        </Link>
        <div>
          <ul className='hidden md:flex text-[#fff]'>
            <Link href='/#home' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#about' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#skills' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b hover:border-[#fff]'>Skills</li>
            </Link>
            <Link href='/#projects' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/#contact' scroll={false}>
              <li className='ml-10 text-sm uppercase hover:border-b '>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} color="white"/>
          </div>
        </div>
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-full h-screen md:hidden' : ''}>
        <div className={nav ? 'fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-gradient-to-t from-[#000000] to-[#3b383d] p-10 ease-in duration-500' 
                            : 'fixed left-[-100%] top-0 bg-gradient-to-t from-[#000000] to-[#3b383d] p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
            <picture>
              <source type="image/webp" />
              <img 
                srcSet="/assets/skills/logo.webp"
                src="/assets/skills/logo.webp"
                alt = "Generic logo" 
                width={150} 
                height={50} />
            </picture>
              <div onClick={handleNav} className='rounded-full shadow-sm shadow-gray-300 p-3 cursor-pointer'>
                <AiOutlineClose size={25} color="white" />
              </div>
            </div>
            <div className='border-b border-gray-300 my-2'>
              <p className='w-[85%] md:w-[90%] py-4 text-[#fff] flex flex-row'>
              Let's write code together friend <FaHandScissors className='h-7 pl-1 ml-1 gap-2'/> 
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase '>
              <Link className='hover:border-b-white' href='/#home'>
                <li className=' py-4 text-sm text-[#fff]'>Home</li>
              </Link>
              <Link href='/#about'>
                <li className='py-4 text-sm text-[#fff]'>About</li>
              </Link>
              <Link href='/#skills'>
                <li className='py-4 text-sm text-[#fff]'>Skills</li>
              </Link>
              <Link href='/#projects'>
                <li className='py-4 text-sm text-[#fff]'>Projects</li>
              </Link>
              <Link href='/#contact'>
                <li className='py-4 text-sm text-[#fff] '>Contact</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#a0a0a0]'>Let's connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-sm shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <a href="https://www.linkedin.com/in/grigorios-paschalidis-b62944167/" target="_blank" rel="noreferrer"><FaLinkedinIn size={25} color='fff'/></a>
                </div>
                <div className='rounded-full shadow-sm shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaInstagramSquare size={25} color='fff'/>
                </div>
                <div className='rounded-full shadow-sm shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub size={25} color='fff'/>
                </div>
                <div className='rounded-full shadow-sm shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail size={25} color='#fff'/>
                </div>
                <div className='rounded-full shadow-sm shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsPersonLinesFill size={25} color='#fff'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar