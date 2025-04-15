/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useScroll, useMotionValueEvent } from "motion/react";
import "../styles/header.css";
import { useState } from "react";

const WhHeader = () => {
  const { scrollY } = useScroll(); // Framer Motion scroll tracking
  const [direction, setDirection] = useState("Idle");
  const [lastScroll, setLastScroll] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScroll) {
      setDirection("Down");
    } else if (latest < lastScroll) {
      setDirection("Up");
    }
    setLastScroll(latest);
  });

  return (
    <header
      className={` h-sec1-header-container w-full  ${direction == "Up" || direction == "Idle" ? " head-dir-up " : " head-dir-down "} `}
    >
      <div
        className=" header-container "
        style={{
          backgroundColor: `${lastScroll < 100 ? "transparent" : "black"}`,
        }}
      >
        <nav className="h-sec1-container">
          <a href="#" className=" h-link ">
            Home
          </a>
          <a href="#" className=" h-link ">
            Team
          </a>
          <a href="#" className=" h-link ">
            Work
          </a>
        </nav>
        <section className="h-sec2-container">
          <a href="/" className="imageWrapper">
            <img src="/images/whem-logo-all.png" alt="company-logo"></img>
          </a>
        </section>
        <nav className="h-sec3-container">
          <a href="#" className=" h-link ">
            Reach
          </a>
          <a href="#" className=" h-link ">
            Carrer
          </a>
          <a href="#" className=" h-link ">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default WhHeader;
