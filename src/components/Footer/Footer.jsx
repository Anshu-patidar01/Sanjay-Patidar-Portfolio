import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Links } from "../../content";

function Footer() {
  return (
    <div className="flex justify-center md:block pt-5 w-full bg-outerBg-light dark:bg-outerBg-dark text-Normal-light dark:text-Normal-dark ">
      <div className="w-full md:w-[95%] bg-innerBg-light dark:bg-innerBg-dark md:rounded-e-full">
        <div className=" text-white pt-2 md:p-2">
          <div className="flex flex-row justify-center md:mt-5 md:gap-5  text-Normal-light dark:text-Normal-dark">
            <div className="w-10 h-10">
              <a href={Links.linkedin}>
                <FaLinkedin className="text-3xl rounded-full shadow-xl shadow-sky-950 hover:text-5xl hover:shadow-sky-700" />
              </a>
            </div>

            <div className="w-10 h-10">
              <a href={Links.instagram}>
                <FaInstagram className="text-3xl rounded-full shadow-xl shadow-sky-950 hover:text-5xl hover:shadow-sky-700" />
              </a>
            </div>
            <div className="w-10 h-10">
              <a href={"#"}>
                <FaFacebook className="text-3xl rounded-full shadow-xl shadow-sky-950 hover:text-5xl hover:shadow-sky-700" />
              </a>
            </div>
            <div className="w-10 h-10">
              <a href={"#"}>
                <FaXTwitter className="text-3xl rounded-full shadow-xl shadow-sky-950 hover:text-5xl hover:shadow-sky-700" />
              </a>
            </div>
          </div>

          <div>
            <ul className="flex gap-2 md:gap-5 justify-center my-3  text-Normal-light dark:text-Normal-dark">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#Profile">Profile</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </ul>
          </div>

          <div className="flex justify-center items-center text-sm gap-2 text-Normal-light dark:text-Normal-dark">
            <p>Copyright </p>
            <FaRegCopyright />
            <p>2024</p>
            <a
              className=" text-slate-100 dark:text-sky-300 cursor-pointer"
              href="https://persional-portfolio-mocha.vercel.app/"
            >
              {" "}
              Developed By: Anshu Patidar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
