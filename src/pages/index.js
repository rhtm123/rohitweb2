import Link from "next/link";
import Head from "next/head";
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaTools, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const cardVariants = {
    hover: {
      scale: 1.03,
      boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  const projects = [
    {
      title: "Coding Chaska",
      subtitle: "Online Courses",
      description: "Interactive learning platform offering courses, job-ready programs, and MCQ quizzes.",
      link: "https://www.codingchaska.com/",
      github: "https://github.com/rhtm123/cc-frontend-v2",
      tech: ["NextJs", "Tailwind", "DaisyUI", "Django", "PostgreSQL"],
    },
    {
      title: "Naigaon Market",
      subtitle: "Hyperlocal Online Store",
      description: "Redefining e-commerce for local communities with fair pricing and fast delivery.",
      link: "https://www.naigaonmarket.com/",
      github: "https://github.com/rhtm123/ecommerce-frontend",
      tech: ["Sveltekit", "Tailwind", "DaisyUI", "Django", "Postgres", "Django Ninja", "Twilio"],
    },
    {
      title: "Coding Chaska Lab",
      subtitle: "Online Editor",
      description: "Lightweight editor for HTML, CSS, and Python coding practice.",
      link: "https://www.codingchaskalab.com/",
      github: "https://github.com/rhtm123/cc-lab",
      tech: ["Svelte", "Tailwind", "Django", "PostgreSQL"],
    },
    {
      title: "CraftMySite(CMS)",
      subtitle: "Website Builder",
      description: "Tailwind-based website builder with pre-built sections and live preview.",
      link: "https://cms.growtechlab.com/",
      github: "https://github.com/rhtm123/gt-website-builder",
      tech: ["NextJs", "Django Ninja", "PostgreSQL", "Tailwind"],
    },
    {
      title: "Milk Ease",
      subtitle: "Blockchain Based Milk Supplychain",
      description: "Streamlines dairy supply with traceability and secure data management.",
      link: "https://milk-supplychain.vercel.app/",
      github: "https://github.com/rhtm123/milk-supplychain",
      tech: ["NextJs", "Express", "MongoDB", "Tailwind"],
    },
    {
      title: "Society Sathi",
      subtitle: "Society Management App",
      description: "Manages society operations with penalty systems, NOC, and alerts.",
      link: "https://www.societysathi.com/",
      github: "https://github.com/rhtm123/ff-frontend",
      tech: ["NextJs", "Express", "MongoDB", "Tailwind"],
    },
  ];

  return (
    <>
      <Head>
        <title>Website of Rohit Maurya, Lead Trainer at Coding Chaska</title>
        <meta
          name="description"
          content="Rohit Maurya is the Lead Trainer at Coding Chaska and Co-Founder of GrowTech Lab and Naigaon Market. He teaches Python, Web Development, Data Science, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>

      <main className="bg-base-100">
        {/* Hero Section */}
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Innovating IT Solutions <span className="text-primary">Empowering Future Coders</span>
              </h1>
              <p className="mt-4 text-lg text-base-content/80 leading-relaxed">
                Lead Trainer @ Coding Chaska and Co-Founder @ Growtech Lab & Naigaon Market. Passionate about building modern, high-performance web solutions and mentoring the next generation of developers.
              </p>
              <div className="mt-6 flex gap-4">
                <a href="https://www.naigaonmarket.com/" target="_blank" className="btn btn-primary btn-md">
                  Naigaon Market <FaArrowRight className="ml-2" />
                </a>
                <a href="https://www.growtechlab.com/" target="_blank" className="btn btn-outline btn-primary btn-md">
                  Growtech Lab
                </a>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="relative">
              <img className="w-full rounded-2xl shadow-lg" src="/images/hero1.jpg" alt="Rohit Maurya" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 via-base-100/0 to-base-100/0 rounded-2xl" />
            </motion.div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-base-200 py-16">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">My Works</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="card bg-base-100 border border-base-300 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="card-body">
                    <span className="text-sm font-semibold text-primary uppercase">{project.subtitle}</span>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-base-content/70">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="badge badge-outline badge-sm text-base-content/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="card-actions mt-4 flex justify-between">
                      <a href={project.link} target="_blank" className="btn btn-sm btn-primary">
                        Visit Site
                      </a>
                      <a href={project.github} target="_blank" className="btn btn-sm btn-outline">
                        View Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="https://www.growtechlab.com/projects" target="_blank" className="btn btn-ghost text-primary">
                See All Projects
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={cardVariants} whileHover="hover" className="card bg-base-100 border border-base-300 rounded-xl shadow-md p-6">
              <FaCode className="text-3xl text-primary mb-4" />
              <span className="text-sm font-semibold uppercase text-base-content/80">Languages</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Python", "JavaScript", "Java"].map((tech, idx) => (
                  <span key={idx} className="badge badge-outline badge-sm text-base-content/80">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="card bg-base-100 border border-base-300 rounded-xl shadow-md p-6">
              <FaLaptopCode className="text-3xl text-primary mb-4" />
              <span className="text-sm font-semibold uppercase text-base-content/80">Frontend</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["React", "NextJS", "TailwindCSS", "Svelte"].map((tech, idx) => (
                  <span key={idx} className="badge badge-outline badge-sm text-base-content/80">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="card bg-base-100 border border-base-300 rounded-xl shadow-md p-6">
              <FaServer className="text-3xl text-primary mb-4" />
              <span className="text-sm font-semibold uppercase text-base-content/80">Backend</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Django", "NodeJS & ExpressJS", "FastAPI", "Flask"].map((tech, idx) => (
                  <span key={idx} className="badge badge-outline badge-sm text-base-content/80">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="card bg-base-100 border border-base-300 rounded-xl shadow-md p-6">
              <FaDatabase className="text-3xl text-primary mb-4" />
              <span className="text-sm font-semibold uppercase text-base-content/80">Database</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Postgres", "MongoDB", "Prisma"].map((tech, idx) => (
                  <span key={idx} className="badge badge-outline badge-sm text-base-content/80">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={cardVariants} whileHover="hover" className="card bg-base-100 border border-base-300 rounded-xl shadow-md p-6">
              <FaTools className="text-3xl text-primary mb-4" />
              <span className="text-sm font-semibold uppercase text-base-content/80">Tools</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Git & GitHub", "Docker", "Vercel"].map((tech, idx) => (
                  <span key={idx} className="badge badge-outline badge-sm text-base-content/80">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="bg-base-200 py-16">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">My Journey</h2>
            <div className="md:w-3/4 mx-auto">
              {/* Naigaon Market - Co-Founder */}
              <div className="relative flex gap-6 pb-8">
                <div className="relative after:absolute after:top-10 after:bottom-0 after:left-4 after:w-px after:bg-base-300">
                  <img src="/images/nm.png" alt="Naigaon Market" className="w-8 h-8 rounded-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-base-content/70">June 2025 - Present</h3>
                  <p className="font-semibold text-lg">Co-Founder, Naigaon Market</p>
                  <p className="mt-2 text-base-content/80">
                    Building a hyper-local e-commerce platform for Naigaon, focusing on fair pricing and community-driven commerce.
                  </p>
                  <ul className="list-disc pl-5 mt-3 text-base-content/80">
                    <li>Developed platform with 15-25% higher seller margins than competitors.</li>
                    <li>Implemented same-day delivery system for Naigaon.</li>
                    <li>Onboarded 10+ local sellers in the first month.</li>
                  </ul>
                  <a href="https://www.naigaonmarket.com/" target="_blank" className="mt-4 block card bg-base-100 border border-base-300 rounded-xl shadow-sm hover:shadow-md">
                    <div className="flex items-center">
                      <img src="/images/nm_cover.png" alt="Naigaon Market" className="w-24 h-24 object-cover rounded-l-xl" />
                      <div className="p-4">
                        <h3 className="font-semibold text-primary">Naigaon Market</h3>
                        <p className="text-sm text-base-content/80">Local marketplace for best prices and fast delivery.</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* Growtech Lab */}
              <div className="relative flex gap-6 pb-8">
                <div className="relative after:absolute after:top-10 after:bottom-0 after:left-4 after:w-px after:bg-base-300">
                  <img src="/images/growtechlab.png" alt="Growtech Lab" className="w-8 h-8 rounded-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-base-content/70">Jul 2024 - Present</h3>
                  <p className="font-semibold text-lg">Co-Founder, Growtech Lab</p>
                  <p className="mt-2 text-base-content/80">
                    Leading IT solutions provider focusing on digital marketing and custom web development.
                  </p>
                  <ul className="list-disc pl-5 mt-3 text-base-content/80">
                    <li>Spearheaded projects for SMBs to enterprise clients.</li>
                    <li>Introduced client-friendly CMS and website builder tools.</li>
                    <li>Built a team delivering innovative solutions.</li>
                  </ul>
                  <a href="https://www.growtechlab.com/" target="_blank" className="mt-4 block card bg-base-100 border border-base-300 rounded-xl shadow-sm hover:shadow-md">
                    <div className="flex items-center">
                      <img src="https://www.growtechlab.com/image/apna-website-hero.jpg" alt="Growtech Lab" className="w-24 h-24 object-cover rounded-l-xl" />
                      <div className="p-4">
                        <h3 className="font-semibold text-primary">Growtech Lab</h3>
                        <p className="text-sm text-base-content/80">Expert website development and digital marketing solutions.</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* Coding Chaska */}
              <div className="relative flex gap-6 pb-8">
                <div className="relative after:absolute after:top-10 after:bottom-0 after:left-4 after:w-px after:bg-base-300">
                  <img src="/images/codingchaska.png" alt="Coding Chaska" className="w-8 h-8 rounded-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-base-content/70">May 2022 - Present</h3>
                  <p className="font-semibold text-lg">Lead Trainer, Coding Chaska</p>
                  <p className="mt-2 text-base-content/80">
                    Managing an IT education platform, overseeing curriculum development, and mentoring students.
                  </p>
                  <ul className="list-disc pl-5 mt-3 text-base-content/80">
                    <li>Launched courses in web development, data science, and Python.</li>
                    <li>Partnered with institutions to expand curriculum reach.</li>
                    <li>Mentored students to secure tech internships and jobs.</li>
                  </ul>
                  <a href="https://www.codingchaska.com/" target="_blank" className="mt-4 block card bg-base-100 border border-base-300 rounded-xl shadow-sm hover:shadow-md">
                    <div className="flex items-center">
                      <img src="https://www.codingchaska.com/images/home/hero_new.avif" alt="Coding Chaska" className="w-24 h-24 object-cover rounded-l-xl" />
                      <div className="p-4">
                        <h3 className="font-semibold text-primary">Coding Chaska</h3>
                        <p className="text-sm text-base-content/80">Job-ready programs and live coding courses.</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* Freelance IT Trainer */}
              <div className="relative flex gap-6 pb-8">
                <div className="relative after:absolute after:top-10 after:bottom-0 after:left-4 after:w-px after:bg-base-300">
                  <img src="/logo.png" alt="Freelance IT Trainer" className="w-8 h-8 rounded-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-base-content/70">Oct 2017 - Presents</h3>
                  <p className="font-semibold text-lg">Freelance IT Trainer</p>
                  <p className="mt-2 text-base-content/80">
                    Provided IT training in Python, web development, and data science while delivering web projects across industries.
                  </p>

                  <ul className="list-disc pl-5 mt-3 text-base-content/80">
                    <li>Conducted online training using platforms like Zoom, Google Classroom, and digital whiteboards.</li>
                    <li>Focused on concept clarity, problem-solving, and building real-world coding skills.</li>
                    <li>Conducted workshops, live coding sessions, and project reviews to reinforce practical understanding</li>
                  </ul>
                </div>
              </div>
              {/* Mazkara Internet */}
              <div className="relative flex gap-6 pb-8">
                <div className="relative after:absolute after:top-10 after:bottom-0 after:left-4 after:w-px after:bg-base-300">
                  <img src="/images/mazkara.jpg" alt="Mazkara Internet" className="w-8 h-8 rounded-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-base-content/70">Mar 2017 - Jun 2017</h3>
                  <p className="font-semibold text-lg">Backend Developer, Mazkara Internet</p>
                  <p className="mt-2 text-base-content/80">
                    Built and optimized backend systems, integrating third-party services for reliable data flow.
                  </p>
                </div>
              </div>
              {/* Tourepedia */}
              <div className="relative flex gap-6 pb-8">
                <div className="relative after:absolute after:top-10 after:bottom-0 after:left-4 after:w-px after:bg-base-300">
                  <img src="/images/tourepedia.jpg" alt="Tourepedia" className="w-8 h-8 rounded-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-base-content/70">Apr 2016 - Feb 2017</h3>
                  <p className="font-semibold text-lg">Co-Founder, Tourepedia</p>
                  <p className="mt-2 text-base-content/80">
                    Led website development for a travel platform, enhancing user experience for tour planning and booking.
                  </p>
                </div>
              </div>
              {/* IIT Kanpur */}
              <div className="relative flex gap-6 pb-8">
                <div className="relative after:absolute after:top-10 after:bottom-0 after:left-4 after:w-px after:bg-base-300">
                  <img src="/images/iitkanpur.jpg" alt="IIT Kanpur" className="w-8 h-8 rounded-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-base-content/70">2012 - 2016</h3>
                  <p className="font-semibold text-lg">BS Physics, IIT Kanpur</p>
                  <p className="mt-2 text-base-content/80">
                    Gained expertise in physics, computational techniques, and problem-solving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}