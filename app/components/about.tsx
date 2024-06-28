import React from 'react';
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 p-4'>
      <p className='text-white text-6xl font-bold'>About Me!</p>
      <div className='flex flex-col sm:flex-row justify-center gap-5 w-full'>
        <div className='rounded-xl text-white w-full sm:w-2/4 text-xl p-5 sm:p-8 md:p-10 lg:p-12 xl:p-14'>
          <p className='text-justify'>
            I&apos;m <span className='text-yellow-300'>Madhav Ganesan</span>, a computer science student with a passion for <span className='text-yellow-300'>web development</span> and <span className='text-yellow-300'>artificial intelligence</span>. I am currently honing my skills and shaping my future as a <span className='text-yellow-300'>full stack developer</span>.
          </p>
          <p className='text-justify'>
            My journey in technology began with a curiosity for how things work and a desire to create innovative solutions. Over time, this curiosity has evolved into a deep interest in building dynamic and responsive web applications, as well as exploring the vast potential of AI to solve real-world problems.
          </p>
          <p className='text-justify'>
            I have experience with various programming languages and frameworks, which allows me to tackle both front-end and back-end development challenges. I enjoy learning new technologies and constantly seek opportunities to expand my knowledge and skills.
          </p>
        </div>
        <div className='rounded-xl text-white w-full sm:w-2/4 flex flex-col gap-5 p-5 sm:p-8 md:p-10 lg:p-12 xl:p-14'>
          <div className='flex flex-col gap-5'>
            <p className='text-white text-3xl font-bold'>Languages:</p>
            <div className="flex gap-4 text-yellow-300">
              <IoLogoJavascript className='w-10 h-10' />
              <SiCplusplus className='w-10 h-10' />
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='text-white text-3xl font-bold'>Skills:</p>
            <div className='grid grid-cols-2 gap-4 text-yellow-300 md:grid-cols-4'>
              <FaHtml5 className='w-10 h-10' />
              <FaCss3Alt className='w-10 h-10' />
              <FaReact className='w-10 h-10' />
              <FaNode className='w-10 h-10' />
              <SiMysql className='w-10 h-10' />
              <DiMongodb className='w-10 h-10' />
              <RiTailwindCssFill className='w-10 h-10' />
              <RiNextjsFill className='w-10 h-10' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
