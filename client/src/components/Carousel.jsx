import { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";


import data from './data.json';

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    
    <div className="carousel my-8mx-auto w-full">
          <p className={styles.sectionSubText}>a few moments and memories from our past</p>
          <h2 className={styles.sectionHeadText}>Our Gallery</h2>
      {/* <h2 className={styles.sectionHeadText}>
        Gallery
      </h2> */}
      <div className="relative overflow-hidden border-2 border-solid border-[#ff8f00] mt-[30px] rounded-md">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-[#ff8f00]/60 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-[#ff8f00]/60 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item relative w-72 h-[200px] py-2 snap-start"
              >
                {/* <div className='bg-red-100 object-contain'> */}
                <a
                  // href={resource.link}
                  className="h-full w-full flex aspect-video  bg-left-top bg-contain bg-no-repeat xxs:ml-[10px]"
                  // className='flex justify-center aspect-square object-contain'
                  style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                >
                  {/* <img
                    src={resource.imageUrl || ''}
                    alt={resource.title}
                    className="hidden"
                  /> */}
                </a>
                {/* </div> */}
                {/* <a
                  // href={resource.link}
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.title}
                  </h3>
                </a> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
    
  );
};


export default SectionWrapper(Carousel, "gallery");
