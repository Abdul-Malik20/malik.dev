import React from "react";
import myImage from "../../../assets/chat.png";

const Education = () => {

  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div>
          <img src={myImage} alt="Abdul Malik J" className="w-[90%] h-[90%] object-cover rounded-2xl shadow-lg" />
        </div>

        <div className="mx-auto lg:ml-auto">

          {/* Bachelor of Engineering */}
          <div className="p-6 bg-[#EEF5FF] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                B.E
              </h3>
              <p className="text-sm text-neutral font-semibold">2021 - 2025</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Pursued Bachelor of Engineering (EEE) from <b>Mohamed Sathak AJ College of Engineering</b> with <b>CGPA: 8.0 (80%)</b>. Also completed a <b>Minor Degree in Full Stack Development (CSE)</b> under Anna University (2021 Regulation).
            </p>
          </div>

          {/* Higher Secondary */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#EEF5FF] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">HSC (12th)</h3>
              <p className="text-sm text-neutral font-semibold">2020 - 2021</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Scored <b>85%</b> in Higher Secondary Education at <b>Al – Hudha Islamic International MHSS</b>, Tamil Nadu.
            </p>
          </div>

          {/* SSLC */}
          <div className="p-6 bg-[#EEF5FF] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">SSLC (10th)</h3>
              <p className="text-sm text-neutral font-semibold">2018 - 2020</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Secured <b>81%</b> in SSLC from <b>Al – Hudha Islamic International MHSS</b>, Tamil Nadu.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;
