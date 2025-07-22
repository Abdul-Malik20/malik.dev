import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBrain, FaCode, FaRocket, FaUsers, FaTools } from "react-icons/fa";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";

const WhyHireMe = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const strengths = [
    {
      id: 1,
      title: "DSA & Java Expertise",
      icon: <FaCode />,
      description:
        "Strong foundation in Data Structures and Java programming, enabling efficient and optimized solutions.",
    },
    {
      id: 2,
      title: "Clean Architecture",
      icon: <FaTools />,
      description:
        "I build scalable and modular full-stack applications using industry-standard best practices.",
    },
    {
      id: 3,
      title: "Fast Learner",
      icon: <FaRocket />,
      description:
        "Able to quickly pick up new tools, frameworks, and adapt to fast-paced environments.",
    },
    {
      id: 4,
      title: "Team Collaboration",
      icon: <FaUsers />,
      description:
        "Excellent at working in teams, following Agile workflows, and collaborating using Git, Jira, and more.",
    },
    {
      id: 5,
      title: "Real-World Project Experience",
      icon: <FaBrain />,
      description:
        "Built full-stack projects using MERN & Spring Boot. Focused on real user needs and deployment.",
    },
    {
      id: 6,
      title: "Committed to Growth",
      icon: <FaBrain />,
      description:
        "Constantly learning through projects, certifications, and platforms like LeetCode to stay industry-ready.",
    }

  ];

  return (
    <div className="py-20 parent">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">Beyond the Code</h3>
        <h1 className="text-4xl font-semibold text-center" style={{color:"#6C0345"}}>
          Why <span className="text-primary">Hire Me?</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {strengths.map((item) => (
          <div
            key={item.id}
            className={`${item.id % 2 === 0
                ? "bg-[#EEF5FF] shadow-lg"
                : "bg-[#FBF8DD] shadow-md"
              } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
          >
            <div className="mb-4 text-center">
              <span className="inline-block text-5xl text-primary">
                {item.icon}
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center text-[#22092C]">
              {item.title}
            </h2>
            <p className="text-neutral">{item.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhyHireMe;
