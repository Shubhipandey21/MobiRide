import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import PoolGoLogo from '../../assets/pool go.svg';

export const Navlinks = [
  { id: 1, name: "HOME", link: "#" },
  { id: 2, name: "ABOUT US", link: "#about" },
  { id: 3, name: "WHY US", link: "#services" },
  { id: 4, name: "STEPS", link: "#steps" },
  { id: 5, name: "CONTACT US", link: "#contact" },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className={`relative z-10 shadow-md w-full duration-300 
        ${theme === "dark" ? "bg-black" : "bg-[#0D2F3A]"} 
        ${theme === "dark" ? "text-white" : "text-white"}`}
    >
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <img src={PoolGoLogo} alt="Logo" className="w-32 h-auto p-3" />
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="text-lg font-medium hover:text-primary py-2 
                      hover:border-b-2 hover:border-primary transition-colors duration-500"
                    onClick={() => {
                      if (link === "#") window.location.reload();
                    }}
                  >
                    {name}
                  </a>
                </li>
              ))}
              <a
                href="/download"
                className={`ml-4 px-4 py-2 font-medium rounded
                  ${theme === "dark" ? "bg-[#D7DF7F] text-black" : "bg-white text-[#0D2F3A]"} 
                  transition-colors duration-300`}
              >
                Download App
              </a>
              {/* Dark mode toggle */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer"
                />
              )}
            </ul>
          </nav>
          {/* Mobile view */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Dark mode toggle for mobile */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      {/* Responsive menu component */}
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
