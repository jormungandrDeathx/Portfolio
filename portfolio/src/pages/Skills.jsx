import React from "react";
import Skill from "../assets/data/skills_data.json";
import html from "../assets/images/html-5.png";

function Skills() {
  return (
    <div className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen pt-10">
      <div className="flex flex-col justify-center items-center py-10 mx-2 gap-5">
        <h1 className="text-3xl md:text-4xl font-semibold text-violet-400 underline underline-offset-4 decoration-gray-300 mb-4">
          What I do
        </h1>
        <div className=" max-w-6xl w-full grid grid-cols-2 md:grid-cols-3 gap-4">
          {Skill.map((sk, index) => (
            <div key={index} className="bg-[#1a1a2e] hover:bg-[#222244] hover:shadow-2xs hover:scale-102  transition flex flex-col items-center justify-center gap-2 p-4 rounded-lg">
              <img src={sk.logo} alt="png" className="w-15 h-15 md:w-20 md:h-20 rounded-md " />
              <h1 className="md:text-xl text-gray-300 font-semibold hover:text-white break-all">{sk.lang}</h1>
              <p className="text-sm md:text-base text-gray-400 wrap-break-word hyphens-auto" lang="en">{sk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
