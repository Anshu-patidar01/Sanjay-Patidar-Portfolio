import React from "react";
import "./profile.css";
import { ProfileSummery } from "../../content";
import { LuCircleDot } from "react-icons/lu";
function Profile() {
  return (
    <div
      id="Profile"
      className=" flex flex-col bg-outerBg-light dark:bg-outerBg-dark text-Normal-light dark:text-Normal-dark items-center w-full pt-20"
    >
      <h1 className="text-5xl font-semibold text-center cuestom__text-head">
        Profile Summary
      </h1>
      <div className="flex flex-col gap-4  p-5  lg:py-14 mt-12 mx-10 lg:mx-24 rounded-3xl bg-innerBg-light dark:bg-innerBg-dark shadow-xl shadow-sky-900 hover:shadow-sky-600">
        {ProfileSummery.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <LuCircleDot />

            <p className=" hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent duration-200">
              {item.points}
            </p>
          </div>
        ))}
      </div>

      <div className="w-[90%] h-0.5 bg-slate-500 mt-20 lg:mt-28"></div>
    </div>
  );
}
export default Profile;
