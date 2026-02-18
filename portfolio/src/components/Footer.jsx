import React from "react";
import NavLinks from "./NavLinks";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black w-full flex justify-center">
      <div className="flex gap-2 justify-between max-w-7xl w-full p-4">
        <div className="text-xs md:text-sm [&>div>ul]:flex [&>div>ul]:space-x-2 break-all">
          <NavLinks />
        </div>
        <span className="text-gray-300 font-medium text-sm md:text-base">
          @CopyRight {year}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
