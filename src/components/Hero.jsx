import React from "react";
import heroImage from "../assets/heroImage.png";
const Hero = () => {

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center bg-gradient-to-b from-black to-gray-800"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={heroImage} alt="" className="md:w-8/12 h-round object-cover rounded-3xl" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-5xl text-5xl">
              Hello!
              <br />
            </span>
          
          </h1>
          
          <p className="text-gray-500 py-4 max-w-md text-justify leading-7 w-11/12  ">
            I'm Khalid Abdikarim Mohmaed, I graduated from the
            University Putra Malaysia (UPM) in 2021 with a master in software
            engineering. I love to work on web application using technologies
            like React, Tailwind, JavaScript, bootstrap, nextjs, expressjs,
            Nodejs, and, mangoDB to create a beautiful and performant products
            with delightful user experiences. .
          </p>
          
          </div>
      </div>
      
     
    </section>
    
    
  );
};

export default Hero;
