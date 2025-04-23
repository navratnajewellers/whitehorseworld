"use client";

import ScrollPage from "../components/ScrollPage";
import WhFooter from "../components/WhFooter";
import WhHeader from "../components/WhHeader";

export default function CareerPage() {
  const positions = [
    {
      title:
        "Senior Executive (Female) - Business Development & Client Servicing",
      location: "Ranchi, India",
      type: "Full-Time",
      description:
        "We are looking for confident, dynamic individuals with a flair for client communication and sales.",
    },
    {
      title: "Executive (Female) – Business Development & Client Servicing",
      location: "Ranchi, India",
      type: "Full-Time",
      description:
        "Engage with clients, manage accounts, and drive new business initiatives.",
    },
    {
      title: "Executive (Male/Female) – Operations",
      location: "Ranchi, India",
      type: "Full-Time",
      description:
        "Support on-ground event planning, vendor coordination, and seamless execution.",
    },
    {
      title: "Accountant & Admin (Male/Female)",
      location: "Ranchi, India",
      type: "Full-Time",
      description:
        "Manage finance, accounting, and administrative duties for smooth internal operations.",
    },
    {
      title: "Interns (Male/Female)",
      location: "Ranchi / Remote",
      type: "Internship",
      description:
        "We offer internships in Business Development, Sales, Marketing, Operations, and more.",
    },
  ];

  return (
    <>
      <ScrollPage />

      <WhHeader />

      <div className="bg-black text-white min-h-screen px-6 py-12 mt-14 ">
        {/* Header */}
        <div
          className="relative h-[280px] md:h-[350px] w-full bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/work/work-database-management.jpg')",
          }}
        >
          {/* Semi-transparent dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80"></div>

          {/* Heading Text */}
          <h2 className="relative text-3xl md:text-5xl text-yellow-400 font-bold text-center px-4 z-10">
            Build Your Future with White Horse
          </h2>
        </div>

        {/* text */}
        <div className="text-center mb-20 mt-14 ">
          {/* <h2 className="text-4xl font-bold mb-6 text-yellow-400">
            Build Your Future with White Horse
          </h2> */}
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            White Horse Event Management is aggressively expanding and is always
            on the lookout for smart and talented folks to join its team.
            <br />
            <br />
            We are hiring and offer intern and full-time opportunities for
            undergraduate and graduate students from all academic areas. If
            you’re passionate about Event Management, we could have a role for
            you.
            <br />
            <br />
            We are always ready to talk to you if you are into Advertising,
            Business Development, Sales, Marketing, Finance, Operations, and
            more.
            <br />
            <br />
            We are interested in hiring self-driven, motivated individuals. We
            strongly believe in quality, and we only hire when we find the right
            talent and fit. We are not looking for people who will come in and
            do a job — we are looking for individuals who are willing to take on
            challenges and be an integral part of our organization.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 text-center px-10 ">
          <div className="bg-gray-900 p-6 rounded-lg custom-shadow mr-7 ">
            <h3 className="text-xl font-semibold mb-2">🌐 Dynamic Industry</h3>
            <p className="text-gray-400 mt-5 mb-2 ">
              Work in the exciting world of events, where no two days are the
              same.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg custom-shadow mr-7 ">
            <h3 className="text-xl font-semibold mb-2">🚀 Career Growth</h3>
            <p className="text-gray-400 mt-5 mb-2 ">
              We empower you to lead projects and grow with responsibility.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg custom-shadow mr-7 ">
            <h3 className="text-xl font-semibold mb-2">🎯 Real Impact</h3>
            <p className="text-gray-400 mt-5 mb-2 ">
              Be part of landmark events and meaningful experiences across
              India.
            </p>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-12 " style={{ marginTop: "160px" }}>
          <h3 className="text-2xl font-semibold mb-6 text-center text-yellow-400 ">
            Open Positions
          </h3>
          <div className="space-y-6 px-10 py-10 ">
            {positions.map((job, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg mb-12 custom-shadow3 "
              >
                <div className="flex justify-between flex-col md:flex-row md:items-center mb-2">
                  <h4 className="text-xl font-semibold">{job.title}</h4>
                  <span className="text-sm text-gray-400">
                    {job.type} | {job.location}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{job.description}</p>
                <button
                  className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition cursor-pointer "
                  onClick={() => {
                    window.location.href = "mailto:career@whitehorseevent.com";
                  }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 mb-16 ">
          <h4 className="text-lg font-semibold mb-2">
            Think you’re a good fit but don’t see a role?
          </h4>
          <p className="text-gray-400 mb-4">
            Drop your resume at{" "}
            <span className="text-white font-medium">
              <a href="mailto:career@whitehorseevent.com">
                career@whitehorseevent.com
              </a>
            </span>
          </p>
          <button
            className="bg-indigo-600 px-6 py-2 rounded hover:bg-indigo-500 transition cursor-pointer "
            onClick={() => {
              window.location.href = "mailto:career@whitehorseevent.com";
            }}
          >
            Submit Resume
          </button>
        </div>
      </div>

      <div
        className="relative h-[280px] md:h-[350px] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/work/work-database-management.jpg')",
        }}
      >
        {/* Semi-transparent dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80"></div>

        {/* Heading Text */}
        <h2 className="relative text-3xl md:text-5xl text-yellow-400 font-bold text-center px-4 z-10">
          Build Your Future with White Horse
        </h2>
      </div>

      <WhFooter />
    </>
  );
}
