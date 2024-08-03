import React from "react";
import "./contact.css";
import { ContactSection, Links } from "../../content";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
function Contact() {
  return (
    <div
      className="flex flex-col items-center bg-outerBg-light dark:bg-outerBg-dark text-Normal-light dark:text-Normal-dark  w-full "
      id="contact"
    >
      <h1 className="font-semibold text-5xl cuestom__text-head pt-12">
        Contact Me
      </h1>
      <div className=" flex flex-col lg:flex-row mt-5 lg:mt-0 h-full w-full lg:px-36 ">
        <div className="flex items-center justify-center gap-10 flex-col  lg:w-6/12 ">
          <img
            src={Links.aboutIMG}
            className=" w-36 lg:w-52 rounded-[3rem] shadow-xl shadow-sky-900 hover:shadow-sky-700"
            alt=""
          />
          <div>
            <h1 className="text-3xl font-semibold pb-3 ">
              Let's Work Together
            </h1>
            <h2 className=" cursor-pointer">
              Mobile no.- <span>{ContactSection.mobileNo}</span>
            </h2>
            <h2 className=" cursor-pointer">
              Email address - <span>{ContactSection.email}</span>
            </h2>
            <h2 className=" cursor-pointer">
              Address - <span>{ContactSection.address}</span>
            </h2>
          </div>
        </div>
        <form
          className="flex flex-col  gap-10 lg:w-6/12 px-12 pt-16 lg:pt-32"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            // value="b1f5d9dd-6403-401b-93e6-bbfbec55c0c1"
            value="7ddcb4ef-eaab-4f9f-b365-df715c63b895"
          ></input>
          <input
            type="text"
            name="name"
            className="p-2 rounded-xl bg-slate-700 dark:bg-innerBg-dark"
            required
            placeholder="Your Name"
          />
          <input
            type="text"
            name="email"
            className="p-2 rounded-xl bg-slate-700 dark:bg-innerBg-dark"
            required
            placeholder="Your Email"
          />
          <input
            type="number"
            name="name"
            className="p-2 rounded-xl bg-slate-700 dark:bg-innerBg-dark"
            required
            placeholder="Mobile no."
          />
          <input
            type="text"
            name="subject"
            className="p-2 rounded-xl bg-slate-700 dark:bg-innerBg-dark"
            required
            placeholder="Subject"
          />
          <textarea
            name="massege"
            className="p-2 rounded-xl  bg-slate-700 dark:bg-innerBg-dark"
            required
            id="subject1"
            rows={4}
            placeholder="Your Message "
          ></textarea>

          <button
            type="submit"
            className="flex items-center justify-center text-slate-50 
            requiredgap-2  p-3 custom__bg-button_color w-52 xl:mx-28 rounded-xl"
          >
            <h1 className="text-lg">Submit</h1>
            <MdOutlineSubdirectoryArrowRight className="text-xl" />
          </button>
        </form>
      </div>
      <div className="w-[90%] h-0.5 bg-slate-500 mt-10"></div>
    </div>
  );
}

export default Contact;
