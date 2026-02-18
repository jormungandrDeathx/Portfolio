import React from "react";
import project from "../assets/data/projects_data.json";
import { Link } from "react-router-dom";
import Github from "../assets/images/github.png";
import Website from "../assets/images/website.png";
function Project() {
  return (
    <div className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen flex  flex-col justify-center items-center py-10">
      <div className="flex flex-col items-center justify-center my-12 md:mb-12 md:mt-0">

      <h1 className="text-center text-violet-500 underline underline-offset-4 decoration-gray-300/50 text-4xl font-semibold ">Projects</h1> <br/><span className="text-lg md:text-xl font-normal text-gray-300 text-center">
        Some of the work I have build and experimented with.</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 max-w-7xl w-full md:mx-2">
        {project.map((proj, index) => (
          <div
            key={index}
            className="bg-[#1a1a2e] hover:bg-[#222244] hover:shadow-white hover:scale-102  transition flex flex-col md:flex-row items-center justify-center gap-2 p-4 rounded-lg"
          >
            <div className="flex flex-col">
              <img src={proj.logo} alt="" className="rounded-2xl" />
              <h1 className="text-xl md:text-2xl text-gray-300 font-semibold text-center py-2">
                {proj.title}
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <p
                className="text-sm md:text-base text-gray-400 wrap-break-word hyphens-auto"
                lang="en"
              >
                {proj.description}
              </p>
              <div className="flex gap-2 [&>div>img]:w-18 [&>div>img]:hover:scale-102 [&>div>a]:text-gray-300 [&>div>a]:hover:text-blue-500 [&>div>a]:text-sm [&>div>a]:hover:underline [&>div>a]:hover:underline-offset-2 [&>div>a]:hover:transition [&>div]:flex [&>div]:flex-col [&>div]:items-center">
                <div>
                    <img src={Github} alt="Github" />
                  <Link to={proj.repo}>
                    Github Repo
                  </Link>
                </div>
                <div>
                    <img src={Website} alt="working website" />
                  <Link>
                    Working Website
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
