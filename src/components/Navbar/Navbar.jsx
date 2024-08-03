import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./navbar.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { GiCrossMark } from "react-icons/gi";

function Navbar() {
  // theme functionality
  const [mode, setmode] = useState("dark");
  const [toggle, settoggle] = useState(true);
  const button1 = useRef("null");
  const menu = useRef("null");

  // for the browser mode

  // useEffect(() => {
  //   if (window.matchMedia(`(prefers-color-scheme:dark)`).matches) {
  //     setmode("dark");
  //   } else {
  //     setmode("light");
  //   }
  // }, []);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // mode === "dark"
    //   ? document.documentElement.classList.add("dark")
    //   : document.documentElement.classList.remove("light");
  }, [mode]);

  const handleTheme = () => {
    setmode(mode === "dark" ? "light" : "dark");
  };

  const handleMenu = (e) => {
    e.preventDefault();
    if (toggle === true) {
      menu.current.innerHTML = `
      
            <a href="#home">Home</a>
            <a href="#Profile">Profile Summary</a>
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </ul>
        `;
      settoggle(false);
    } else {
      menu.current.innerHTML = ``;
      settoggle(true);
    }
  };
  return (
    <div className="flex flex-col bg-outerBg-light text-Normal-light pb-6 dark:text-Normal-dark  dark:bg-outerBg-dark  w-full ">
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-row test-color1 justify-between items-center py-1 px-5 w-[85%] tracking-wider">
          <a href="#" className="text-[35px] font-bold cursor-pointer">
            Sanjay
          </a>
          <ul className="my-2 px-16 py-4 rounded-full text-[14px] font-semibold hidden shadow-lg shadow-sky-700 hover:shadow-sky-900 xl:flex xl:items-center lg:gap-10 ">
            <a href="#home">Home</a>
            <a href="#Profile">Profile Summary</a>
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </ul>
          <div className="flex justify-center items-center gap-3">
            <div className="flex justify-center items-center  lg:w-40 hover:text-lg">
              <button
                className="md:flex md:items-center md:justify-center my-1 rounded-full shadow-lg border-[3px] cursor-pointer bg-slate-300 md:w-auto  border-slate-900 shadow-sky-600 p-[1px] md:p-[3px] "
                onClick={handleTheme}
                ref={button1}
              >
                <div className=" ">
                  {mode === "dark" && (
                    <MdLightMode className="text-black text-xl hover:text-3xl " />
                  )}
                  {mode === "light" && (
                    <MdDarkMode className="text-xl hover:text-3xl" />
                  )}
                </div>
                <h1 className="text-slate-950 font-semibold hidden md:block">
                  Enable {mode === "dark" ? "Light" : "Dark"}
                </h1>
              </button>
            </div>
            <div>
              {toggle === true && (
                <AiOutlineMenu
                  className=" xl:hidden text-3xl"
                  onClick={(e) => handleMenu(e)}
                />
              )}
              {toggle === false && (
                <GiCrossMark
                  className=" xl:hidden text-3xl"
                  onClick={(e) => handleMenu(e)}
                />
              )}
              {/* <AiOutlineMenu
                className=" lg:hidden text-3xl"
                onClick={(e) => handleMenu(e)}
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="px-14 xl:hidden">
        <div className="bg-innerBg-light dark:bg-innerBg-dark rounded-xl">
          <ul
            className=" flex flex-col justify-center items-center gap-5"
            ref={menu}
          ></ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
