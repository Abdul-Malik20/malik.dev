import React from "react";
import Project from "../Project";
import Contact from "../Contact";
import { Banner, Service } from "../../components";
import LinkedInBanner from "../../components/LinkedInBanner.js";
import Certifications from "../../components/Certifications.jsx";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <Service />
      <LinkedInBanner/>
      <Certifications />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
