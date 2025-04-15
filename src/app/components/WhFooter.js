"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const WhFooter = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand / Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/images/whem-logo-all.png"
            alt="White Horse World Logo"
            width={150}
            height={60}
            className="mb-3"
          />
          <p className="text-sm text-gray-400">
            Event & Experiential Marketing Experts
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#work" className="hover:text-white transition">
                Work
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Carrer
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Connect with Us</h2>
          <div className="flex justify-center md:justify-start space-x-4 text-gray-400 text-xl">
            <a
              href="mailto:info@whitehorseworld.com"
              className="hover:text-white"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://instagram.com/whitehorseworld"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/company/whitehorseworld"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} White Horse World. All rights reserved.
      </div>
    </footer>
  );
};

export default WhFooter;
