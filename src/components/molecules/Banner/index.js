import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import myImage from "../../../assets/m1.jpg";
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";

const Banner = () => {
  return (
<div className="parent min-h-screen container mx-auto px-4 py-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
    {/* Text section */}
    <motion.div
      className="w-full lg:w-1/2"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-neutral text-lg sm:text-xl font-medium">Hello, I'm</h2>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lobster-two-bold font-semibold mb-2" style={{ color: "#8E3E63" }}>
        Abdul Malik J
      </h1>

      <div className="my-4">
        <TypeAnimation
          className="text-xl sm:text-2xl text-primary font-bold"
          cursor={true}
          sequence={[
            "A Software Developer",
            2000,
            "A Java Developer",
            2000,
            "A Full-stack Developer",
            2000,
          ]}
          wrapper="div"
          repeat={Infinity}
        />
      </div>

      <p className="text-neutral text-base sm:text-lg max-w-xl mb-6 font-medium">
        I’m a passionate Full Stack Developer skilled in building modern web applications using the MERN stack and Java Spring Boot. With strong knowledge in React.js, Node.js, MongoDB, MySQL, and REST APIs, I focus on developing scalable, secure, and performance-driven solutions. I love turning ideas into code and solving real-world problems with technology.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href="https://drive.google.com/file/d/1VuEfxfEI0_BiVg87cR4VdyjTr5K2Ulaq/view?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
        >
          <button className="primary-button flex items-center gap-2">
            <span>My Resume</span>
            <FaDownload />
          </button>
        </a>
        <Link to="/about">
          <SecondaryBtn>
            <span>About Me</span>
            <RiFolderInfoFill />
          </SecondaryBtn>
        </Link>
      </div>
    </motion.div>

    {/* Image section */}
    <motion.div
      className="w-full lg:w-1/2 flex justify-center"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        src={myImage}
        alt="Abdul Malik J"
        className="w-[90%] h-auto object-cover rounded-2xl shadow-lg"
      />
    </motion.div>
  </div>
);

};

export default Banner;
