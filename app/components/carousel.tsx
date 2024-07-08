import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Tag from './tag';

interface ProjectItem {
  title: string;
  techUsed: string[];
  repo: string;
  link: string;
  imageUrl: StaticImageData;
}

interface CarouselProps {
  slides: ProjectItem[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="relative sm:w-3/4 w-full overflow-hidden">
      <div
        ref={slideRef}
        className="flex transition-transform duration-500 ease-in-out"
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full bg-white flex flex-col pb-2 rounded-lg shadow-lg">
            <div className='flex justify-center items-center'>
              <Image src={slide.imageUrl} alt={slide.title} className="w-3/4 h-3/4 p-4 m-4 pr-10 rounded-lg border-4" />
            </div>
            <div className="pr-6 pl-6 pb-6">
              <div className="text-xl font-bold mb-2">{slide.title}</div>
              <div className="text-gray-700 mb-4 flex justify-start gap-2">
                {slide.techUsed.map((tech, techIndex) => (
                  <Tag name={tech} link='www.google.com' key={techIndex} />
                ))}
              </div>
              <div className="flex justify-center gap-3">
                <button className="hover:bg-yellow-300 hover:text-white bg-white text-black rounded-full border-2 border-yellow-500 p-2">
                  <a href={slide.repo} target="_blank" rel="noopener noreferrer">Repository</a>
                </button>
                {/* <button className="hover:bg-yellow-300 hover:text-white bg-white text-black rounded-full border-2 border-yellow-500 p-2">
                  <a href={slide.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-800 text-white w-10 h-10 p-2 rounded-full"
        onClick={goToPreviousSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-800 text-white w-10 h-10 p-2 rounded-full"
        onClick={goToNextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;