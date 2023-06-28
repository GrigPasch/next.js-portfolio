/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import connectImg from '../public/assets/skills/connect.webp'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaLinkedinIn, FaInstagramSquare, FaGithub } from 'react-icons/fa'
import { BsPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send('service_8vbrxjp', 'template_m90bid1', {from_name: form.name, to_name: 'Greg', from_email: form.email, to_email: 'gregpasch8@gmail.com', message: form.message}, '85O6bt9zzNGBt_KO0')
        .then(() => {
            setLoading(false);
            alert('Thank you for contacting me. I will try to get back to you as soon as possible friend :)');

            setForm({
                name: '',
                email: '',
                message: '',
            })
        },(error) => {
            setLoading(false);
            console.log(error)
            alert('Something went wrong.')
          })
    };

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

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
                    <form ref = {formRef} onSubmit = {handleSubmit} className = 'mt-12 flex flex-col gap-8'>
                        <label className = 'flex flex-col '>
                            <span className = 'text-black font-medium mb-4'>Your Name</span>
                            <input type = "text" name = "name" value = {form.name} onChange = {handleChange} placeholder = "What is your name" className = 'bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline outline-gray-200 font-medium'/>
                        </label>
                        <label className = 'flex flex-col'>
                            <span className = 'text-black font-medium mb-4'>Your e-mail</span>
                            <input type = "email" name = "email" value = {form.email} onChange = {handleChange} placeholder = "What is your e-mail" className = 'bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline outline-gray-200 font-medium'/>
                        </label>
                        <label className = 'flex flex-col'>
                            <span className = 'text-black font-medium mb-4'>Your message</span>
                            <textarea rows = "7" name = "message" value = {form.message} onChange = {handleChange} placeholder = "What do you want to contact me about." className = 'bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline outline-gray-200  font-medium'/>
                        </label>
                        <button className= 'w-full p-4 text-gray-100 mt-4 '>
                            {loading? 'Sending Message' : 'Hit me up!'}
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