"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Youtube } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const projects = [
  {
    title: "QueueLeaf",
    desc: "Queue management platform with real-time status updates, average wait times, and analytics. Winner of the 2025 iShowcase Award.",
    tags: ["Express.js", "Node.js", "REST APIs", "Prisma", "Frontend", "Analytics"],
    link: "https://queueleaf-frontend.vercel.app/",
  },
  {
    title: "DevPortfolio",
    desc: "Collection of Python projects showcasing fundamentals, problem-solving, and consistent shipping across multiple mini-apps.",
    tags: ["Python", "Projects", "Practice", "Problem Solving"],
    link: "https://github.com/Shukhratovs/DevPortfolio",
  },
  {
    title: "Uzbek Club Website",
    desc: "Designed and developed a community website to showcase events, culture, and activities for the Uzbek Club at the University of Arizona.",
    tags: ["HTML", "CSS", "JavaScript", "Web Design"],
    link: "https://uzsa.online/",
  },
];

function NoiseOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-[0.08] pointer-events-none"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
        backgroundSize: "180px 180px",
        animation: "grain 10s steps(10) infinite",
      }}
    />
  );
}

export default function CinematicPortfolioPreview() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      {/* Keyframes */}
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes grain {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-2%, -2%); }
          20% { transform: translate(2%, -1%); }
          30% { transform: translate(-3%, 2%); }
          40% { transform: translate(3%, 3%); }
          50% { transform: translate(-2%, 1%); }
          60% { transform: translate(2%, 2%); }
          70% { transform: translate(-1%, -3%); }
          80% { transform: translate(1%, 3%); }
          90% { transform: translate(-3%, -1%); }
          100% { transform: translate(0, 0); }
        }
      `}</style>

      {/* Background cinematic layers */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_10%,rgba(90,70,255,0.25),transparent_60%),radial-gradient(50%_50%_at_70%_30%,rgba(0,180,255,0.18),transparent_60%),radial-gradient(50%_50%_at_40%_80%,rgba(255,255,255,0.08),transparent_55%)]" />
        <NoiseOverlay />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black" />
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-sm tracking-wide text-white/80">
          <span className="font-semibold text-white">KS</span> / PORTFOLIO
        </div>
        <nav className="flex items-center gap-6 text-sm text-white/70">
          <a className="hover:text-white transition" href="#projects">Projects</a>
          <a className="hover:text-white transition" href="#about">About</a>
          <a className="hover:text-white transition" href="#experience">Experience</a>
          <a className="hover:text-white transition" href="#education">Education</a>
          <a className="hover:text-white transition" href="#certificates">Certificates</a>
          <a className="hover:text-white transition" href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            className="md:col-span-4 lg:col-span-4"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
              <img
                src="/me.png"
                alt="Portrait"
                className="h-[620px] w-full object-cover object-[50%_18%]"
              />

              {/* subtle edge vignette */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_55%,rgba(0,0,0,0.45)_100%)]" />

              {/* cinematic label */}
              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/70">
                Available for opportunities
              </div>

              {/* initials/name overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-xs uppercase tracking-[0.22em] text-white/60">
                  Hello, I am
                </div>
                <div className="mt-2 text-3xl md:text-4xl font-semibold leading-tight">
                  Khumoyun <span className="text-white/75">Shukhratov</span>
                </div>
                <div className="mt-2 text-sm text-white/70">
                  Software Engineer • Project Manager • Frontend • Backend • Product-minded builder
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            variants={fadeUp}
            className="md:col-span-7 space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">
              Cinematic • Smooth • Minimal
            </p>

            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05]">
              I build <span className="text-white/80">clean, modern products</span> with
              cinematic polish.
            </h1>

            <p className="max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
              Software engineer and project manager with a strong focus on frontend development, algorithms, and object-oriented programming. Experienced in building responsive web applications, integrating APIs, and delivering user-focused digital products.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                Contact
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <div className="ml-0 md:ml-4 flex items-center gap-3 text-white/70">
                <a
                  className="hover:text-white transition"
                  href="https://github.com/Shukhratovs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  className="hover:text-white transition"
                  href="https://www.linkedin.com/in/khumoyun-shukhratov-52925a26a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  className="hover:text-white transition"
                  href="mailto:otabekovich0050@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  className="hover:text-white transition"
                  href="https://www.youtube.com/@HumoDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel 1"
                  title="YouTube Channel 1"
                >
                  <Youtube className="h-6 w-6" />
                </a>

                <a
                  className="hover:text-white transition"
                  href="https://www.youtube.com/@Shukhratovs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel 2"
                  title="YouTube Channel 2"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { k: "Focus", v: "Project Management, Frontend + product UX" },
                { k: "Stack", v: "Java, Python, HTML, CSS" },
                { k: "Style", v: "Cinematic motion + clarity" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-white/50">
                    {x.k}
                  </div>
                  <div className="mt-2 text-white/85">{x.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          variants={fadeUp}
          className="flex items-end justify-between gap-6"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">
              Selected Work
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">Projects</h2>
          </div>
          <p className="hidden md:block text-sm text-white/60 max-w-md">
            A few highlights that show product thinking, UI quality, and shipping ability.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: 0.05 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/[0.07] transition"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(90,70,255,0.18),transparent_45%)]" />
              </div>

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-white/60 group-hover:text-white transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <p className="mt-3 text-sm text-white/70 leading-relaxed">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-10 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.22em] text-white/60">About</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">Background & Focus</h2>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="text-white/70 leading-relaxed">
              My background is centered on software development, project management, algorithms,
              data structures, and object-oriented design. I enjoy building clean, maintainable
              systems that balance performance with usability.
            </p>
            <p className="text-white/70 leading-relaxed">
              I’ve led frontend development for real products, collaborated across teams, and worked
              with startups and mentorship programs that strengthened both my technical and
              professional skills.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-10 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.22em] text-white/60">Experience</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">Professional Experience</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold text-lg">Project Manager, Senior Software Engineer – QueueLeaf</h3>
              <p className="text-sm text-white/60">09/2025 – Present</p>
              <p className="mt-2 text-white/70">
                Led frontend development, integrated REST APIs, contributed to backend logic, and
                delivered real-time queue analytics. Winner of the 2025 iShowcase Award.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">IT / Project Manager – Uzbek Club (University of Arizona)</h3>
              <p className="text-sm text-white/60">02/2024 – 12/2025</p>
              <p className="mt-2 text-white/70">
                Developed and maintained the club’s website, managed digital content, and supported
                community engagement through web technologies.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Intern – IT Park Uzbekistan</h3>
              <p className="text-sm text-white/60">06/2025 – 08/2025</p>
              <p className="mt-2 text-white/70">
                Worked with startup ecosystems and venture investment teams, gaining exposure to real
                business processes and tech-driven growth.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Mentee – Reddit Mentorship Program</h3>
              <p className="text-sm text-white/60">01/2024 – 05/2024</p>
              <p className="mt-2 text-white/70">
                Selected to participate in the Reddit Mentorship Program, receiving one-on-one
                guidance from industry professionals in software development and career navigation.
                Strengthened technical foundations, goal-setting, and project planning while building
                connections with mentors and peers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-10 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.22em] text-white/60">Education</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">Education</h2>

          <div className="mt-6 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-semibold text-lg">University of Arizona</h3>
                <p className="text-sm text-white/60">Graduated 12/2025</p>
              </div>
              <p className="mt-2 text-white/70">
                B.S. – Computer and Information Science (CIS)
              </p>
              <p className="mt-1 text-white/60 text-sm">Minor: Business Administration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-10 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.22em] text-white/60">Certificates</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">Certificates & Awards</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="font-semibold">2025 iShowcase Award (QueueLeaf)</h3>
              <p className="mt-1 text-sm text-white/60">University of Arizona</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="font-semibold">El-yurt Umidi Foundation – Scholarship Holder</h3>
              <p className="mt-1 text-sm text-white/60">Uzbekistan</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="font-semibold">Reddit Ads Boost Certificate</h3>
              <p className="mt-1 text-sm text-white/60">Reddit</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="font-semibold">100 Days of Python Bootcamp</h3>
              <p className="mt-1 text-sm text-white/60">Udemy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-10 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.22em] text-white/60">Contact</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold">Let’s build something.</h2>

          <p className="mt-3 text-white/70 max-w-2xl">
            Want to collaborate or have a role that fits product thinking?
            Email me or just reach out on LinkedIn. I’ll respond quickly.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:otabekovich0050@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>

            <a
              href="https://github.com/Shukhratovs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/khumoyun-shukhratov-52925a26a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <footer className="mt-10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} • Built with Next.js • Deployed on Vercel
        </footer>
      </section>
    </div>
  );
}
