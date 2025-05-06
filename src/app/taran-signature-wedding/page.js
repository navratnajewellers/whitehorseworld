"use client";

import "../styles/wedding.css";
import { FaDiamond } from "react-icons/fa6";
import { Divider } from "rsuite";
import { motion } from "motion/react";
import Image from "next/image";
import WServiceSection from "../components/wedding/WServiceSection";
import WhHeader from "../components/WhHeader";

export default function PlanWeddingPage() {
  return (
    <div>
      <WhHeader pageTheme="white" />

      <section className=" relative w-full h-[950px] ">
        <Image
          src="/images/tsw-images/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0001.jpg"
          alt="section1"
          fill
        />
      </section>

      <section className=" relative w-full h-[1400px] ">
        <Image
          src="/images/tsw-images/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0002.jpg"
          alt="section1"
          fill
        />
      </section>

      <section className=" relative w-full h-[1200px] ">
        <Image
          src="/images/tsw-images/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0003.jpg"
          alt="section1"
          fill
        />
      </section>

      <section className=" relative w-full h-[1200px] ">
        <Image
          src="/images/tsw-images/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0004.jpg"
          alt="section1"
          fill
        />
      </section>

      {/* custom service */}
      <section className="w-full max-w-7xl px-4 py-20 text-center bg-blue-50 ">
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

      <section className=" relative w-full h-[1200px] ">
        <Image
          src="/images/tsw-images/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0005.jpg"
          alt="section1"
          fill
        />
      </section>

      <section className=" relative w-full h-[1400px]  ">
        <Image
          src="/images/tsw-images/TARAN SIGNATURE WEDDING CATALOGUE - 1_page-0006.jpg"
          alt="section1"
          fill
        />
      </section>

      {/* About Us */}
      {/* <section className="w-full px-16 py-28 grid md:grid-cols-2 gap-12 items-center bg-gray-100 ">
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
            src="/images/assets/cr=w_1234,h_500.webp"
            width={500}
            height={350}
            alt="Team working"
            className="rounded-2xl shadow-lg w-about-img"
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
          <p className="text-lg text-gray-500 leading-relaxed mt-9 mb-5">
            White Horse World is a premier wedding management company, renowned
            for curating unforgettable events with elegance, creativity, and
            impeccable planning. From intimate ceremonies to grand celebrations,
            we bring your vision to life with grace and style.
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
      </section> */}
    </div>
  );
}
