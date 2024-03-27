"use client";
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
  return (

    <>
    <section className='lg:py-16'>
     <div className="grid grid-cols-1 sm:grid-cols-12 p-20">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
            <h1 className="text-white text-10xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-400 to-yellow-200">Hello, I'm {""}</span>
                <br />
                <TypeAnimation className='text-7xl'
                    sequence={[
                     'Software Developer',
                     1000,
                     'Web Developer',
                     1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia velit nemo ipsam voluptate tempora rem sunt, eius, quos rerum eligendi voluptas magnam laudantium quis debitis laboriosam doloribus beatae molestiae delectus fugiat!
            </p>
            <div>
                <Link href="#contact" className="px-6 inline-block py-3 w-full hover:text-black  sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-900 via-green-600 to-green-600 hover:bg-slate-200 text-white">Hire Me</Link>
                <Link href="#" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-900 via-green-600 to-green-400 bg-transparent hover:bg-slate-800 text-white mt-3">
                    <span className="block bg-[#121212] hover:bg-green-700 rounded-full px-5 py-2">Download CV</span>
                </Link>
            </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative">
            <Image
                src="/images/face2-1.png"
                alt="hero image"
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                width={350}
                height={350}
            />
            </div>
        </div>
     </div>
    </section>
    </>

  )
}

export default HeroSection
