import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Landing() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Squid</h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-white transition">
            Pricing
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        <Link to="/login">
          <Button className="bg-linear-to-r from-pink-500 to-purple-600 px-5 py-2 rounded-full hover:opacity-90">
            Get Started
          </Button>
        </Link>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative text-center pt-20 pb-32 px-6">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Beautiful Landing Page <br />
          Design for You
        </h2>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          Modern SaaS template with powerful components and
          clean minimal layout.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/login">
            <Button className="bg-linear-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full hover:opacity-90">
              Get Started
            </Button>
          </Link>

          <button className="border border-gray-600 px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>

        {/* Mock Dashboard Card */}
        <div className="mt-16 bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto border border-gray-800">
          <div className="h-64 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-xl"></div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center mb-16">
          Feature Boxes
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Analytics",
            "Collaboration",
            "Security",
            "Cloud Sync",
            "Fast Performance",
            "Customizable",
          ].map((item) => (
            <div
              key={item}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition"
            >
              <div className="w-12 h-12 bg-linear-to-r from-pink-500 to-purple-600 rounded-xl mb-4"></div>
              <h4 className="text-lg font-semibold mb-2">{item}</h4>
              <p className="text-gray-400 text-sm">
                Powerful tools built for modern SaaS platforms.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HELP SECTION ================= */}
      <section className="bg-gray-950 py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">
          We’re here to guide and help you at all times
        </h3>

        <p className="text-gray-400 max-w-xl mx-auto">
          Our expert team ensures smooth experience and
          seamless onboarding.
        </p>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-linear-to-r from-pink-500 to-purple-600 p-12 rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-4">
            Feel Free to Join our 15 Days Free Trial
          </h3>

          <Link to="/login">
            <Button className="bg-white text-black px-6 py-3 rounded-full hover:opacity-90">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="bg-gray-950 py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">
          Get In Touch
        </h3>

        <div className="max-w-xl mx-auto space-y-4">
          <input
            placeholder="Your Name"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-xl"
          />
          <input
            placeholder="Email"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-xl"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-xl"
          ></textarea>

          <Button className="w-full bg-linear-to-r from-pink-500 to-purple-600 py-3 rounded-xl hover:opacity-90">
            Send Message
          </Button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        © 2026 Squid. All rights reserved.
      </footer>
    </div>
  );
}
