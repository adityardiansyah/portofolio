import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-[#0a192f] text-gray-300 pt-32"
    >
      <div className="flex flex-col justify-center items-center w-full h-auto">
        <div className="mb-8">
          <p className="text-center text-4xl font-bold inline border-b-4 border-green-600">
            About
          </p>
        </div>
        <div className="max-w-[1000px] w-full grid grid-rows-2 sm:grid-cols-2 gap-0 sm:gap-8 px-4">
          <div className="sm:text-right text-3xl md:text-4xl font-bold">
            <p>
              Hi, <span className="text-green-500">I'm Aditya</span>, nice to
              meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I'm a <b className="text-green-500">Full Stack Web Developer</b>
              with a passion for building innovative and user-friendly
              applications. I have a strong foundation in
              <b className="text-red-500">
                HTML, CSS, JavaScript, React, Laravel and Codeigniter.
              </b>
              I was experienced in web development 7+ years, and I have a solid
              understanding of front-end and back-end development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
