import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-[#704264]"
       
      >
        <div className="flex items-center justify-center mb-6">
          <a
            className="inline-block mx-2"
            href="https://www.linkedin.com/in/-abdulmalik-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-400" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://github.com/Abdul-Malik20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-black" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://leetcode.com/u/user5912Xw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode
             className="text-2xl text-white-500" />
          </a>
        </div>

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/-abdulmalik-dev/"
              className="text-[#BED754] hover:underline"
              target="blank"
            >
              Abdul Malik J
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
