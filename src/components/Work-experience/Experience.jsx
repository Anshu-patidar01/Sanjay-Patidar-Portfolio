import React, { useRef, useState } from "react";
import "./experience.css";
import { Links, myExperience } from "../../content";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

function Experience() {
  const company1 = myExperience[0];
  const company2 = myExperience[1];
  const [projects, setProject] = useState(company1.projects[0]);
  const [projects2, setProject2] = useState(company2.projects[0]);
  const [check, setCheck] = useState(false);
  const toggle1 = (e) => {
    e.preventDefault();
    console.log(check);
    check ? setProject(company1.projects[0]) : setProject(company1.projects[1]);
    check ? setCheck(false) : setCheck(true);
  };

  // const toggle2 = (e, check) => {
  //   e.preventDefault();
  //   console.log(check);
  //   check ? setProject(company2.projects[0]) : setProject(company2.projects[0]);
  // };

  return (
    <div
      id="experience"
      className=" flex flex-col items-center bg-outerBg-light dark:bg-outerBg-dark text-Normal-light dark:text-Normal-dark h-auto w-full pt-20 "
    >
      <h1 className="text-5xl text-center cuestom__text-head font font-semibold mt-6">
        Work Experience
      </h1>

      <div className="h-full">
        {/* project 1 starts */}

        <div className="flex flex-col  justify-center items-center  bg-innerBg-light dark:bg-innerBg-dark lg:justify-normal shadow-xl shadow-sky-900 hover:shadow-sky-700   rounded-xl pt-3  mt-12 mx-4 lg:gap-5 lg:mx-36 pb-2 lg:p-5">
          <div className="flex flex-col items-center lg:flex-row gap-10 p-5 lg:p-2 lg:h-56">
            <img
              src={company1.IMGSmall}
              className="hidden lg:block w-72 lg:w-56 rounded-xl  bg-sky-950 dark:bg-black p-10"
              alt=""
            />
            <div className=" lg:hidden grid place-content-center bg-sky-900 dark:bg-black rounded-3xl w-full">
              <img
                src={company1.IMGSmall}
                className="lg:hidden w-44 p-8"
                alt=""
              />
            </div>
            <div className="ps-2 lg:ps-0">
              <h1 className="text-3xl lg:text-4xl font-semibold  lg:mt-2">
                {company1.companyName}
                <span className="text-[12px] lg:text-sm ">
                  {company1.time}
                </span>{" "}
              </h1>
              <p className="text-lg lg:text-xl">{company1.role}</p>
              <article className=" mt-2 lg:pe-16 lg:mt-6 ">
                {company1.workedOnProjects}
              </article>
            </div>
          </div>
          <div className="flex flex-row justify-between px-2 w-full mb-3">
            <button
              className="flex items-center justify-between custom__bg-button_color font-bold gap-2 pe-3 lg:p-1 text-[13px] text-slate-800 rounded-lg"
              onClick={(e) => toggle1(e)}
            >
              <FaChevronLeft
                id="pre"
                className="text-xl lg:text-3xl lg:hover:text-4xl"
              />
              <p>Previous</p>
            </button>
            <button
              className="flex items-center justify-between custom__bg-button_color font-bold gap-2 ps-3 lg:p-1 text-[13px] text-slate-800 rounded-lg"
              onClick={(e) => toggle1(e)}
            >
              <p>Next</p>
              <FaChevronRight className="text-xl lg:text-3xl hover:text-4xl" />
            </button>
          </div>
          <div className="flex text-slate-300 flex-row lg:rounded-tr-full lg:rounded-br-full lg:items-center px-2 lg:px-0 gap-2">
            <div className=" bg-sky-900 rounded-xl p-4 w-full">
              <span className="flex items-center gap-3">
                <FaRegCircleDot />
                <h1 className="text-2xl font-semibold">
                  {projects.projectName}
                </h1>
              </span>
              <div className="flex flex-col lg:flex-row gap-3 mt-4">
                <article className="lg:w-6/12 lg:p-2  ">
                  <span className="flex items-center gap-4">
                    <GoDotFill />
                    <h1 className="text-lg font-semibold">Discription</h1>
                  </span>
                  <p className="p-1 lg:p-2 px-2 lg:px-4">
                    {projects.discription}
                  </p>
                </article>
                <article className="lg:w-6/12 lg:p-2">
                  <span className="flex items-center gap-4">
                    <GoDotFill />
                    <h1 className="text-lg font-semibold">
                      Roles and Responsibility
                    </h1>
                  </span>

                  <div className="flex flex-col gap-1 p-1 lg:p-2 px-2 lg:px-4">
                    {projects.RolesAndResp.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        {/* project 1 end  */}

        <div className="flex flex-col  justify-center items-center  bg-innerBg-light dark:bg-innerBg-dark  lg:justify-normal shadow-xl shadow-sky-900 hover:shadow-sky-600 mt-20   rounded-xl  py-2 mx-4 lg:gap-5 lg:mx-36 lg:p-5">
          <div className="flex flex-col items-center lg:flex-row gap-10 p-5 lg:p-2 lg:h-56">
            <img
              src={company2.IMG}
              className="hidden lg:block w-72 lg:w-56 rounded-xl bg-sky-950 dark:bg-black p-10 "
              alt="TCS Image"
            />
            <img
              src={company2.IMGSmall}
              className="lg:hidden  rounded-3xl  bg-sky-900 dark:bg-black"
              alt=""
            />

            <div className="ps-2 lg:ps-0">
              <h1 className="text-3xl lg:text-4xl font-semibold  lg:mt-2">
                {company2.companyName + " "}
                <span className="text-[12px] lg:text-sm">
                  {company2.time}
                </span>{" "}
              </h1>
              <p className=" text-lg lg:text-xl">{company2.role}</p>
              <article className=" mt-2 lg:pe-16 lg:mt-6 ">
                {company2.workedOnProjects}
              </article>
            </div>
          </div>
          <div className="flex flex-row  lg:rounded-e-full text-slate-300  items-center px-2 lg:px-0 gap-2">
            <div className="rounded-xl bg-sky-900 p-4 w-full">
              <span className="flex items-center gap-3">
                <FaRegCircleDot />
                <h1 className="text-2xl font-semibold ">
                  {projects2.projectName}
                </h1>
              </span>
              <div className="flex flex-col  lg:flex-row gap-3 mt-4">
                <article className="lg:w-6/12 lg:p-2 ">
                  <span className="flex items-center gap-4">
                    <GoDotFill />
                    <h1 className="text-lg font-semibold">Discription</h1>
                  </span>
                  <p className="p-1 lg:p-2 px-2 lg:px-4 ">
                    {projects2.discription}
                  </p>
                </article>
                <article className="lg:w-6/12 lg:p-2">
                  <span className="flex items-center gap-4">
                    <GoDotFill />
                    <h1 className="text-lg font-semibold">
                      Roles and Responsibility
                    </h1>
                  </span>
                  <div className="flex flex-col gap-1 p-1 lg:p-2 px-2 lg:px-4 ">
                    {projects2.RolesAndResp.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        {/* project 1 end  */}
      </div>
      <div className="w-[90%] h-0.5 mt-20 lg:mt-28"></div>
    </div>
  );
}

export default Experience;
