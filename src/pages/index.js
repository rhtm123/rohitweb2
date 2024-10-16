
import Link from "next/link";
import Head from "next/head";
import { GrTechnology } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { LuBuilding } from "react-icons/lu";

import { motion } from "framer-motion"; // Import Framer Motion



export default function Home() {

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };


  
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

    <div className="py-4 px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12 lg:items-center" initial="initial" animate="animate">
            <motion.div className="py-6" {...fadeInUp}>
              <h1 className="block text-3xl font-bold sm:text-4xl md:text-4xl lg:text-4xl">Rohit Maurya [Developer & Trainer]</h1>
              <p className="my-3 text-lg">
                I am a passionate developer with a strong zeal to work with emerging startups. I love to work with the latest technologies and build modern and blazing fast websites.
              </p>
              <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <Link href={"/thoughts/" + "why-did-i-choose-to-become-an-educator-than-an-employee"}>
                  <button className="btn btn-primary">Know More</button>
                </Link>
              </div>
            </motion.div>

            <motion.div className="my-10" {...fadeInUp}>
              <img className="w-full rounded-xl" src="/images/hero1.jpg" alt="Rohit Maurya" />
            </motion.div>
          </motion.div>
        </div>


<div className="bg-base-300 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <h1 className="block text-3xl py-4 font-bold sm:text-4xl md:text-4xl lg:text-4xl">My Skills</h1>

  {/* Grid */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Card 1 */}
    {/* Add your existing cards here */}


    <div className="group flex flex-col h-full bg-base-100 border border-gray-200 shadow-sm rounded-xl">
      <div className="p-4 md:p-6">
        <span className="block mb-4 opacity-80 text-xs font-semibold uppercase">
          Languages
        </span>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="cursor-default	btn btn-sm">
            Python
          </span>
          <span className="cursor-default btn btn-sm">
            JavaScript
          </span>
          <span className="cursor-default btn btn-sm">
            Java
          </span>
          {/* Add more technologies as needed */}
        </div>
      </div>
    </div>


    
    <div className="group flex flex-col h-full bg-base-100 border border-gray-200 shadow-sm rounded-xl ">
      <div className="p-4 md:p-6">
        <span className="block mb-4 opacity-80 text-xs font-semibold uppercase">
          Frontend Libraries and frameworks
        </span>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="cursor-default btn btn-sm">
            React
          </span>
          <span className="cursor-default btn btn-sm">
            NextJS
          </span>
          <span className="cursor-default btn btn-sm">
            TailwindCSS
          </span>
          <span className="cursor-default btn btn-sm">
            JavaScript
          </span>
          <span className="cursor-default btn btn-sm">
            Svelte
          </span>

          {/* Add more technologies as needed */}
        </div>
      </div>
    </div>



    
    <div className="group flex flex-col h-full bg-base-100 border border-gray-200 shadow-sm rounded-xl">
      <div className="p-4 md:p-6">
        <span className="block mb-4 opacity-80 text-xs font-semibold uppercase">
          Backend
        </span>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="cursor-default btn btn-sm">
            Django
          </span>
          <span className="cursor-default btn btn-sm">
            NodeJs & ExpressJS
          </span>

          <span className="cursor-default btn btn-sm">
            FastAPI
          </span>
          <span className="cursor-default btn btn-sm">
            Flask
          </span>
          {/* Add more technologies as needed */}
        </div>
      </div>
    </div>
  

    <div  className="group flex flex-col h-full bg-base-100 border border-gray-200 shadow-sm rounded-xl ">
      <div className="p-4 md:p-6">
        <span className="block mb-4 opacity-80 text-xs font-semibold uppercase">
          Database
        </span>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="cursor-default btn btn-sm">
            Postgres
          </span>
          <span className="cursor-default btn btn-sm">
            MongoDB
          </span>
          <span className="cursor-default btn btn-sm">
            Prisma
          </span>

          {/* Add more technologies as needed */}
        </div>
      </div>
    </div>


    <div  className="group flex flex-col h-full border bg-base-100 border-gray-200 shadow-sm rounded-xl">
      <div className="p-4 md:p-6">
        <span className="block mb-4 opacity-80 text-xs font-semibold uppercase">
          Tools & technologies
        </span>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="cursor-default btn btn-sm">
            Git & Github
          </span> 
          <span className="cursor-default btn btn-sm">
            Docker
          </span>
          <span className="cursor-default btn btn-sm">
            Vercel
          </span>

          {/* Add more technologies as needed */}
        </div>
      </div>
    </div>

  </div>
  {/* End Grid */}
