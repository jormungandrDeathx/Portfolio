import React, { Activity, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from "./NavLinks";
import { motion } from "motion/react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNavOpen(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [isNavOpen]);
  return (
    <div className="bg-black max-w-7xl w-full rounded-b-2xl fixed top-0 p-4 hover:shadow-2xl hover:transition z-99">
      <div className="flex justify-between mx-2">
        <div className="text-[#F5F5F5] [&>span]:text-xl [&>span]:md:text-2xl font-semibold">
          <span className="">Gokul</span>
        </div>
        <div className="hidden md:block text-gray-400 [&>div>ul]:flex [&>div>ul]:flex-col [&>div>ul]:md:flex-row [&>div>ul]:gap-3 [&>div>ul>a]:hover:text-white [div>&>ul>a]:hover:transition [&>div>ul>a]:hover:cursor-pointer [&>div>ul>a]:font-medium">
          <NavLinks />
        </div>
        <div className="block md:hidden">
          <button onClick={() => setIsNavOpen(!isNavOpen)}>
            <GiHamburgerMenu className="invert text-xl" />
          </button>
          <Activity mode={isNavOpen ? "visible" : "hidden"}>
            <motion.div
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full right-0 [&>div>ul]:flex [&>div>ul]:flex-col [&>div>ul]:gap-2 [&>div>ul]:bg-gray-700 [&>div>ul]:p-2 [&>div>ul]:rounded-b"
            >
              <NavLinks />
            </motion.div>
          </Activity>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
