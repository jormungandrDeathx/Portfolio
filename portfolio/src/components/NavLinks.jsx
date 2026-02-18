import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
    const navTitles=[
        "Home",
        "Education",
        "Skills",
        "Projects",
        "Contact"
    ]
    const navPaths = [
        "/",
        "/education",
        "/skills",
        "/projects",
        "/contact"
    ]
  return (
    <div className="text-gray-300">
      <ul>
        {
            navPaths.map((path, index)=>{
                return (
                    <NavLink
                    key={index}
                    to={path}
                    className={({isActive})=>
                    isActive?"text-white underline underline-offset-4":"text-gray-400"
                    }>{
                        navTitles[index]
                    }
                        </NavLink>
                ) })
        }
      </ul>
    </div>
  );
}

export default NavLinks;
