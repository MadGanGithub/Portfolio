"use client"

import profile from "@/public/profile.png";
import Image from 'next/image';
import { FaDev, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

const Card = () => {

  const handleResume = () => {
    console.log("Display Resume")
  }

  return (
    <div className='flex flex-col justify-around sm:flex-row items-center sm:text-center bg-black'>
      <div>
        <Image src={profile} alt='profile' />
      </div>
      <div className='flex flex-col text-white justify-center gap-5 items-center'>
        <div className='flex flex-col sm:flex-row gap-5'>
          <p className='text-6xl font-bold font-mono'>Madhav</p>
          <p className='text-6xl font-bold font-mono'>Ganesan</p>
        </div>
        <p className='text-4xl'>Web Developer</p>
        <div className='flex justify-start gap-5'>
          <button onChange={handleResume} className='rounded-full bg-white text-black p-2 font-bold'>
            <a href="https://drive.google.com/file/d/1CBH3v0x-gKusjlFROIVTYg0JJHbWFC68/view?usp=sharing" target="_blank">Resume</a>
          </button>
          <button className='rounded-full bg-yellow-300 text-black p-2 font-bold'>
            <a href="#contact">Contact me</a>
          </button>
        </div>
        <div className='flex justify-start gap-5'>
          <a href="https://github.com/MadGanGithub" target="_blank" rel="noopener noreferrer">
            <FaGithub className='w-8 h-8' />
          </a>
          <a href="https://linkedin.com/in/madhav-ganesan-19b0a5253" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='w-8 h-8' />
          </a>
          <a href="https://twitter.com/madhavganesan" target="_blank" rel="noopener noreferrer">
            <FaTwitter className='w-8 h-8' />
          </a>
          <a href="https://dev.to/madgan95" target="_blank" rel="noopener noreferrer">
            <FaDev className='w-8 h-8' />
          </a>
          <a href="https://madhavganesan.hashnode.dev" target="_blank" rel="noopener noreferrer">
            <FaHashnode className='w-8 h-8' />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Card
