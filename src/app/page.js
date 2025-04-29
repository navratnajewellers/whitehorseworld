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

export default function Home() {
  return (
    <>
      <HomeAbout />

      <div className=" flex justify-center items-center flex-col  text-black w-main-container ">
        <WhHeader />
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

        {/* About Us */}
        <section className="w-full px-16 py-28 grid md:grid-cols-2 gap-12 items-center mb-8 ">
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.7,
            }}
            className=" relative "
          >
            <Image
              src="https://shaadisquad.com/wp-content/uploads/2024/05/HannaSaif-Wedding16-2.jpg"
              width={500}
              height={350}
              alt="Team working"
              className="rounded-2xl shadow-lg w-about-img"
            />
            <Image
              src="/images/gallery/gallery1.jpg"
              width={300}
              height={150}
              alt="Team working"
              className="rounded-2xl shadow-lg absolute w-about-img w-about-img-small "
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 1.1,
            }}
          >
            <h2 className="text-4xl font-bold mb-4 text-yellow-400 ">
              About White Horse World
            </h2>
            <Divider className=" w-about-divider text-yellow-400 pr-28 ">
              <FaDiamond size={10} />{" "}
              <FaDiamond size={20} className=" ml-1 mr-1 " />
              <FaDiamond size={10} />
            </Divider>
            <p className="text-lg text-gray-700 leading-relaxed">
              White Horse World is a premier wedding management company,
              renowned for curating unforgettable events with elegance,
              creativity, and impeccable planning. From intimate ceremonies to
              grand celebrations, we bring your vision to life with grace and
              style.
            </p>
            <a href="#" className="wed-button inline-block mt-6 ">
              Read More
            </a>
            <a href="#" className="wed-button inline-block mt-6 ml-4 ">
              Call Us
            </a>
            <a href="#" className="plan-wedding-button ">
              Plan Your Wedding
            </a>
          </motion.div>
        </section>

        {/* Custom Gallery */}
        <WGallerySection />

        {/* custom service */}
        <section className="w-full max-w-7xl px-4 py-20 text-center ">
          <h2 className="text-4xl font-bold text-yellow-400 mb-5 ">
            Destination Wedding Venues
          </h2>
          <Divider
            className=" w-about-divider text-yellow-400 "
            style={{ width: "25%", margin: "auto", marginBottom: "76px" }}
          >
            <FaDiamond size={10} />{" "}
            <FaDiamond size={20} className=" ml-1 mr-1 " />
            <FaDiamond size={10} />
          </Divider>
          <WServiceSection />
        </section>

        {/* custom testimonials */}
        {/* <WTestimonialsSection /> */}

        {/* Contact CTA */}
        <section className="bg-pink-100 w-full py-32 text-center relative z-0 overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{ filter: "brightness(55%)" }}
          >
            <Image
              src="/images/inner-banner.jpg"
              alt="bg-image"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-yellow-400 ">
            Let’s Make Your Wedding Magical
          </h2>
          <p className="text-lg mb-9 text-gray-300 ">
            Schedule a free consultation with White Horse World today!
          </p>
          <a href="#" className="book-consultation-button">
            Book a Consultation
          </a>
        </section>

        <WInstagram />

        {/* Footer */}
      </div>

      <WhFooter />
    </>
  );
}
