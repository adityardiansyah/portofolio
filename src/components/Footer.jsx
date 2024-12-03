import React from "react";
import StackIcon from "tech-stack-icons";

const Footer = () => {
  return (
    <div className="w-full h-[100px] bg-[#0a192f] text-gray-300 flex justify-center items-center">
      <div className="w-11/12 flex justify-between">
        <p>Copyright ©2023 All rights reserved</p>
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
