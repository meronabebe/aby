import React from "react";

import { building,classs,erp } from "../assets";
import SASBenefitsPage from "./SASBenefitsPage";
import { useState } from 'react';
import SmsPage from "./SmsPage"
import InnovationPage from "./InnovationPage"
const Projects = ({ content, name, title, img }) => {
  const [showSASBenefits, setShowSASBenefits] = useState(false);
  const [showsms, setsms] = useState(false);
  const [showinn, setinn] = useState(false);  // State to control visibility

  const toggleSASBenefits1 = () => {
    setShowSASBenefits(!showSASBenefits); // Toggle the visibility on button click
  };
  const toggleSASBenefits2 = () => {
    setsms(!showsms); // Toggle the visibility on button click
  };
  const toggleSASBenefits3 = () => {
    setinn(!showinn); // Toggle the visibility on button click
  };

  return (
    <>
    
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 bg-gray-600 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black">
    
    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <img
          src={building}
          alt={name}
          className="w-[400px] h-[174px] mb-5 object-cover filter opacity-50 transition-opacity duration-300 hover:opacity-100"
        />
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
        building system
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
        mall building information management system
        </p>
      </div>
    </div>
    
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
    we provide a complete mall information management system with web application and mobile application.
    </p>
    
   <button
        type="button"
        className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none"
        onClick={toggleSASBenefits1} // Toggle visibility on click
      >
        <a href={`#buil`}>{showSASBenefits ? 'Hide ▲' : 'Explore more ▼'}</a>
      </button>

  </div>
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 bg-gray-600 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black">
    
    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <img
          src={classs}
          alt={name}
          className="w-[400px] h-[174px] mb-5 object-cover filter opacity-50 transition-opacity duration-300 hover:opacity-100"
        />
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
        School system
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
        school information system
        </p>
      </div>
    </div>
    
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
    we provide a complete school information system to manage all school activities. it has web app,mobile app and desktop app from school manager , for students and for parents
    </p>
    
   <button
        type="button"
        className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none"
        onClick={toggleSASBenefits2} // 
      >
        <a href={`#smss`}>{showsms ? 'Hide ▲' : 'Explore more ▼'}</a>
      </button>

    
  </div>
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 bg-gray-600 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-black">
    
    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <img
          src={erp}
          alt={name}
          className="w-[400px] h-[174px] mb-5 object-cover filter opacity-50 transition-opacity duration-300 hover:opacity-100"
        />
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
        ERP system
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
       
        </p>
      </div>
    </div>
    
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
    a complete erp system for factories and trading companies.
    </p>
    
   <button
        type="button"
        className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none"
        onClick={toggleSASBenefits3} // Toggle visibility on click
      >
        <a href={`#erp`}>{showinn ? 'Hide ▲' : 'Explore more ▼'}</a>
      </button>

  </div>

  {showSASBenefits && <SASBenefitsPage />}
    {/* Render the SASBenefitsPage if showSASBenefits is true */}
    {showsms && <SmsPage />}
    {showinn && <InnovationPage />} 
  </>
  
);
};
export default Projects;
