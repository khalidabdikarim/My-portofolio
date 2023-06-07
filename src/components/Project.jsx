import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import pragmatictool from "../assets/portfolio/pragmatictool.jpg";
import Myportofolio from "../assets/portfolio/Myportofolio.png";
import techbridge from "../assets/portfolio/techbridge.png";
import plantrip from "../assets/portfolio/plantrip.png";

import reactwithfirebase from "../assets/portfolio/reactwithfirebase.JPG";
import portofolio from "../assets/portfolio/portofolio.JPG";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: techbridge,
      name: "TechBridge Solutions",
      github_link: "https://github.com/khalidabdikarim/TechBridge-Solutions",
      live_link: "https://techbridge-solutions.netlify.app/",
    },
    {
      img: plantrip,
      name: "Plan your trip",
      github_link:
        "https://github.com/khalidabdikarim/Plan-Your-Trip-in-somalia",
      live_link: "https://plan-your-trip-in-somalia.netlify.app/",
    },
    {
      img: Myportofolio,
      name: "My portofolio",
      github_link: "https://github.com/khalidabdikarim/My-portofolio",
      live_link: "https://khalid-portofolio.netlify.app/",
    },
    {
      img: reactwithfirebase,
      name: "React With firebase V9",
      github_link: "",
      live_link: "",
    },
    {
      img: pragmatictool,
      name: "SRS checker ",
      github_link: "",
      live_link: "https://srschecker.herokuapp.com/",
    },
  ];
  return (
    <section
      id="projects"
      className="py-10 px-20 text-white bg-gradient-to-b from-black to-gray-800"
    >
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={portofolio} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
