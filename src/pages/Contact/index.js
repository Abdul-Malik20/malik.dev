// Contact.jsx

import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { motion, useAnimation } from "framer-motion";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaLocationArrow,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { headingAnimation, contactAnimation } from "../../hooks/useAnimation";
import { BottomLine } from "../../components";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cixmsvf",
        "template_v0n8n08",
        form.current,
        "R2j0c76liGYIpsZ4M"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="parent py-24 mt-4">
      <motion.div
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-neutral text-center">Feel Free To Contact Me</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center" style={{color:"#6C0345"}}>
          Get In <span className="text-primary">Touch</span>
        </h1>
        <BottomLine />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          <h2 className="text-2xl text-[#210F37] font-medium">Contact Me</h2>
          <form ref={form} onSubmit={handleSend} className="text-[#E8BCB9]">
            <div className="grid grid-cols-1  lg:grid-cols-2 lg:gap-6">
              <input
                className="input-field "
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className="input-field"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              className="input-field"
              type="text"
              name="title"
              placeholder="Subject"
              required
            />
            <textarea
              className="input-field"
              name="message"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" className="primary-button">
              <span>Send</span>
              <span><MdSend /></span>
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          <h2 className="text-2xl text-[#210F37] font-medium">Contact Info</h2>

          <div className="flex items-center my-6">
            <FaUserAlt className="text-2xl text-[#210F37] mr-8 hover:text-primary duration-300" />
            <h3 className="font-medium text-primary">Abdul Malik J</h3>
          </div>
          <div className="flex items-center my-6">
            <FaPhoneAlt className="text-2xl text-[#210F37] mr-8 hover:text-primary duration-300" />
            <h3 className="font-medium text-primary">+91-7904941024</h3>
          </div>
          <div className="flex items-center my-6">
            <MdEmail className="text-3xl text-[#210F37] mr-8 hover:text-primary duration-300" />
            <h3 className="font-medium text-primary">j.abdmalik20@gmail.com</h3>
          </div>
          <div className="flex items-center my-6">
            <FaLocationArrow className="text-2xl text-[#210F37] mr-8 hover:text-primary duration-300" />
            <h3 className="font-medium text-primary">
              Chennai, Tamil Nadu, India
            </h3>
          </div>

          <div className="mt-8 flex items-center">
            <h3 className="text-xl text-neutral">Social</h3>
            <div className="bg-gray-400 w-10 h-[2px] mx-4"></div>
            <a
              href="https://linkedin.com/in/-abdulmalik-dev"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Abdul-Malik20"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://leetcode.com/u/user5912Xw/"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <SiLeetcode className="w-8 h-8" />
            </a>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
