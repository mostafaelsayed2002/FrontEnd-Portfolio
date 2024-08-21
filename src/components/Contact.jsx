import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import React from "react";
import { Typography } from "@mui/material";

function Contact() {
  return (
    <div id="Contact" className="flex flex-col gap-10 mb-[240px]">
      <div className="flex-col flex text-center items-center gap-3">
        <div className="text-gray-400 text-lg">Get In Touch</div>
        <div>
          <Typography
            variant="h3"
            noWrap
            sx={{
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 1000,
              letterSpacing: ".1rem",
              color: "inherit",
            }}
          >
            Contact Me
          </Typography>
        </div>
      </div>

      <div className="flex flex-row gap-4  mt-4 justify-center items-center">
        <a href="https://github.com/mostafaelsayed2002">
          <BsGithub size={50} className="hover:text-blue-600 " />
        </a>
        <a href="https://www.linkedin.com/in/mostafa-elsayed-19a610214/">
          <BsLinkedin className="hover:text-blue-600 " size={50} />
        </a>
        <a
          className="round-full  "
          href="mailto:mostafa.elsayed.2002@gmail.com"
        >
          <SiGmail size={55} className="hover:text-blue-600 " />
        </a>
      </div>

      <div className="text-center text-gray-500">
        Copyright © 2024 Mostafa Elsayed. All Rights Reserved
      </div>
    </div>
  );
}

export default Contact;
