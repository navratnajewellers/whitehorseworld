"use client";

import HomeAbout from "./components/home/HomeAbout";
import HomeCarousel from "./components/home/HomeCarousel";
import HomeClient from "./components/home/HomeClient";
import HomeWork from "./components/home/HomeWork";
import WhHeader from "./components/WhHeader";
import "./styles/home.css";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <WhHeader />

      <div className=" home-i-carousel-cont">
        <HomeCarousel />
      </div>

      {/* <section className="relative h-screen bg-cover bg-center bg-[url('/images/slides/slider3.jpg')]"> */}
      {/* <section className="relative h-screen flex items-center justify-center text-center bg-[url('/images/slides/slider3.jpg')] bg-cover bg-center">
        
        <div className="absolute inset-0 bg-black/60 backdrop-brightness-85 z-0" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-4 text-white max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Reimagine <span className="italic text-yellow-400">(Almost)</span>{" "}
            Everything
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            We are White Horse Event Management — Go Getters, Planners, Artists,
            Creatives, and Motivators.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl shadow-lg transition hover:bg-yellow-400"
          >
            Let’s Build Your Next Event
          </motion.a>
        </motion.div>
      </section> */}

      <HomeAbout />

      <HomeWork />

      <HomeClient />
    </>
  );
}
