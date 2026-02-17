"use client";

import { useState } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { MdOutlineLocationOn, MdOutlinePhone, MdOutlineEmail } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

// ─── Contact Details ──────────────────────────────────────────────────────────
const contactInfo = [
  {
    icon: <MdOutlinePhone className="text-xl" />,
    label: "Phone",
    value: "+250 788 000 000",
    href: "tel:+250788000000",
  },
  {
    icon: <MdOutlineEmail className="text-xl" />,
    label: "Email",
    value: "info@mbandu.rw",
    href: "mailto:info@mbandu.rw",
  },
  {
    icon: <MdOutlineLocationOn className="text-xl" />,
    label: "Location",
    value: "Kigali, Rwanda",
    href: "https://maps.google.com",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* ── HERO — same pattern as About ─────────────────────────────────── */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[55vh] min-h-[400px] w-full">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1800&auto=format&fit=crop&q=85"
            alt="Contact MB&U"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Dark gradient — left heavy like About */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

          {/* Text anchored bottom-left */}
          <div className="relative h-full flex items-end">
            <div className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 pb-12 sm:pb-14">
              <span className="text-white/70 text-xs tracking-widest uppercase font-medium block mb-4">
                Get in touch
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] max-w-2xl">
                Let's Start a Conversation
              </h1>
              <p className="mt-4 text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
                Have a question about a property or our services? We're here to help.
                Our team responds within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <section className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* ── LEFT — Contact Info + Map ──────────────────────────────── */}
          <div className="flex flex-col gap-10">

            {/* Contact detail rows */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 p-5 border border-gray-200 rounded-2xl hover:border-gray-400 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 shrink-0 group-hover:bg-[#0D0D0D] group-hover:text-white transition-all duration-200">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5 font-medium">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-[#0D0D0D]">{item.value}</p>
                  </div>
                  <FiArrowUpRight className="text-gray-400 group-hover:text-[#0D0D0D] transition-colors duration-200" />
                </a>
              ))}
            </div>

            {/* Google Map embed */}
            <div className="w-full rounded-2xl overflow-hidden border border-gray-200 aspect-[4/3]">
              <iframe
                title="MB&U Location — Kigali, Rwanda"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63799.99082849765!2d30.02944444697268!3d-1.9440727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1708000000000"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── RIGHT — Contact Form ───────────────────────────────────── */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0D0D0D] mb-2">
                Send us a message
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Fill in the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-start justify-center gap-4 py-16 border border-gray-200 rounded-2xl px-8">
                <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] flex items-center justify-center">
                  <FiArrowUpRight className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0D0D0D]">Message sent!</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Thank you, <span className="font-semibold text-[#0D0D0D]">{form.name}</span>.
                  We've received your message and will be in touch within 24 hours.
                </p>
                <button
                  onClick={() => { setForm({ name: "", email: "", message: "" }); setSubmitted(false); }}
                  className="mt-2 text-sm font-medium text-gray-600 hover:text-[#0D0D0D] transition-colors underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-5">

                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Jean Pierre Habimana"
                    className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-[#0D0D0D] placeholder-gray-500 outline-none focus:border-[#0D0D0D] transition-colors duration-200 bg-white"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    required
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-[#0D0D0D] placeholder-gray-500 outline-none focus:border-[#0D0D0D] transition-colors duration-200 bg-white"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    required
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    className="w-full border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-[#0D0D0D] placeholder-gray-500 outline-none focus:border-[#0D0D0D] transition-colors duration-200 bg-white resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                //   disabled={!form.name || !form.email || !form.message}
                  className="mt-2 flex items-center justify-center gap-2 w-full bg-[#0D0D0D] text-white text-sm font-semibold py-4 rounded-full hover:bg-black transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:gap-3"
                >
                  Send Message
                  <FiArrowUpRight className="text-lg" />
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}