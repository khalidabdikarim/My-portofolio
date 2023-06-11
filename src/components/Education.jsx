import React from "react";

function Education () {
  return (
    <div className="py-2 px-8 text-white bg-gradient-to-b from-gray-800 to-black">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Education <span className="text-cyan-600">& Experience</span>
        </h3>
      </div>

      <section className="py-10 px-20 md:py-10">
        <div className="container mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-b from-gray-800 to-black shadow rounded-lg p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-300 mb-2">
                Education
              </h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>
                  Master of Software Engineering - Universiti Putra Malaysia
                  (2019-2021)
                </li>
                <li>
                  Bachelor of Computer Science and Information technology -
                  SIMAD University (2011-2016)
                </li>
                <li>High School - Al-imam ibnukhuzeyma (2017-2011)</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-gray-800 to-black shadow rounded-lg p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-300 mb-2">
                Experience
              </h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Software Engineer - Upwork (2021-present)</li>
                <li>IT Support Specialist - Faruq Public Notary (2017-2019)</li>
                <li>Network Technician - SomStar internet service provider (ISP) Feb 2016 - Aug 2017 (1 year 7 months)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-16 md:py-16">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold ">
        Public<span className="text-cyan-600">ation</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">International Journal of Synergy in Engineering and Technology Vol. 3 No.2 (2022) 52-6</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="">
            <div className="bg-gradient-to-b from-gray-800 to-black shadow rounded-lg p-8">
              <h6 className="text-lg md:text-xl font-bold text-gray-400 mb-2">
                A Tool to Detect Pragmatic Ambiguity with Possible
                Interpretations Suggestion in Software Requirement
                Specifications
              </h6>
              <a href="https://tatiuc.edu.my/ijset/index.php/ijset/article/view/141" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Read More</a>
              </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
