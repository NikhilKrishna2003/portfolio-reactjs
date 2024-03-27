import Link from 'next/link'
import Image from 'next/image'
import Github from "../../../public/images/github-icon.svg"
import LinkedIn from "../../../public/images/linkedin-icon.svg"
import React from 'react'

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' id="contact">
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transdoem -translate-x-1/2 -translate-1/2'></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'> Let's Connect</h5>
            <p className='text-[#ADB&BE] mb-4 max-w-md'>
                {" "}
                I'm currently looking for new oppertunities, my inbox is always open,
                whether you have a question or just want to say hi, I;ll try my best
                to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="github.com">
                    <Image src={Github} alt="Github Icon" />
                </Link>
                <Link href="linkedin.com">
                    <Image src={LinkedIn} alt="LinkedIn Icon" />
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col'>
                <div className='mb-6'>
                    <label 
                        htmlFor="email" 
                        type="email" 
                        className='text-white block mb-2 text-sm font-medium'
                    >
                        Your email
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        required 
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="20bec023@iiitdmj.ac.in"
                    />
                </div>
                <div className='mb-6'>
                    <label 
                        htmlFor="subject" 
                        className='text-white block mb-2 text-sm font-medium'
                    >
                       Subject 
                    </label>
                    <input 
                        type="text" 
                        id="subject" 
                        required 
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Just saying Hi'
                    />
                </div>
                <div className='mb-8'>
                    <label 
                        htmlFor="message" 
                        className='text-white block text-sm font-medium leading-6'
                    >
                        Message
                    </label>
                    <textarea
                        name='message'
                        id="message" 
                        required 
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mt-2'
                        placeholder="Lets talk about"
                        rows="4" 
                    />
                </div>


                <button 
                    type="submit"
                    className="bg-green-700 hover:bg-green-400 hover:text-black text-white font-medium py-2.5 px-5  block rounded-lg w-full mt-2"
                > Send Message</button>
            </form>
        </div>
    </section>
        
  )
}

export default EmailSection
