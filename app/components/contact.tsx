import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e: any) => {
    e.preventDefault();
    try {

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='text-white flex flex-col justify-center items-center gap-14'>

      <p className='text-6xl font-bold'>Contact Me!</p>

      <div className='flex flex-col justify-around gap-6 sm:flex-row'>

        <div className='flex flex-col w-full sm:w-3/5 gap-3 text-black'>
          <input type='text' onChange={(e) => setName(e.target.value)} value={name} placeholder='YOUR NAME' className='p-2' />
          <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='YOUR EMAIL' className='p-2' />
          <input type='text' onChange={(e) => setSubject(e.target.value)} value={subject} placeholder='SUBJECT' className='p-2' />
          <textarea onChange={(e) => setMessage(e.target.value)} value={message} placeholder='MESSAGE' className='p-2 py-6' />
          <button className="bg-yellow-300 p-2 text-black rounded-lg" onChange={handleSend}>Send</button>
        </div>

        <div className='flex flex-col w-full gap-4 sm:w-2/5'>
          <div className='text-2xl'>
            Connect with me on:
          </div>
          <div className='flex justify-evenly'>
            <a href="https://github.com/MadGanGithub" target="_blank" rel="noopener noreferrer">
              <FaGithub className='w-10 h-10' />
            </a>
            <a href="https://linkedin.com/in/madhav-ganesan-19b0a5253" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='w-10 h-10' />
            </a>
            <a href="https://twitter.com/madhavganesan" target="_blank" rel="noopener noreferrer">
              <FaTwitter className='w-10 h-10' />
            </a>
          </div>
          <div className='text-2xl'>
            Check out my blog:
          </div>
          <div className='flex justify-evenly'>
            <a href="https://dev.to/madgan95" target="_blank" rel="noopener noreferrer">
              <FaDev className='w-10 h-10' />
            </a>
            <a href="https://madhavganesan.hashnode.dev" target="_blank" rel="noopener noreferrer">
              <FaHashnode className='w-10 h-10' />
            </a>
          </div>
          <div className='flex flex-col text-2xl'>
            Mail me:
            <a href="mailto:madhavganesan95@gmail.com" className='hover:underline hover:decoration-yellow-300 hover:decoration-2'>madhavganesan95@gmail.com</a>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Contact
