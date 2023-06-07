import React from "react";
import image12 from "../assets/image12.jpg";
const Hireme = () => {
  return (
    <section
      id="hireme"
      className="py-10 px-3 text-white bg-gradient-to-b from-gray-800 to-black "
    >
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6 w-11/11">
            I possess technical expertise and excellent communication and
            interpersonal skills, which I have honed through working with users
            of different levels of technical ability. I am a patient listener
            who takes the time to understand the problem and provide clear and
            concise explanations to users in a way that they can understand. I
            am a proactive and self-motivated individual who takes pride in
            staying up-to-date with the latest technological advancements. I am
            confident that I can offer this same level of enthusiasm and
            commitment to you and contribute to your success.
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img
          src={image12}
          alt=""
          className="lg:h-[24rem] h-80 lg:absolute bottom-0 -right-0 object-cover "
        />
      </div>
    </section>
    
    
  );
};

export default Hireme;
