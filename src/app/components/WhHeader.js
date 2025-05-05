/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
"use client";

// import { useScroll, useMotionValueEvent } from "motion/react";
import "../styles/header.css";
import { useState } from "react";
import { useMediaQuery } from "rsuite";
import Hamburger from "hamburger-react";
import { motion } from "motion/react";
import Image from "next/image";

const WhHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <header
        className={` h-sec1-header-container w-full z-50 bg-gray-100 shadow-md fixed top-0 `}
      >
        <div className=" header-container ">
          {/* <nav className="h-sec1-container">
          <a href="/" className=" h-link ">
          Home
          </a>
          <a href="/about-us" className=" h-link ">
          Team
          </a>
          <a href="/work" className=" h-link ">
          Work
          </a>
          </nav> */}
          <section className="h-sec2-container">
            <a href="/" className="imageWrapper">
              <img
                src="/images/whem-logo-all_small.png"
                alt="company-logo"
              ></img>
            </a>
            <div className={`menu-toggle  ${isMobile ? "" : "dis-none"}`}>
              <Hamburger
                toggled={menuOpen}
                toggle={setMenuOpen}
                size={24}
                duration={0.5}
                color="#000"
              />
            </div>
          </section>
          {/* <nav className="h-sec3-container">
          <a href="/gallery" className=" h-link ">
            Gallery
          </a>
          <a href="/carrer" className=" h-link ">
          Carrer
          </a>
          <a href="/contact" className=" h-link ">
          Contact
          </a>
          </nav> */}

          {/* <motion.nav
          initial={{ opacity: 0, y: -115 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className={` mobile-header-nav-container ${isMobile ? "" : "dis-none"} ${menuOpen ? "m-h-nav-active" : ""} `}
          >
          <motion.a
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          href="/"
          className=" h-link "
          >
          Home
          </motion.a>
          <motion.a
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          href="/about-us"
            className=" h-link "
            >
            Team
            </motion.a>
            <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
            href="/work"
            className=" h-link "
            >
            Work
            </motion.a>
            <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.3 }}
            href="#"
            className=" h-link "
          >
            Gallery
          </motion.a>
          <motion.a
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.6 }}
          href="/carrer"
          className=" h-link "
          >
          Carrer
          </motion.a>
          <motion.a
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.9 }}
          href="/contact"
          className=" h-link "
          >
          Contact
          </motion.a>
          </motion.nav> */}
          <motion.nav
            initial={{ opacity: 0, y: -115 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className={` n-mobile-nav-container flex flex-col border-2 border-black w-full justify-center items-center fixed left-0 bg-black z-50 ${menuOpen ? " top-0" : " top-[-512px]"} `}
          >
            <section className="h-sec2-container mt-5 px-9 ">
              <a href="/" className="imageWrapper">
                <img
                  src="/images/whem-logo-all_small.png"
                  alt="company-logo"
                ></img>
              </a>
              <div className={`menu-toggle  ${isMobile ? "" : "dis-none"}`}>
                <Hamburger
                  toggled={menuOpen}
                  toggle={setMenuOpen}
                  size={24}
                  duration={0.5}
                  color="#fff"
                />
              </div>
            </section>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              href="/"
              className=" h-link "
            >
              Home
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              href="/about-us"
              className=" h-link "
            >
              About
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
              href="/work"
              className=" h-link "
            >
              Work
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.3 }}
              href="#"
              className=" h-link "
            >
              Gallery
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.6 }}
              href="/carrer"
              className=" h-link "
            >
              Carrer
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.9 }}
              href="/contact"
              className=" h-link "
            >
              Contact
            </motion.a>
          </motion.nav>
        </div>
        <nav
          className={` h-down-link-container ${isMobile ? "dis-none-imp" : ""} `}
        >
          <a href="/" className=" h-link ">
            Home
          </a>
          <a href="/about-us" className=" h-link ">
            About
          </a>
          <a href="/work" className=" h-link ">
            Work
          </a>
          <a href="/gallery" className=" h-link ">
            Gallery
          </a>
          <a href="/carrer" className=" h-link ">
            Carrer
          </a>
          <a href="/contact" className=" h-link ">
            Contact
          </a>
        </nav>
      </header>

      <div className=" pt-32 md:pt-44 "></div>
    </>
  );
};

export default WhHeader;