</div>



<div className="bg-base-200 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <h1 className="block text-3xl py-4 font-bold sm:text-4xl md:text-4xl lg:text-4xl">Journey of Rohit Maurya</h1>
          <motion.div className="grid sm:grid-cols-1 gap-6" initial="initial" animate="animate" variants={fadeInUp}>
            {/* Timeline */}
            <div className="flex flex-col space-y-6">
              <div className="timeline-item">
                <h3 className="text-lg font-semibold">April 2016 to Feb 2017</h3>
                <p>Co-founded Tourepedia - Worked as a web developer</p>
              </div>
              <div className="timeline-item">
                <h3 className="text-lg font-semibold">Mar 2017 to June 2017</h3>
                <p>Worked at Mazkara Internet as a backend developer</p>
              </div>
              <div className="timeline-item">
                <h3 className="text-lg font-semibold">Oct 2017 to May 2022</h3>
                <p>Worked as freelance IT educator and worked on various IT projects as a freelancer</p>
              </div>
              <div className="timeline-item">
                <h3 className="text-lg font-semibold">May 2022 - Present</h3>
                <p>Co-founded Coding Chaska. Main focus on teaching technology</p>
              </div>
              <div className="timeline-item">
                <h3 className="text-lg font-semibold">July 2024 - Present</h3>
                <p>Co-founded Growtech Lab. Focus on IT projects</p>
              </div>
            </div>
          </motion.div>
        </div>




  <div className="bg-base-200 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <h1 className="block text-3xl py-4 font-bold sm:text-4xl md:text-4xl lg:text-4xl ">My Works</h1>

    {/* Grid */}
    <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card */}
      <div  className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="h-52 flex flex-col justify-center items-center bg-primary rounded-t-xl">
          

            <GrTechnology size={48} />
            

        </div>
        <div className="p-4 md:p-6">
          <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
            Online Courses
          </span>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
            Coding Chaska
          </h3>
          <p className="mt-3 text-gray-500">
            Coding Chaska is a online learning platform where you can find interactive courses. 
          </p>
        </div>
        <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
          <a target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="https://www.codingchaska.com/"
          >
            Visit Site
          </a>
          <a 
            target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="https://github.com/rhtm123/cc-frontend-v2"
          >
            View API
          </a>
        </div>
      </div>
      {/* End Card */}
      {/* Card */}
      <div  className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="h-52 flex flex-col justify-center items-center bg-secondary rounded-t-xl">
          
            <TfiWrite size={48} />

        </div>
        <div className="p-4 md:p-6">
          <span className="block mb-1 text-xs font-semibold uppercase text-secondary dark:text-rose-500">
            Online Editor
          </span>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 ">
            Coding Chaska Lab
          </h3>
          <p className="mt-3 text-gray-500">
            CC Lab is lightweight online editor. You can solve coding problems too. 
          </p>
        </div>
        <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
          <a target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="https://www.codingchaskalab.com/"
          >
            Visit Site
          </a>
          <a 
            target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="https://github.com/rhtm123/cc-lab"
          >
            View API
          </a>
        </div>
      </div>
      {/* End Card */}
      {/* Card */}
      <div  className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="h-52 flex flex-col justify-center items-center bg-accent rounded-t-xl">

            <LuBuilding size={48} />

        </div>
        <div className="p-4 md:p-6">
          <span className="block mb-1 text-xs font-semibold uppercase text-accent">
            Manage Society
          </span>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
            SocietySathi
          </h3>
          <p className="mt-3 text-gray-500">
            SocietySathi is designed to solve all critical problems of a Society. 
          </p>
        </div>
        <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
          <a target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="https://www.societysathi.com/"
          >
            Visit Site
          </a>
          <a
            target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="https://github.com/rhtm123/ff-frontend"
          >
            View API
          </a>
        </div>
      </div>
      {/* End Card */}
    </div>
    {/* End Grid */}

    


  </div>






    </main>

    </>
  )
}
