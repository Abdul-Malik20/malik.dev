import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {  FaGraduationCap, FaMedal, FaScroll } from "react-icons/fa";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../hooks/useAnimation";
import { BottomLine } from "./atoms";
import { MdVerified } from "react-icons/md";

const certificationData = [
  {
    id: 1,
    title: "Full Stack Web Development (MERN)",
    provider: "Udemy",
    ic: <FaGraduationCap />

  },
  {
    id: 2,
    title: "Programming in Java",
    provider: "NPTEL",
    ic: <MdVerified />
  },
  {
    id: 3,
    title: "Advanced in MS Office",
    provider: "Naan Mudhalvan",
    ic: <FaGraduationCap />
  },
  {
    id: 4,
    title: "Java Full Stack Training",
    provider: "TNS India Foundation",
    ic: <FaScroll />
  },
  {
    id: 5,
    title: "MongoDB Node.js Developer Path",
    provider: "MongoDB University",
    ic: <FaMedal />
  },
  {
    id: 6,
    title: "React JS",
    provider: "HackerRank",
    ic: <FaScroll />

  },
];

const Certifications = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);

  useEffect(() => {
    if (inView) setViewDiv(true);
    else setViewDiv(false);
  }, [inView]);

  return (
    <div className="py-20 px-4 parent">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">Proof of Learning</h3>
        <h1 className="text-4xl font-semibold text-center" style={{ color: "#5D0E41" }}>
          My <span className="text-primary">Certifications</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {certificationData.map((cert) => (
          <div
            key={cert.id}
            className="bg-white shadow-xl rounded-xl p-6 border border-primary hover:scale-105 duration-300"
          >
            <div className="flex items-center justify-center mb-4 text-5xl text-primary">
              {cert.ic}
            </div>
            <h2 className="text-xl font-bold text-center text-[#22092C]">
              {cert.title}
            </h2>
            <p className="text-center text-sm text-gray-600 mt-2">
              — {cert.provider}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;
