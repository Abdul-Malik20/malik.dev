import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="text-neutral text-center">Something About Myself</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center" style={{color:"#6C0345"}}>
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src="./logo192.png"
              alt="Abdul Malik"
              className="p-12 w-70 h-70 transform translate-y-[-12%]"
              title="Abdul Malik"
            />
          </motion.div>

          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl lobster-two-bold font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left" style={{color:"#8E3E63"}}>
              Abdul Malik J
            </h1>
            <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%] sm:text-2xl sm:mb-2 md:text-left"
                cursor={true}
                sequence={[
                  "A Java Developer",
                  2000,
                  "A Full-Stack Developer",
                  2000,
                  "A MERN Stack Enthusiast",
                  2000,
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              I'm a passionate full-stack developer with strong foundations in
              Java and MERN stack technologies. I enjoy building scalable,
              efficient, and user-friendly web applications.
            </p>
            <br />
            <br/>
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              Committed to continuous learning and staying up-to-date with modern
              technologies. I’ve worked on real-world projects applying clean
              architecture and industry practices.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium text-[#511D43]">
                <span className="mr-2 text-primary">Name : </span>Abdul Malik J
              </h2>
              <h2 className="font-medium text-[#511D43]">
                <span className="mr-2 text-primary">Phone : </span>+91 79049 41024
              </h2>
              <h2 className="font-medium text-[#511D43]">
                <span className="mr-2 text-primary">Email : </span>
                j.abdmalik20@gmail.com
              </h2>
              <h2 className="font-medium text-[#511D43]">
                <span className="mr-2 text-primary">Address : </span>Chennai, Tamil Nadu, India
              </h2>
              <a
                href="https://drive.google.com/file/d/1oPnsiUcPILxTGRDuVf7pEScyzbvtHf37/view?usp=drive_link"
                target="_blank"  rel="noreferrer"
              >
                <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;
