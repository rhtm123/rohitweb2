
import Link from "next/link";
import Head from "next/head";
// import { GrTechnology } from "react-icons/gr";
// import { TfiWrite } from "react-icons/tfi";
// import { LuBuilding } from "react-icons/lu";

import { motion } from "framer-motion"; // Import Framer Motion

export default function Home() {

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    },
  };

  const projects = [
    {
      title: "Coding Chaska",
      subtitle: "Online Courses",
      description: "Coding Chaska is a online learning platform where you can find interactive courses.",
      link: "https://www.codingchaska.com/",
      github:"https://github.com/rhtm123/cc-frontend-v2",
      tech: ["NextJs", "Tailwind", "DaisyUI", "Django", "PostgreSQL"],
    },
    {
      title: "Coding Chaska Lab",
      subtitle: "Online Editor",
      description: "CC Lab is lightweight online editor. You can write code as well as solve coding problems.",
      link: "https://www.codingchaskalab.com/",
      github:"https://github.com/rhtm123/cc-lab",
      tech: ["Svelte", "Tailwind", "Django", "PostgreSQL"],
    },
    {
      title: "Manage Society",
      subtitle: "Society Management App",
      description: "SocietySathi is designed to solve all critical problems of a Society.",
      link: "https://www.societysathi.com/",
      github:"https://github.com/rhtm123/ff-frontend",
      tech: ["NextJs", "Express", "MongoDB", "Tailwind"],
    },
  ];


  
  return (
    <>

      <Head>
        <title>Website of Rohit Maurya, Founder Coding Chaska</title>
        <meta
          name="description"
          content="Rohit Maurya is founder of Coding Chaska. He teaches Python, Website development, Data Science, and Many more IT subjects"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>


    <main>

          {/* <HoverEffect items={projects} /> */}


    <>
  {/* Hero */}
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-8 mt-8 mb-12">
    {/* Grid */}
    <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
      <div>
        <h1 className="block text-3xl font-bold md:text-4xl md:leading-tight">
          Creating innovative IT projects <span className="text-primary">Educating future innovators</span>
        </h1>
        <p className="mt-3 text-lg opacity-90">
        Founder @ Coding Chaska & Growtech Lab. I am a passionate developer with a strong zeal to work with emerging startups. I love to work with the latest technologies and build modern and blazing fast websites.

        </p>
{/* 
        <div className="py-4 opacity-80">
            <span className="font-bold">✅ 500+  </span> students taught ✅ <span className="font-bold">10+ </span> complex IT projects delivered
        </div> */}

        {/* Buttons */}
        <div className="mt-4 grid gap-3 w-full sm:inline-flex">

        <a
            className="btn btn-primary"
            href="https://www.codingchaska.com/"
            target="_blank"
          >
            Coding Chaska
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
          
          
          <a
            className="btn btn-primary btn-outline"
            href="https://www.growtechlab.com/"
            target="_blank"
          >
            Growtech Lab
          </a>

          
        </div>
        {/* End Buttons */}
       


      
      </div>
      {/* End Col */}
      <motion.div className="relative ms-4" initial="initial" animate="animate">
        <img
          className="w-full rounded-xl" src="/images/hero1.jpg" alt="Rohit Maurya" 
        />
        <motion.div  className="absolute inset-0 -z-[1] bg-gradient-to-tr from-primary via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 md:mt-6 md:-mb-6 md:me-6 md:-ms-6 dark:from-primary dark:via-neutral-900/0 dark:to-neutral-900/0" {...fadeInUp} />
        {/* SVG*/}
        <div className="absolute bottom-0 start-0">
          <svg
            className="w-2/3 ms-auto h-auto text-primary"
            width={630}
            height={451}
            viewBox="0 0 630 451"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x={531} y={352} width={99} height={99} fill="currentColor" />
            <rect x={140} y={352} width={106} height={99} fill="currentColor" />
            <rect x={482} y={402} width={64} height={49} fill="currentColor" />
            <rect x={433} y={402} width={63} height={49} fill="currentColor" />
            <rect x={384} y={352} width={49} height={50} fill="currentColor" />
            <rect x={531} y={328} width={50} height={50} fill="currentColor" />
            <rect x={99} y={303} width={49} height={58} fill="currentColor" />
            <rect x={99} y={352} width={49} height={50} fill="currentColor" />
            <rect x={99} y={392} width={49} height={59} fill="currentColor" />
            <rect x={44} y={402} width={66} height={49} fill="currentColor" />
            <rect x={234} y={402} width={62} height={49} fill="currentColor" />
            <rect x={334} y={303} width={50} height={49} fill="currentColor" />
            <rect x={581} width={49} height={49} fill="currentColor" />
            <rect x={581} width={49} height={64} fill="currentColor" />
            <rect x={482} y={123} width={49} height={49} fill="currentColor" />
            <rect x={507} y={124} width={49} height={24} fill="currentColor" />
            <rect x={531} y={49} width={99} height={99} fill="currentColor" />
          </svg>
        </div>
        {/* End SVG*/}
      </motion.div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Hero */}
