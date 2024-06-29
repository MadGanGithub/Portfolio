import React from 'react';
import Carousel from './carousel';
import project1 from "@/public/madstuffs.jpg";
import project2 from "@/public/portfolio.jpg";
import { StaticImageData } from 'next/image';

interface ProjectItem {
  title: string;
  techUsed: string[];
  repo: string;
  link: string;
  imageUrl: StaticImageData;
}

const Projects = () => {
  const items: ProjectItem[] = [
    {
      title: "Blog App",
      techUsed: ["ReactJs", "NodeJs", "MongoDb", "ExpressJs"],
      repo: "https://github.com/MadGanGithub/MadStuffs",
      link: "https://mad-stuffs.vercel.app/",
      imageUrl: project1
    },
    {
      title: "Portfolio",
      techUsed: ["Next.js", "Tailwind CSS"],
      repo: "https://github.com/MadGanGithub/Portfolio",
      link: "www.madstuffs.online",
      imageUrl: project2
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <p className='text-white text-6xl font-bold'>Projects</p>
      <Carousel slides={items} />
    </div>
  );
};

export default Projects;
