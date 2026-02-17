import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { MdRemoveRedEye, MdRocketLaunch } from "react-icons/md";

// ─── Core Values Data ────────────────────────────────────────────────────────
const values = [
  { id: 1, title: "Integrity" },
  { id: 2, title: "Transparency" },
  { id: 3, title: "Professionalism" },
  { id: 4, title: "Accountability" },
  { id: 5, title: "Client-Centered" },
  { id: 6, title: "Innovation" },
];

// ─── Stats ───────────────────────────────────────────────────────────────────
const stats = [
  { value: "100+", label: "Properties Managed" },
  { value: "50+", label: "Verified Clients" },
  { value: "5+", label: "Years in Rwanda" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[70vh] min-h-[500px] w-full">
          <img
            src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="MB&U Rwanda Real Estate"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />

          <div className="relative h-full flex items-end">
            <div className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 pb-14 sm:pb-16">
              <span className="text-white/70 text-xs tracking-widest uppercase font-medium block mb-4">
                About MB&amp;U
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] max-w-3xl">
                Rwanda's Trusted Property Partner
              </h1>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-[#0D0D0D]">
          <div className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0">
            <div className="grid grid-cols-3 divide-x divide-white/10">
              {stats.map((s) => (
                <div key={s.label} className="py-7 px-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-white/70 text-xs sm:text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────────────────────── */}
      <section className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — image */}
        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
  {/* Image */}
  <img
    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&auto=format&fit=crop&q=80"
    alt="Professional team handshake"
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30" />
</div>

          {/* Right — content */}
          <div className="flex flex-col justify-center gap-10">
            <div>
              <span className="text-xs font-bold text-gray-500 tracking-widest uppercase block mb-5">
                Who We Are
              </span>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                MB&amp;U Company Ltd is a full-service real estate and property management
                company based in Rwanda, providing professional services in property
                letting, sales brokerage, valuation, and regulatory compliance.
              </p>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                We operate through a digital platform combined with on-ground expertise
                to deliver transparent, efficient, and legally compliant property
                solutions for property owners, investors, and tenants. Our mission is to
                professionalize Rwanda's real estate sector by offering structured,
                commission-based services supported by technology and verified processes.
              </p>
            </div>

            {/* Vision block */}
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] flex items-center justify-center shrink-0">
                <MdRemoveRedEye className="text-white text-xl" />
              </div>
              <div id="vision" className="border-l-2 border-[#0D0D0D] pl-6">
                <span className="text-xs font-bold text-gray-500 tracking-widest uppercase block mb-2">
                  Our Vision
                </span>
                <p className="text-[#0D0D0D] text-base sm:text-lg font-medium leading-relaxed">
                  To become one of Rwanda's most trusted and technology-driven property
                  management and real estate service providers.
                </p>
              </div>
            </div>

            {/* Mission block */}
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                <MdRocketLaunch className="text-gray-500 text-xl" />
              </div>
              <div id="mission" className="border-l-2 border-gray-200 pl-6">
                <span className="text-xs font-bold text-gray-500 tracking-widest uppercase block mb-2">
                  Our Mission
                </span>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  To provide secure, transparent, and profitable property solutions for
                  landlords, investors, and buyers through professional management,
                  verified transactions, and regulatory compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE BREAK ───────────────────────────────────────── */}
<section className="relative w-full h-[40vh] min-h-[260px] overflow-hidden">
  {/* Image */}
  <img
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800&auto=format&fit=crop&q=80"
    alt="Modern city living"
    className="w-full h-full object-cover"
    style={{ objectPosition: "center 40%" }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40" />
</section>

      {/* ── CORE VALUES ──────────────────────────────────────────────────── */}
      <section className="mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 lg:px-0 py-16 sm:py-24">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0D0D] leading-tight">
            Our Core Values
          </h2>
          <p className="text-sm text-gray-600 sm:text-right max-w-xs">
            The principles that guide every decision and interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-100">
          {values.map((v, index) => {
            const col = index % 3;
            const row = Math.floor(index / 3);
            return (
              <div
                key={v.id}
                className={[
                  "group flex items-center gap-4 px-8 py-7 transition-all duration-200  cursor-default",
                  col < 2 ? "border-r border-gray-100" : "",
                  row < 1 ? "border-b border-gray-100" : "",
                ].join(" ")}
              >
                <span className="text-xs text-gray-500  tabular-nums font-[500] transition-colors duration-200">
                  0{v.id}
                </span>
                <span className="text-base font-bold text-[#0D0D0D] transition-colors duration-200">
                  {v.title}
                </span>
              </div>
            );
          })}
        </div>

      </section>

      <Footer />
    </div>
  );
}