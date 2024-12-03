import React from "react";
import { projects } from "../constants";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-auto text-gray-300 bg-[#0a192f] md:pt-24"
    >
      <div className="w-full sm:w-10/12 mx-auto p-4 flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
            Project
          </p>
          <p className="py-6">
            What I have done so far, check out some of my recent work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              style={{ backgroundImage: `url(${project.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div center w-full h-[200px] sm:h-[370px] md:h-[370px] lg:h-[400px]"
            >
              <div className="opacity-0 group-hover:opacity-100 text-center">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {project.name}
                </span>
                <div className="mb-3">{project.category}</div>
                <div className="">
                  {project.stack.map((tech) => (
                    <span class="inline-flex items-center mx-1 rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-8 text-center">
                  <a href={project.url_demo} target="_blank">
                    <button className="text-center rounded-lg px-3 sm:px-4 py-2 sm:py-3 m-2 bg-white text-gray-700 font-bold text-sm sm:text-lg">
                      Demo
                    </button>
                  </a>
                  <a href={project.url_github} target="_blank">
                    <button className="text-center rounded-lg px-3 sm:px-4 py-2 sm:py-3 m-2 bg-white text-gray-700 font-bold text-sm sm:text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
