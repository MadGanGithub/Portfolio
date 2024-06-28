import React from 'react';
import Carousel from './carousel';
import project1 from "@/public/images1.jpg";
import project2 from "@/public/four.jpg";
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
      link: "www.google.com",
      imageUrl: project1
    },
    {
      title: "E-commerce Site",
      techUsed: ["React", "Express", "MongoDB"],
      repo: "https://github.com/MadGanGithub/Ecommerce",
      link: "www.example.com",
      imageUrl: project1
    },
    {
      title: "Portfolio",
      techUsed: ["Next.js", "Tailwind CSS"],
      repo: "https://github.com/MadGanGithub/Portfolio",
      link: "www.portfolio.com",
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
