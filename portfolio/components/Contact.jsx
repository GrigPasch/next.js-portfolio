/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import connectImg from '../public/assets/skills/connect.webp'
import { FaLinkedinIn, FaInstagramSquare, FaGithub } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl trackingwidest uppercase text-[#60c2a9]'>
                Contact
            </p>
            <h2 className='py-4'>
                Get in touch with me
            </h2>
            <div className='grid lg:grid-cols-5 gap-6'> 
            {/* left side */}
                <div className='col-span-3 lg:col-span-2 h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-2 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300'
                                src={connectImg} 
                                alt='/' 
                            />
                        </div>
                        <div>
                            <h2 className='py-3'>
                                Grigoris Paschalidis (Γρηγόρης Πασχαλίδης)
                            </h2>
                            <p>
                                Front-End Developer
                            </p>
                            <p className='py-3'>
                                I am available for full-time and preferrably remotely across Europe (at least for the start) positions.
                                Connect with me and let's see where it goes.
                            </p>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>
                                Let's Connect friend
                            </p>
                            <div className='flex items-center justify-between py-4'>
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
                 {/* right side */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='py-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>
                                        Name
                                    </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>
                                        Telephone number
                                    </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='tel'/>
                                </div>
                            </div>
                            <div className='flex flex-col py-2'> 
                                <label className='uppercase text-sm py-2'>
                                    E-mail
                                </label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email'/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                    Subject
                                </label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                    Message
                                </label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300 ' rows='10' ></textarea>
                            </div>             
                            <button className= 'w-full p-4 text-gray-100 mt-4 '>
                                    Hit me up!
                            </button>
                        </form>
                    </div>  
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-[#60c2a9] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp size={25}/>
                    </div>
                </Link>
            </div> 
        </div>
    </div>
  )
}

export default Contact