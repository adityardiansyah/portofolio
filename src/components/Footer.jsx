import React from "react";
import StackIcon from "tech-stack-icons";
import { linkEmail } from "../constants";

const Footer = () => {
  return (
    <div className="w-full md:h-auto text-gray-300 bg-[#0a192f] md:pt-24">
      <div className="w-full sm:w-10/12 mx-auto p-4 flex flex-col justify-center h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
            Interest for Collaboration?
          </p>
          <p className="py-4 text-[16pt]">
            Let's have a conversation, I'm always open to new opportunities and
            collaborations.
          </p>
          <a
            href={linkEmail}
            className="mt-10 py-4 px-8 text-[16pt] bg-green-500 rounded-full text-white hover:bg-green-600 border-dotted border-white border-2"
          >
            Send Message
          </a>
        </div>
      </div>

      <div className="w-10/12 mx-auto flex justify-between mt-5 pt-6 p-5">
        <p>Copyright ©2024 All rights reserved</p>
        <div className="flex items-center">
          <span>
            Handmade by Aditya Ardiansyah with
            <span className="mx-1">❤</span>
            <StackIcon name="reactjs" className="w-[15px] mr-1" />
            <StackIcon name="tailwindcss" className="w-[15px]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
