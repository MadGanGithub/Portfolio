"use client"

import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";

const AppBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll('nav a, .sidebar a');

    const handleLinkClick = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.substring(1);
      const targetElement = document.getElementById(targetId ?? '');

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }

      setIsMobileMenuOpen(false);
    };

    links.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);


  return (
    <div className='fixed flex bg-appbar w-screen h-1/7 justify-around p-5 text-white'>
      <div className='font-medium'>
        Madhav Ganesan
      </div>
      <div className='sm:hidden p-2'>
        <FaBars onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='cursor-pointer' />
      </div>
      <div className='hidden sm:flex'>
        <ul className='flex flex-row gap-10'>
          <li className='hover:underline decoration-yellow-300 decoration-4 underline-offset-8'><a href="#home">Home</a></li>
          <li className='hover:underline decoration-yellow-300 decoration-4 underline-offset-8'><a href="#about">About</a></li>
          <li className='hover:underline decoration-yellow-300 decoration-4 underline-offset-8'><a href="#projects">Projects</a></li>
          <li className='hover:underline decoration-yellow-300 decoration-4 underline-offset-8'><a href="#contact">Contact</a></li>
        </ul>
      </div>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-1/2 bg-appbar z-50 transform transition-transform ease-in-out duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className='flex flex-col gap-5 p-5 sidebar'>
          <li className='hover:underline decoration-red-600 decoration-4 underline-offset-8'><a href="#home">Home</a></li>
          <li className='hover:underline decoration-red-600 decoration-4 underline-offset-8'><a href="#about">About</a></li>
          <li className='hover:underline decoration-red-600 decoration-4 underline-offset-8'><a href="#skills">Skills</a></li>
          <li className='hover:underline decoration-red-600 decoration-4 underline-offset-8'><a href="#projects">Projects</a></li>
        </ul>
      </div>
      {/* Overlay */}
      {isMobileMenuOpen && <div className='fixed inset-0 bg-black opacity-50 z-40' onClick={() => setIsMobileMenuOpen(false)}></div>}
    </div>
  )
}

export default AppBar;
