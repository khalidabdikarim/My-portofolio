import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          A Software Engineer with experience working in programming, software
          development, and consulting. Holds comprehensive technical capability
          skills and strong knowledge of programming, software, and website
          development. Dedicated to meeting customer requirements with
          innovative solutions that maximize efficiency and exceed capability
          targets.
        </p>

              </div>
    </div>
  );
};

export default About;
