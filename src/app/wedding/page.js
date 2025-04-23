// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// export default function WeddingPage() {
//   return (
//     <main className="flex flex-col items-center justify-center">
//       {/* Hero Section */}
//       <section
//         className="relative w-full h-screen bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1521540216272-a50305cd4421?fit=crop&w=1650&q=80')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">
//             Welcome to White Horse World
//           </h1>
//           <p className="text-xl mb-6">
//             Turning Your Dream Wedding into a Magical Reality
//           </p>
//           <Button className="text-lg px-6 py-3">Plan Your Wedding</Button>
//         </div>
//       </section>

//       {/* About Us */}
//       <section className="w-full max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
//         <Image
//           src="https://images.unsplash.com/photo-1559329007-5092d95b1aa1?fit=crop&w=800&q=80"
//           width={600}
//           height={400}
//           alt="Team working"
//           className="rounded-2xl"
//         />
//         <div>
//           <h2 className="text-4xl font-bold mb-4">About White Horse World</h2>
//           <p className="text-lg text-gray-700">
//             White Horse World is a premier wedding management company, renowned
//             for curating unforgettable events with elegance, creativity, and
//             impeccable planning. From intimate ceremonies to grand celebrations,
//             we bring your vision to life with grace and style.
//           </p>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="w-full max-w-6xl px-4 py-16 text-center">
//         <h2 className="text-4xl font-bold mb-10">Our Services</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             "Planning",
//             "Venue Selection",
//             "Decor & Styling",
//             "Catering",
//             "Photography",
//             "Entertainment",
//             "Makeup & Styling",
//             "Destination Weddings",
//           ].map((service, i) => (
//             <Card key={i} className="p-6">
//               <CardContent>
//                 <h3 className="text-xl font-semibold mb-2">{service}</h3>
//                 <p className="text-sm text-gray-600">
//                   We handle every aspect of {service.toLowerCase()} with utmost
//                   care and professionalism.
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* Gallery */}
//       <section className="w-full bg-gray-100 py-16 px-4">
//         <h2 className="text-4xl font-bold text-center mb-10">Gallery</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
//           {["gallery1", "gallery2", "gallery3", "gallery4"].map((id, i) => (
//             <Image
//               key={i}
//               src={`https://source.unsplash.com/featured/?wedding,${i}`}
//               width={300}
//               height={200}
//               alt="Wedding moment"
//               className="rounded-xl"
//             />
//           ))}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="w-full max-w-4xl px-4 py-16 text-center">
//         <h2 className="text-4xl font-bold mb-10">What Our Clients Say</h2>
//         <div className="space-y-8">
//           {[
//             {
//               name: "Anjali & Rohan",
//               quote: "Absolutely magical! Every detail was perfect.",
//             },
//             {
//               name: "Priya & Kunal",
//               quote:
//                 "White Horse World made our dream wedding a reality. Truly the best!",
//             },
//             {
//               name: "Neha & Arjun",
//               quote: "From decor to coordination, everything was flawless.",
//             },
//           ].map((testimonial, i) => (
//             <Card key={i} className="p-6 shadow-xl">
//               <CardContent>
//                 <p className="italic text-lg mb-2">
//                   &quot;{testimonial.quote}&quot;
//                 </p>
//                 <p className="font-semibold">- {testimonial.name}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* Contact CTA */}
//       <section className="bg-pink-100 w-full py-16 text-center">
//         <h2 className="text-4xl font-bold mb-4">
//           Let’s Make Your Wedding Magical
//         </h2>
//         <p className="text-lg mb-6">
//           Schedule a free consultation with White Horse World today!
//         </p>
//         <Button className="text-lg px-6 py-3">Book a Consultation</Button>
//       </section>

//       {/* Footer */}
//       <footer className="w-full bg-gray-900 text-white py-10 text-center">
//         <p>
//           &copy; {new Date().getFullYear()} White Horse World. All rights
//           reserved.
//         </p>
//         <div className="mt-2 space-x-4">
//           <a href="#" className="hover:underline">
//             Instagram
//           </a>
//           <a href="#" className="hover:underline">
//             Facebook
//           </a>
//           <a href="#" className="hover:underline">
//             Contact
//           </a>
//         </div>
//       </footer>
//     </main>
//   );
// }

"use client";

import Image from "next/image";
import { Button } from "rsuite";
import { Panel, PanelGroup, Container, Grid, Row, Col } from "rsuite";

export default function WeddingPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521540216272-a50305cd4421?fit=crop&w=1650&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center p-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to White Horse World
          </h1>
          <p className="text-xl mb-6">
            Turning Your Dream Wedding into a Magical Reality
          </p>
          <Button appearance="primary" size="lg">
            Plan Your Wedding
          </Button>
        </div>
      </section>

      {/* About Us */}
      <section className="w-full max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <Image
          src="https://images.unsplash.com/photo-1559329007-5092d95b1aa1?fit=crop&w=800&q=80"
          width={600}
          height={400}
          alt="Team working"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">About White Horse World</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            White Horse World is a premier wedding management company, renowned
            for curating unforgettable events with elegance, creativity, and
            impeccable planning. From intimate ceremonies to grand celebrations,
            we bring your vision to life with grace and style.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="w-full max-w-7xl px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Planning",
            "Venue Selection",
            "Decor & Styling",
            "Catering",
            "Photography",
            "Entertainment",
            "Makeup & Styling",
            "Destination Weddings",
          ].map((service, i) => (
            <Panel
              key={i}
              bordered
              shaded
              className="bg-white rounded-xl shadow-md"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-sm text-gray-600">
                  We handle every aspect of {service.toLowerCase()} with utmost
                  care and professionalism.
                </p>
              </div>
            </Panel>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full bg-gray-100 py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-md">
              <Image
                src={`https://source.unsplash.com/featured/?wedding,${i}`}
                width={400}
                height={300}
                alt="Wedding moment"
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-4xl px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="space-y-10">
          {[
            {
              name: "Anjali & Rohan",
              quote: "Absolutely magical! Every detail was perfect.",
            },
            {
              name: "Priya & Kunal",
              quote:
                "White Horse World made our dream wedding a reality. Truly the best!",
            },
            {
              name: "Neha & Arjun",
              quote: "From decor to coordination, everything was flawless.",
            },
          ].map((testimonial, i) => (
            <Panel
              key={i}
              bordered
              shaded
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <p className="italic text-lg mb-3">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="font-semibold text-gray-800">
                - {testimonial.name}
              </p>
            </Panel>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-pink-100 w-full py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Let’s Make Your Wedding Magical
        </h2>
        <p className="text-lg mb-6">
          Schedule a free consultation with White Horse World today!
        </p>
        <Button appearance="primary" size="lg">
          Book a Consultation
        </Button>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-12 text-center">
        <p>
          &copy; {new Date().getFullYear()} White Horse World. All rights
          reserved.
        </p>
        <div className="mt-4 space-x-6">
          <a href="#" className="hover:underline">
            Instagram
          </a>
          <a href="#" className="hover:underline">
            Facebook
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
