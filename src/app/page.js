"use client";

import Image from "next/image";
import { motion } from "motion/react";

import "./styles/wedding.css";
import HeroSection from "./components/wedding/HeroSection";
import WServiceSection from "./components/wedding/WServiceSection";
import WhHeader from "./components/WhHeader";
import WGallerySection from "./components/wedding/WGallerySection";
import WTestimonialsSection from "./components/wedding/WTestimonialsSection";
import WhFooter from "./components/WhFooter";
import HomeAbout from "./components/home/HomeAbout";
import { Divider } from "rsuite";
import { FaDiamond } from "react-icons/fa6";
import WInstagram from "./components/wedding/WInstagram";
import WGallerySection2 from "./components/wedding/WGallerySection2";

export default function Home() {
  return (
    <div className=" bg-gray-100 ">
      <WhHeader />

      <section className=" bg-gray-100 ">
        <WGallerySection2 requiredModal={false} />
      </section>

      {/* Custom Gallery */}
      {/* <WGallerySection /> */}

      <HomeAbout />

      <div className=" flex justify-center items-center flex-col  text-black w-main-container ">
        {/* Hero Section */}

        {/* Custom 1st section */}

        {/* <section className=" relative w-full h-[650px] bg-cover bg-center w-sec1-container ">
          <HeroSection />

          <div className="absolute inset-0  flex flex-col justify-center items-center text-white text-center p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400 ">
              White Horse World
            </h1>
            <p className="text-xl mb-10">
              Turning Your Dream Wedding into a Magical Reality
            </p>
            <a href="#" className="plan-wedding-button">
              Plan Your Wedding
            </a>
          </div>
        </section> */}

        {/* custom testimonials */}
        {/* <WTestimonialsSection /> */}

        {/* Contact CTA */}
        <section
          className=" w-full py-32 px-7 text-center overflow-hidden "
          style={{ backgroundColor: "#FCE5F5" }}
        >
          <h2 className="text-4xl font-bold mb-5 text-yellow-400 ">
            Let’s Make Your Wedding Magical
          </h2>
          <p className="text-lg mb-9 text-gray-500 ">
            Schedule a free consultation with White Horse World today!
          </p>
          <a href="/contact" className="book-consultation-button">
            Book a Consultation
          </a>
        </section>

        <WInstagram />

        {/* Footer */}
      </div>

      <WhFooter />
    </div>
  );
}
