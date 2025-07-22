// src/components/LinkedInBanner.jsx
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const LinkedInBanner = () => {
  return (
    <section className="bg-gradient-to-br from-[#0e76a8] via-[#171515] to-[#FFA116] text-white py-6 px-4 mt-8 rounded-xl shadow-lg mx-4 lg:mx-20">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <h2 className="text-xl font-semibold text-center md:text-left">
          Let’s connect! Explore my work and problem-solving skills:
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href="https://www.linkedin.com/in/-abdulmalik-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0e76a8] font-bold py-2 px-4 rounded-full flex items-center gap-2 hover:bg-gray-100 duration-200"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Abdul-Malik20"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-bold py-2 px-4 rounded-full flex items-center gap-2 hover:bg-gray-100 duration-200"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/user5912Xw/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#FFA116] font-bold py-2 px-4 rounded-full flex items-center gap-2 hover:bg-gray-100 duration-200"
          >
            <SiLeetcode className="text-xl" />
            LeetCode
          </a>
        </div>
      </div>
    </section>
  );
};

export default LinkedInBanner;
