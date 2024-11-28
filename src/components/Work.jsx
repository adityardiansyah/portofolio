import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLaptopCode } from "react-icons/fa";
import { workExperience } from "../constants";


const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="w-10/12 mx-auto p-4 flex flex-col justify-center text-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
            Work Experience
          </p>
          <p className="py-6">
            What I have done so far, check out some of my recent work
          </p>
        </div>

        <div className="">
          <VerticalTimeline>
            {workExperience.map((experience, index) => (
                <VerticalTimelineElement
                className="vertical-timeline-element--work text-left"
                contentStyle={{ background: "#0a0d37", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  #0a0d37" }}
                date={experience.startYear + " - " + experience.endYear}
                iconStyle={{ background: experience.iconStyle, color: "#fff" }}
                icon={
                    <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={experience.company}
                        className='w-[60%] h-[60%] object-contain'
                    />
                    </div>
                }
                >
                <h3 className="text-white text-[24px] font-bold">
                    {experience.jobtitle}
                </h3>
                <h4 className="text-secondary text-[16px] font-semibold">{ experience.company}</h4>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {experience.description.map((desc, index) => (
                        <li key={index} className="text-white-100 text-[14px] pl-1 tracking-wider">{desc.text}</li>
                    ))}
                </ul>
                </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Work;
