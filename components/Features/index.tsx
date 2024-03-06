"use client";
import React, { useEffect, useState } from "react";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  const [content, setContent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

 // Function to load content
 const loadContent = () => {
  const storedContent = localStorage.getItem('feature');
  if (storedContent) {
    setContent(JSON.parse(storedContent));
  }
};

useEffect(() => {
  loadContent(); // Load content on initial mount

  // Define a handler for storage changes
  const handleStorageChange = (e) => {
    if (e.key === 'feature') {
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
        const response = await fetch('/feature.json');
        const data = await response.json();
        setContent(data);
        localStorage.setItem('feature', JSON.stringify(data));
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
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "AKHIL HEALTHCARE IT SOLUTIONS",
              subtitle: "Empowering Global Healthcare with Technology",
              description: `With over 29 years of dedication to healthcare IT, Akhil Pvt Limited stands at the forefront of innovation, offering comprehensive Hospital Information Systems (HIS) that cater to hospitals, clinics, and pharmacies across 14+ countries. Our cloud-based solutions ensure operational excellence and enhanced patient care through web-accessible and mobile-friendly platforms, adhering to international standards like JCI, NABH, NABL, HL7, and HIPAA.`,
            }}
          />


          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">


            {content && content.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
