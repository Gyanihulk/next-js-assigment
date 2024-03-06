"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { useEffect, useState } from "react";

const Dashboard = () => {

    const [formData, setFormData] = useState({
    smallHeading: '',
    mainHeading: '',
    description: '',
    emailPlaceholder: '',
    ctaText: '',
    trialInfo: '',

  });

  const loadContent = async () => {
    var storedContent = localStorage.getItem('heroContent');
    if (storedContent ) {
        storedContent=JSON.parse(storedContent)
        setFormData(storedContent); 
    } 
  };

  useEffect(() => {
    loadContent();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    localStorage.setItem('heroContent', JSON.stringify(formData));
   
  };

  const groupFormDataForRows = () => {
    return Object.entries(formData).reduce((result, entry, index) => {
      if (index % 2 === 0) {
        result.push([entry]);
      } else {
        result[result.length - 1].push(entry);
      }
      return result;
    }, []);
  };


  const groupedFormData = groupFormDataForRows();
console.log(formData,"form data")
  return (
    <>
      <section className="pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-17.5 left-0 -z-1 h-1/3 w-full">
            <Image
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>
  
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top rounded-lg bg-white px-7.5 pt-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:px-15 xl:pt-15"
          >
            <h2 className="mb-15 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              Update Hero Section
            </h2>
            <form onSubmit={handleSubmit}>
            {groupedFormData.map((row, rowIndex) => (
           <div  key={rowIndex} className="mb-7.5 flex flex-col gap-7.5 lg:mb-12.5 lg:flex-row lg:justify-between lg:gap-14">
            {row.map(([key, value]) => (
             
          
                <input
                key={key}
                  type="text"
                  id={key}
                  name={key}
                  value={value}
                  placeholder={key}
                  onChange={handleChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
      
            ))}
          </div>
        ))}
     

              <div className="flex flex-wrap items-end  gap-10 md:justify-between xl:gap-15">
                <div className="flex flex-wrap gap-4 md:gap-10">
                  <div className="mb-4 flex items-center ">
               
                  <button type="submit"
                  aria-label="login with email and password"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                  Save
                  <svg
                    className="fill-white"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                      fill=""
                    />
                  </svg>
                </button>
          
                  </div>

                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

    </>
  );
};

export default Dashboard;