</>






<div className="bg-base-200 max-w-[85rem] px-4 py-10 sm:px-6 md:px-8 md:py-14 mx-auto">

        <h2 className="text-center text-4xl font-bold mb-10">
          My Skills & Technologies
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 py-4 gap-6">
          {/* Card 1 - Languages */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group flex flex-col h-full bg-base-100 hover:bg-base-200 border shadow-sm rounded-xl p-6"
          >
            <div>
              <span className="block mb-4 opacity-80 font-semibold uppercase">
                Languages
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="cursor-default badge badge-outline opacity-75">
                  Python
                </span>
                <span className="cursor-default badge badge-outline opacity-75">
                  JavaScript
                </span>
                <span className="cursor-default badge badge-outline opacity-75">
                  Java
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Frontend Libraries */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group flex flex-col h-full bg-base-100 hover:bg-base-200 border shadow-sm rounded-xl p-6"
          >
            <div>
              <span className="block mb-4 opacity-80 font-semibold uppercase">
                Frontend Libraries & Frameworks
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="cursor-default badge badge-outline opacity-75">
                  React
                </span>
                <span className="cursor-default badge badge-outline opacity-75">
                  NextJS
                </span>
                <span className="cursor-default badge badge-outline opacity-75">
                  TailwindCSS
                </span>
                <span className="cursor-default badge badge-outline opacity-75">
                  Svelte
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Backend */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group flex flex-col h-full bg-base-100 hover:bg-base-200 border shadow-sm rounded-xl p-6"
          >
            <div>
              <span className="block mb-4 opacity-80 font-semibold uppercase">
                Backend
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="cursor-default badge badge-outline opacity-75">
                  Django
                </span>
                <span className="cursor-default badge badge-outline opacity-75">
                  NodeJS & ExpressJS
                </span>
                <span className="cursor-default badge badge-outline opacity-75">
                  FastAPI
                </span>
                <span className="cursor-default badge badge-outline opacity-75">
                  Flask
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Database */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group flex flex-col h-full bg-base-100 hover:bg-base-200 border shadow-sm rounded-xl p-6"
          >
            <div>
              <span className="block mb-4 opacity-80 font-semibold uppercase">
                Database
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="cursor-default badge badge-outline opacity-75">
                  Postgres
                </span>
                <span className="cursor-default badge badge-outline opacity-75">
                  MongoDB
                </span>
                <span className="cursor-default badge badge-outline opacity-75">
                  Prisma
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 5 - Tools & Technologies */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group flex flex-col h-full bg-base-100 hover:bg-base-200 border shadow-sm rounded-xl p-6"
          >
            <div>
              <span className="block mb-4 opacity-80 font-semibold uppercase">
                Tools & Technologies
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="cursor-default badge badge-outline opacity-75">
                  Git & GitHub
                </span>
                <span className="cursor-default badge badge-outline opacity-75">
                  Docker
                </span>
                <span className="cursor-default badge badge-outline opacity-75">
                  Vercel
                </span>
              </div>
            </div>
          </motion.div>
        </div>


</div>





<div className="bg-base-100 max-w-[85rem] px-4 py-10 sm:px-6 md:px-8 md:py-14 mx-auto">
          <h1 className="block text-3xl py-4 font-bold sm:text-4xl md:text-4xl md:text-4xl text-center">My Journey</h1>



          <div className="md:w-4/6 md:m-auto py-6">
  {/* Item */}
  <div className="group relative flex gap-x-5">
    {/* Icon */}
    <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
      <div className="relative z-10 size-6 flex justify-center items-center">
        <img src="/images/growtechlab.png" alt="Growtech Lab" />
      </div>
    </div>
    {/* End Icon */}
    {/* Right Content */}
    <div className="grow pb-8 group-last:pb-0">
      <h3 className="mb-1 text-xs opacity-80">
        Jul 2024 - Present
      </h3>
      <p className="font-semibold text-sm ">
        Co-Founder, Growtech Lab
      </p>
      <p className="mt-1 text-sm opacity-75">
        Leading the company toward becoming a top IT solutions provider, focusing on digital marketing, custom website development, and tech-driven solutions.
      </p>
      <ul className="list-disc ms-6 mt-3 space-y-1">
        <li className="ps-1 text-sm opacity-75">
          Spearheaded multiple client projects from SMBs to enterprise-level.
        </li>
        <li className="ps-1 text-sm opacity-75">
          Introduced client-friendly CMS and website builder tools.
        </li>
        <li className="ps-1 text-sm opacity-75">
          Built a talented team focused on delivering innovative solutions.
        </li>
      </ul>

      <div className="mt-4">
        <a
          className="block border rounded-lg hover:shadow-sm focus:outline-none"
          href="https://www.growtechlab.com/"
          target="_blank"
        >
          <div className="relative flex items-center overflow-hidden">
            <img
              className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
              src="https://www.growtechlab.com/image/apna-website-hero.jpg"
              alt="Growtech Lab Website"
            />
            <div className="grow p-4 ms-32 sm:ms-48">
              <div className="min-h-24 flex flex-col justify-center">
                <h3 className="font-semibold text-sm text-primary">
                  Growtech Lab
                </h3>
                <p className="mt-1 text-sm opacity-75">
                Transform Your Online Presence with Expert Website Development, Mobile App Creation, and Strategic Digital Marketing Solutions
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    {/* End Right Content */}
  </div>
  {/* End Item */}

  {/* Item */}
  <div className="group relative flex gap-x-5">
    {/* Icon */}
    <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
      <div className="relative z-10 size-6 flex justify-center items-center">
        <img src="/images/codingchaska.png" alt="Coding Chaska" />
      </div>
    </div>
    {/* End Icon */}
    {/* Right Content */}
    <div className="grow pb-8 group-last:pb-0">
      <h3 className="mb-1 text-xs opacity-80">
        May 2022 - Present
      </h3>
      <p className="font-semibold text-sm">
        Founder, Coding Chaska
      </p>
      <p className="mt-1 text-sm opacity-75">
        Managing an IT education platform focused on teaching tech skills to students and professionals, overseeing curriculum development, and mentoring students.
      </p>

      <ul className="list-disc ms-6 mt-3 space-y-1.5">
                  <li className="ps-1 text-sm opacity-75">
                    Designed and launched comprehensive courses in web development, data science, and Python programming.
                  </li>
                  <li className="ps-1 text-sm opacity-75">
                    Established partnerships with educational institutions to expand the reach of Coding Chaska’s curriculum.
                  </li>
                  <li className="ps-1 text-sm opacity-75">
                    Mentored students, many of whom have gone on to secure internships and full-time positions in tech companies.
                  </li>
                </ul>
                
      <div className="mt-4">
        <a
          className="block border rounded-lg hover:shadow-sm focus:outline-none"
          href="https://www.codingchaska.com/"
          target="_blank"
        >
          <div className="relative flex items-center overflow-hidden">
            <img
              className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
              src="https://www.codingchaska.com/images/home/hero_new.avif"
              alt="Coding Chaska Website"
            />
            <div className="grow p-4 ms-32 sm:ms-48">
              <div className="min-h-24 flex flex-col justify-center">
                <h3 className="font-semibold text-sm text-primary">
                  Coding Chaska
                </h3>
                <p className="mt-1 text-sm opacity-75">
                  Start your Coding journey with Coding Chaska. Job ready programs, live courses, and self-paced courses
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    {/* End Right Content */}
  </div>
  {/* End Item */}

  {/* Item */}
  <div className="group relative flex gap-x-5">
    {/* Icon */}
    <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
      <div className="relative z-10 size-6 flex justify-center items-center">
        <img src="/logo.png" alt="Freelance IT Trainer" />
      </div>
    </div>
    {/* End Icon */}
    {/* Right Content */}
    <div className="grow pb-8 group-last:pb-0">
      <h3 className="mb-1 text-xs opacity-80">
        Oct 2017 - May 2022
      </h3>
      <p className="font-semibold text-sm">
        Freelance IT Trainer
      </p>
      <p className="mt-1 text-sm opacity-75">
      For over four years, I pursued freelance work, focusing on both IT education and hands-on development projects. I provided IT training, specializing in Python, web development, and data science, to students and professionals alike. Simultaneously, I worked on various web development projects, delivering quality solutions to clients across different industries.
      </p>
    </div>
    {/* End Right Content */}
  </div>
  {/* End Item */}

  {/* Item */}
  <div className="group relative flex gap-x-5">
    {/* Icon */}
    <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
      <div className="relative z-10 size-6 flex justify-center items-center">
        <img src="/images/mazkara.jpg" alt="Mazkara Internet" />
      </div>
    </div>
    {/* End Icon */}
    {/* Right Content */}
    <div className="grow pb-8 group-last:pb-0">
      <h3 className="mb-1 text-xs opacity-80">
        Mar 2017 - Jun 2017
      </h3>
      <p className="font-semibold text-sm">
        Backend Developer, Mazkara Internet
      </p>
      <p className="mt-1 text-sm opacity-75">

      At Mazkara Internet, I worked as a backend developer, ensuring the smooth operation of the company's systems by building and optimizing backend functionalities. I played a key role in maintaining the server-side logic, integrating third-party services, and ensuring the reliability of the data flow.

      </p>
    </div>
    {/* End Right Content */}
  </div>
  {/* End Item */}

  {/* Item */}
  <div className="group relative flex gap-x-5">
    {/* Icon */}
    <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
      <div className="relative z-10 size-6 flex justify-center items-center">
        <img src="/images/tourepedia.jpg" alt="Tourepedia" />
      </div>
    </div>
    {/* End Icon */}
    {/* Right Content */}
    <div className="grow pb-8 group-last:pb-0">
      <h3 className="mb-1 text-xs opacity-80">
        Apr 2016 - Feb 2017
      </h3>
      <p className="font-semibold text-sm">
        Co-Founder, Tourepedia
      </p>
      <p className="mt-1 text-sm opacity-75">
      As a co-founder of Tourepedia, I was deeply involved in the conceptualization and development of the company's web platform. My focus was on building a seamless user experience that allowed travelers to easily plan and book their tours. Collaborating closely with the team, I led the website development efforts, which helped grow the platform's user base during the initial stages of the startup.
      </p>
    </div>
    {/* End Right Content */}
  </div>
  {/* End Item */}

  {/* Item */}
  <div className="group relative flex gap-x-5">
    {/* Icon */}
    <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
      <div className="relative z-10 size-6 flex justify-center items-center">
        <img src="/images/iitkanpur.jpg" alt="IIT Kanpur" />
      </div>
    </div>
    {/* End Icon */}
    {/* Right Content */}
    <div className="grow pb-8 group-last:pb-0">
      <h3 className="mb-1 text-xs opacity-80">
        2012 - 2016
      </h3>
      <p className="font-semibold text-sm">
        BS Physics,
        IIT Kanpur </p> <p className="mt-1 text-sm opacity-75"> Gained in-depth knowledge of physics, computational techniques, and problem-solving skills. </p> </div> {/* End Right Content */}

    </div> {/* End Item */} 
    
    </div>


        </div>




  <div className="bg-base-200 max-w-[85rem] px-4 py-10 sm:px-6 md:px-8 md:py-14 mx-auto">
    <h1 className="block text-3xl py-8 font-bold sm:text-4xl md:text-4xl md:text-4xl text-center">My Works</h1>

    {/* Grid */}
    <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Card */}

      {projects.map((project, index)=>
       <motion.div 
        key={index}  
        whileHover={{ scale: 1.04 }}
        className="group flex flex-col bg-base-100 h-full hover:bg-base-200 border shadow-sm rounded-xl hover:shadow-lg">
       
       <div className="p-4 md:p-6">
         <span className="block mb-1 text-xs font-semibold uppercase text-primary">
           {project.subtitle}
         </span>
         <h3 className="text-xl font-semibold ">
           {project.name}
         </h3>
         <p className="mt-3 opacity-75">
           {project.description}
         </p>

         <div className="flex flex-wrap gap-2 pt-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="badge badge-outline px-2 py-1 opacity-80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

       </div>
       <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
         <a target="_blank"
           className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-base-100 shadow-sm hover:bg-base-300 "
           href={project.link}
         >
           Visit Site
         </a>
         <a 
           target="_blank"
           className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-base-100  shadow-sm hover:bg-base-300"
           href={project.github}
         >
           View Code
         </a>
       </div>
     </motion.div>
      
      )}
    </div>
    {/* End Grid */}
    <div className="my-8 text-center">
    <a href="https://www.growtechlab.com/projects" target="_blank" className="text-primary border px-2 py-1 rounded-lg">See all my works</a>
    </div>
    

  </div>


    </main>

    </>
  )
}
