/* eslint-disable @next/next/no-img-element */
import WhFooter from "../components/WhFooter";
import WhHeader from "../components/WhHeader";

export default function AboutUsPage() {
  return (
    <>
      <WhHeader />

      <div className="bg-black text-white min-h-screen py-16 px-6 md:px-20">
        <section className="max-w-5xl mx-auto text-center">
          <h1 className="text-yellow-400 text-4xl md:text-5xl font-bold mb-6">
            About White Horse
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            White Horse Event Management is a premier full-service agency known
            for creating impactful and memorable experiences. With over a decade
            of expertise in managing corporate events, government summits,
            exhibitions, weddings, and brand activations — our team is dedicated
            to delivering nothing but excellence.
          </p>
        </section>

        <section className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
          <div className="bg-white/10 p-6 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.05)] border border-white/10">
            <h2 className="text-yellow-400 text-2xl font-semibold mb-4">
              Our Vision
            </h2>
            <p className="text-gray-300">
              To be the most trusted name in the world of experiential marketing
              and event planning. We aim to inspire, innovate, and impact
              through extraordinary execution and unmatched creativity.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.05)] border border-white/10">
            <h2 className="text-yellow-400 text-2xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300">
              To deliver seamless and memorable event experiences for clients
              across industries, ensuring high standards, professionalism, and
              an eye for detail in everything we do.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.05)] border border-white/10">
            <h2 className="text-yellow-400 text-2xl font-semibold mb-4">
              Our Team
            </h2>
            <p className="text-gray-300">
              The White Horse team comprises of passionate professionals with
              expertise across event planning, marketing, design, production,
              and client servicing. Every project is handled by a team that’s
              driven by creativity and execution excellence.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.05)] border border-white/10">
            <h2 className="text-yellow-400 text-2xl font-semibold mb-4">
              Our Story
            </h2>
            <p className="text-gray-300">
              White Horse started with the goal of reshaping the events
              industry. Frustrated by generic events, our founders envisioned an
              agency where creativity, logistics, and strategy merged to create
              powerful, memorable experiences for every audience.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto mt-20 text-center">
          <h2 className="text-yellow-400 text-3xl font-semibold mb-6">
            Why Choose Us?
          </h2>
          <p className="text-gray-300 text-lg">
            At White Horse, we combine strategy, creativity, and flawless
            execution to bring your vision to life. From ideation to
            implementation — our team works relentlessly to ensure your event is
            remembered, celebrated, and talked about for years to come.
          </p>
        </section>

        {/* Values Section */}
        <section className="bg-yellow-400 text-black py-16 px-4 md:px-20 text-center mt-14 ">
          <h2 className="text-2xl font-bold mb-8 text-white ">OUR VALUES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/25 p-6 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.05)] border border-white/10">
              <h4 className="font-semibold text-lg mb-2">Integrity</h4>
              <p>We honor our commitments and act with transparency.</p>
            </div>
            <div className="bg-white/25 p-6 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.05)] border border-white/10">
              <h4 className="font-semibold text-lg mb-2">Innovation</h4>
              <p>
                We deliver fresh, trend-setting event ideas that make an impact.
              </p>
            </div>
            <div className="bg-white/25 p-6 rounded-xl shadow-[0_4px_60px_rgba(255,255,255,0.05)] border border-white/10">
              <h4 className="font-semibold text-lg mb-2">Excellence</h4>
              <p>We strive to exceed client expectations at every step.</p>
            </div>
          </div>
        </section>

        {/* Team Members (Optional – Replace with real images later) */}
        <section className="bg-black py-16 px-4 md:px-20 text-center">
          <h2 className="text-yellow-400 text-3xl font-bold mb-8">
            Meet Our Leadership
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Amit", "Priya", "Ravi", "Neha"].map((name, index) => (
              <div key={index} className="bg-neutral-900 rounded-xl p-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-yellow-400 mb-4">
                  <img src="/images/whem-logo-all_small.png" alt="team" />
                </div>
                <h4 className="font-semibold text-lg">{name}</h4>
                <p className="text-sm">Event Strategist</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <WhFooter />

      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center text-center">
          <img
            src="/images/work/work-artist-management.png"
            alt="About White Horse"
            className="absolute inset-0 object-cover w-full h-full opacity-60"
          />
          <div className="z-10">
            <h1 className="text-6xl font-bold text-yellow-400">OUR MISSION</h1>
            <p className="text-lg max-w-2xl mx-auto mt-4">
              White Horse Event Management is a premier full-service agency
              known for creating impactful and memorable experiences. With over
              a decade of expertise in managing corporate events, government
              summits, exhibitions, weddings, and brand activations — our team
              is dedicated to delivering nothing but excellence.
            </p>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="py-16 px-4 md:px-20 bg-black">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-neutral-900 p-8 rounded-xl shadow-lg">
              <h2 className="text-yellow-400 text-2xl font-bold mb-4">
                Our Vision
              </h2>
              <p>
                To become India’s leading experiential marketing company by
                delivering exceptional events, innovative strategies, and
                extraordinary customer experiences.
              </p>
            </div>
            <div className="bg-neutral-900 p-8 rounded-xl shadow-lg">
              <h2 className="text-yellow-400 text-2xl font-bold mb-4">
                Our Mission
              </h2>
              <p>
                To consistently deliver creative, customized, and cost-effective
                event management solutions that exceed our client expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Team & Story */}
        <section className="bg-neutral-950 py-16 px-4 md:px-20 text-white">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-yellow-400 text-xl font-semibold mb-4">
                Our Team
              </h3>
              <p>
                The White Horse team comprises of passionate professionals with
                expertise across event planning, marketing, design, production,
                and client servicing. Every project is handled by a team that’s
                driven by creativity and execution excellence.
              </p>
            </div>
            <div>
              <h3 className="text-yellow-400 text-xl font-semibold mb-4">
                Our Story
              </h3>
              <p>
                White Horse started with the goal of reshaping the events
                industry. Frustrated by generic events, our founders envisioned
                an agency where creativity, logistics, and strategy merged to
                create powerful, memorable experiences for every audience.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-yellow-400 text-black py-16 px-4 md:px-20 text-center">
          <h2 className="text-2xl font-bold mb-8">OUR VALUES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-2">Integrity</h4>
              <p>We honor our commitments and act with transparency.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Innovation</h4>
              <p>
                We deliver fresh, trend-setting event ideas that make an impact.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Excellence</h4>
              <p>We strive to exceed client expectations at every step.</p>
            </div>
          </div>
        </section>

        {/* Team Members (Optional – Replace with real images later) */}
        <section className="bg-black py-16 px-4 md:px-20 text-center">
          <h2 className="text-yellow-400 text-3xl font-bold mb-8">
            Meet Our Leadership
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Amit", "Priya", "Ravi", "Neha"].map((name, index) => (
              <div key={index} className="bg-neutral-900 rounded-xl p-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-yellow-400 mb-4">
                  <img src="/images/whem-logo-all_small.png" alt="team" />
                </div>
                <h4 className="font-semibold text-lg">{name}</h4>
                <p className="text-sm">Event Strategist</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
