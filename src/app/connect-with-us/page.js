"use client";

import ContactForm from "../components/ContactForm";
import WhFooter from "../components/WhFooter";
import WhHeader from "../components/WhHeader";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

export default function ContactUsPage() {
  return (
    <>
      <WhHeader />
      <div className="bg-black text-white min-h-screen px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12 mt-36 ">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We&apos;d love to hear from you! Whether you have questions, need
            support, or want to learn more about our services, our team is here
            to help.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          {/* Address */}
          <div className="bg-gray-900 p-6 rounded-lg w-full md:w-1/3 text-center">
            <div className="text-3xl mb-2">
              <IoLocationOutline className=" m-auto text-red-500 " />
            </div>
            <h3 className="text-lg font-semibold mb-1">Our Address</h3>
            <p className="text-gray-400">
              Asklepios Tower
              <br />
              Makima Street 251
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-900 p-6 rounded-lg w-full md:w-1/3 text-center">
            <div className="text-3xl mb-2 ">
              <IoCallOutline className=" m-auto text-green-500 " />
            </div>
            <h3 className="text-lg font-semibold mb-1">Our Contact Info</h3>
            <p className="text-gray-400">
              +123 456 789
              <br />
              help@nightingale.com
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-lg w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13127.132911400748!2d135.49174454340154!3d34.693737860008205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0df6d09c711%3A0x7a1e8a2c6b4b9f79!2sOsaka%2C%20Japan!5e0!3m2!1sen!2sin!4v1615548573475!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

        {/* Contact form */}
        <div className=" mt-20 w-2/3 m-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Reach out to us</h2>
          </div>
          <ContactForm />
        </div>
      </div>

      <WhFooter />
    </>
  );
}
