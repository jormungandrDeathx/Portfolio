import React from "react";
import { Link } from "react-router-dom";
import data from "../assets/data/education_data.json";
import cert from "../assets/data/certification.json";
import { FaUniversity } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { PiCertificate } from "react-icons/pi";
import { ImDatabase } from "react-icons/im";
import { FaLink } from "react-icons/fa6";
import { SiUdemy } from "react-icons/si";
function Education() {
  return (
    <div className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen pt-10 flex flex-col justify-center items-center">
      <div className="py-10 mx-2">

      <div>
        <h1 className="flex  items-center  gap-2 text-3xl font-semibold  text-violet-500 underline decoration-gray-300 underline-offset-4">
          <GiBookCover className="text-gray-400" />
          Education
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-2">
          {data.map((edu, index) => (
            <div
              key={index}
              className="bg-[#1a1a2e] hover:bg-[#222244] p-4 rounded-md transition hover:scale-102 max-w-2xl"
            >
              <h1 className="text-lg md:text-2xl font-semibold text-[#00ADB5] flex">
                <GoDotFill className="text-yellow-300" />
                {edu.degree}
              </h1>
              <p className="flex gap-2 text-gray-300 text-sm md:text-base">
                <FaUniversity className="text-gray-300" />
                {edu.institution}
              </p>
              <p className="text-gray-400 text-xs md:text-base">{edu.year}</p>
              <p className="text-gray-300 text-sm md:text-base">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h1 className="text-3xl font-medium text-violet-500 flex items-center gap-2 my-5 underline decoration-gray-300 underline-offset-4">
          <PiCertificate className="text-yellow-500"/>
          Certifications
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
          {cert.map((certficate, index) => (
            <div key={index} className="max-w-2xl bg-[#1a1a2e] hover:bg-[#222244] p-4 rounded-md transition hover:scale-102">
              <h1 className="text-lg md:text-2xl font-semibold text-[#00ADB5] flex gap-2">{certficate.cat !== "db"?<GoDotFill className="text-yellow-300" />:certficate.cat==="db"?<ImDatabase className="text-sm text-gray-300"/>:undefined}{certficate.name}</h1>
              <p className="text-gray-400 font-medium flex gap-2"><SiUdemy className="text-purple-500"/>{certficate.issued}</p>
              <Link to={certficate.link} className="flex items-center gap-2 text-gray-500 hover:underline hover:underline-1 hover:text-blue-600"><FaLink/>Click to view</Link>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Education;
