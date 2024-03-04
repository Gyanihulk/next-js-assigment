"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [content, setContent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

 // Function to load content
 const loadContent = () => {
  const storedContent = localStorage.getItem('heroContent');
  if (storedContent) {
    setContent(JSON.parse(storedContent));
  }
};

useEffect(() => {
  loadContent(); // Load content on initial mount

  // Define a handler for storage changes
  const handleStorageChange = (e) => {
    if (e.key === 'heroContent') {
      loadContent(); // Load the new content when storage changes
    }
  };

  // Add event listener for storage changes
  window.addEventListener('storage', handleStorageChange);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('storage', handleStorageChange);
  };
}, []);

// Fetch from the public directory as a fallback if local storage is empty
useEffect(() => {
  if (content === null) {
    const fetchContent = async () => {
      try {
        const response = await fetch('/heroSection.json');
        const data = await response.json();
        setContent(data);
        localStorage.setItem('heroContent', JSON.stringify(data));
      } catch (error) {
        console.error('Fetching error:', error);
      }
    };

    fetchContent();
  }
}, [content]);

  if (!content) {
    // You can render a loading state or return null to render nothing
    return <div>Loading...</div>;
  }

console.log(content)
  const {
    smallHeading,
    mainHeading,
    description,
    emailPlaceholder,
    ctaText,
    trialInfo,
    images,
  } = content.heroSection;

  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className="md:w-1/2">
            <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              {smallHeading}
            </h4>
            <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
              {mainHeading}{" "}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
              </span>
            </h1>
            <p>{description}</p>

            <div className="mt-10">
              
                <div className="flex flex-wrap gap-5">
                 
                  <button
                    type="submit"
                    aria-label="get started button"
                    className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                  >
                    Sign In
                  </button>
                  <button
                    type="submit"
                    aria-label="get started button"
                    className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                  >
                    Sign Up
                  </button>
                </div>
            </div>
          </div>

          <div className="animate_right hidden md:w-1/2 lg:block">
            <div className="relative 2xl:-mr-7.5">
              {Object.values(images).map((image, index) => (
                <div key={index} className="absolute">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width || 'auto'}
                    height={image.height || 'auto'}
                    className={image.className || ''}
                  />
                </div>
              ))}
              <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
