import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiSpringboot,
  SiPostman,
  SiAmazonaws,
  SiVisualstudiocode,
  SiEclipseide,
  SiAngularjs,
} from "react-icons/si";
import myImage from "../../../assets/m2.png";

const MySkill = () => {
  const languages = [
    { title: "Java", icon: <FaJava className="text-red-500" /> },
    { title: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { title: "SQL", icon: <SiMysql className="text-blue-500" /> },
  ];

  const frameworks = [
    { title: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
    { title: "Express.js", icon: <SiExpress className="text-white" /> },
    { title: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { title: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { title: "Angular.js", icon: <SiAngularjs className="text-red-500" /> },
  ];

  const frontend = [
    { title: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { title: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    { title: "Bootstrap 5", icon: <FaBootstrap className="text-indigo-600" /> },
    { title: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  ];

  const databases = [
    { title: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  ];

  const tools = [
    { title: "Git", icon: <FaGithub className="text-black" /> },
    { title: "GitHub", icon: <FaGithub className="text-black" /> },
    { title: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { title: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
    { title: "Eclipse", icon: <SiEclipseide className="text-purple-500" /> },
    { title: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { title: "AWS (Basics)", icon: <SiAmazonaws className="text-orange-400" /> },
  ];

  return (
    <div className="pt-24">
      <h1 className="text-4xl font-semibold drop-shadow-md text-center mb-8" style={{ color: "#6C0345" }}>
        My <span className="text-primary">Skills</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly my-8">
        <div>
          <h2 className="text-cyan-500 text-xl font-semibold">Languages:</h2>
          <div className="flex flex-wrap mb-4">
            {languages.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-white hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill.icon}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-cyan-500 text-xl font-semibold">Frameworks & Libraries:</h2>
          <div className="flex flex-wrap mb-4">
            {frameworks.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-black hover:bg-white mx-auto"
                  title={skill.title}
                >
                  {skill.icon}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-cyan-500 text-xl font-semibold">Frontend Technologies:</h2>
          <div className="flex flex-wrap mb-4">
            {frontend.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-white hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill.icon}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-cyan-500 text-xl font-semibold">Databases:</h2>
          <div className="flex flex-wrap mb-4">
            {databases.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-black hover:bg-white mx-auto"
                  title={skill.title}
                >
                  {skill.icon}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-cyan-500 text-xl font-semibold">Tools & Technologies:</h2>
          <div className="flex flex-wrap mb-4">
            {tools.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-white hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[350px] lg:w-[400px] flex justify-center items-center mb-8 md:mb-0">
          <img
            src={myImage}
            alt="Abdul Malik J"
            className="w-full h-auto max-w-[300px] md:max-w-[350px] lg:max-w-[400px] rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default MySkill;
