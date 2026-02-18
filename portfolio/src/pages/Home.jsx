import Profile from "../assets/images/HomePage_Hero_Section.png";
import { Link } from "react-router-dom";
import Github from "../assets/images/github.png";
import Linkedin from "../assets/images/linkedin.png";
function Home() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center py-20">
        <div className="px-2">
          <h1 className="text-3xl md:text-4xl text-[#6298DA]">Hi, there </h1>
          <span className=" text-2xl md:text-4xl font-medium text-gray-900">
            I am Web Developer
          </span>

          <p className="text-gray-600 text-sm md:text-base py-1">
            {" "}
            Full Stack Developer | React | Django | Python
          </p>
          <p className="text-xs md:text-lg text-gray-400 break-all py-1">
            Full Stack Developer passionate about building modern web
            applications using React, Django, and Python. I focus on creating
            clean, responsive, and user-friendly interfaces.
          </p>
          <h1 className="mt-5 text-center md:text-left text-sm md:text-lg text-gray-800 pl-2">Lets Connect</h1>
          <div className="flex justify-center md:justify-normal [&>a>img]:w-14 [&>a>img]:h-14 [&>a>img]:md:w-20 [&>a>img]:md:h-auto [&>a>img]:hover:scale-110 [&>a>img]:transition">
            <Link to="https://www.linkedin.com/in/gokulg28/" title="LinkedIn">
              <img src={Linkedin} alt="" />
            </Link>
            <Link to="https://github.com/jormungandrDeathx/" title="GitHub">
              <img src={Github} alt="" />
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Profile}
            alt=""
            className="rounded-md hover:shadow-[0px_5px_5px_-5px_rgba(0,0,0,1)] hover:transition border-b-2 border-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
