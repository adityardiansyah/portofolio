import React, { useState, useEffect } from "react";
import { HiOutlineDownload, HiCheckCircle } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Slide from "../assets/slide.png";
import {
  linkCv,
  linkGit,
  linkLinkedin,
  linkEmail,
  linkInstagram,
  numberPortofolio,
} from "../constants";
import { useSpring, animated } from "react-spring";

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};
const Home = () => {
  return (
    <div name="home" className="section w-full h-auto bg-[#0a192f]">
      {/* Container */}
      <div className="w-full sm:w-10/12 mx-auto px-8 flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 items-start lg:grid-cols-3 lg:gap-12 gap-y-8 mt-32 md:mt-48">
          <div className="order-1 lg:col-span-2 lg:order-1 flex flex-col items-start justify-center p-2 mb:pb-20 md:pb-10 lg:pt-10">
            <p className="flex items-center">
              <HiCheckCircle className="mr-2 text-green-600" />
              <span className="text-[#ccd6f6]">Available for work</span>
            </p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
              Hi, I'm Aditya Ardiansyah
            </h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-green-500">
              I'm a Full Stack Web Developer
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              I have a passion for creating and learning new things, and I'm
              always eager to take on new challenges, whether it's working on a
              project or learning a new skill. I'm a quick learner and a problem
              solver, and I'm always looking for ways to improve my skills and
              knowledge.
            </p>
            <div className="flex flex-wrap justify-center items-center">
              <a
                href={linkCv}
                className="text-green-500 rounded-full group border-2 border-green-500 px-6 py-3 my-2 sm:mr-4 flex items-center hover:bg-green-600 hover:border-green-600 hover:text-white"
              >
                Download CV
                <span className="group-hover:animate-bounce duration-300">
                  <HiOutlineDownload className="ml-3" />
                </span>
              </a>
              <div className="flex xs:mt-4">
                <a
                  href={linkGit}
                  alt="Github"
                  className="border-2 border-green-500 rounded-full"
                >
                  <span className="group-hover:scale-100 duration-300">
                    <FaGithub className=" m-3 text-green-500" />
                  </span>
                </a>
                <a
                  href={linkLinkedin}
                  alt="LinkedIn"
                  className="ml-4 border-2 border-green-500 rounded-full"
                >
                  <span className="group-hover:scale-100 duration-300">
                    <FaLinkedinIn className=" m-3 text-green-500" />
                  </span>
                </a>
                <a
                  href={linkInstagram}
                  alt="Instagram"
                  className="ml-4 border-2 border-green-500 rounded-full"
                >
                  <span className="group-hover:scale-100 duration-300">
                    <FaInstagram className=" m-3 text-green-500" />
                  </span>
                </a>
                <a
                  href={linkEmail}
                  alt="Email"
                  className="ml-4 border-2 border-green-500 rounded-full"
                >
                  <span className="group-hover:scale-100 duration-300">
                    <HiOutlineMail className=" m-3 text-green-500" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="order-2 lg:order-2">
            <img
              src={Slide}
              alt=""
              id="icon-slide"
              className="hidden md:flex"
            />
          </div>
        </div>

        {/* Counter */}
        <div className="w-full grid lg:grid-cols-4 grid-cols-2 gap-2 lg:gap-4 my-10 sm:mt-10 ">
          {numberPortofolio.map((portfolio) => (
            <div className="flex items-center align-center justify-center">
              <div className="text-4xl md:text-6xl font-bold text-white flex">
                <Number n={portfolio.number} /> +
              </div>
              <p className="text-white pl-3 text-[12pt] md:text-[15pt]">
                {portfolio.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
