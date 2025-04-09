/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

export default function HomeClient() {
  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        OUR CLIENTS
      </h2>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-10 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...Array(2)]
            .flatMap(() => [
              "/images/client/1.png",
              "/images/client/2.png",
              "/images/client/3.png",
              "/images/client/4.png",
              "/images/client/5.png",
              "/images/client/6.png",
              "/images/client/7.png",
              "/images/client/8.png",
              "/images/client/9.png",
              "/images/client/10.png",
              "/images/client/11.png",
              "/images/client/12.png",
              "/images/client/13.png",
              "/images/client/14.png",
              "/images/client/15.png",
              "/images/client/16.png",
              "/images/client/17.png",
              "/images/client/18.png",
            ])
            .map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Client ${index + 1}`}
                className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition"
              />
            ))}
        </motion.div>
      </div>
    </section>
  );
}
