import React from "react";
import "./skills.css";
import { Skills_discription } from "../../content";
import { BiCaretRight } from "react-icons/bi";
import { FaCaretRight, FaDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
function Skills() {
  return (
    <div
      id="skills"
      className="flex items-center flex-col bg-outerBg-light text-Normal-light dark:text-Normal-dark dark:bg-outerBg-dark h-auto w-full pt-20"
    >
      <h1 className="cuestom__text-head  text-5xl text-center font-semibold ">
        Key Skills
      </h1>
      <div className=" mx-16">
        <div className="mt-8 flex flex-col lg:grid lg:grid-cols-2 lg:flex-row gap-12 lg:mx-24 lg:mt-12  lg:gap-20">
          {Skills_discription.map((item, index) => (
            <div
              key={index}
              className="  p-5 rounded-xl shadow-xl shadow-sky-900 cursor-pointer hover:shadow-sky-600"
            >
              <div className="flex justify-center items-center gap-2">
                <GoDotFill />

                <h1 className="text-2xl text-center font-semibold hover:text-violet-700">
                  {item.title}
                </h1>
              </div>
              <div className=" grid grid-cols-2 lg:ms-8 gap-3 font-semibold  mt-5 ">
                {item.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 ">
                    <FaCaretRight />
                    <p key={i} className="hover:text-violet-500">
                      {skill}{" "}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[90%] h-0.5 bg-slate-500 mt-20 lg:mt-28"></div>
    </div>
  );
}
export default Skills;
