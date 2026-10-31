
import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../assets/pfp.jpg'
import messageImg from '../assets/message-preview.jpg'
import registrationImg from '../assets/student-registration.jpg'
import gradeImg from '../assets/grade-summary.jpg'
import boxImg from '../assets/organized-box.jpg'

import { TypeAnimation } from 'react-type-animation'
import { FaLaptopCode, FaTools, FaDatabase } from 'react-icons/fa'
import { motion } from 'framer-motion'

const LandingPage = () => {

  const featuredProjects = [
    {
      number: '01',
      title: 'One-Page Live Message Preview',
      category: 'Web Development',
      image: messageImg,
      description:
        'A webpage that allows users to type a message and instantly see a live preview using JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      number: '02',
      title: 'Student Registration Form',
      category: 'Web Development',
      image: registrationImg,
      description:
        'A registration form that collects student information and checks inputs through form validation.',
      technologies: ['HTML', 'CSS', 'PHP']
    },
    {
      number: '03',
      title: 'Grade Summary',
      category: 'Programming',
      image: gradeImg,
      description:
        'A program that calculates student scores, displays the average, and provides grade remarks.',
      technologies: ['PHP', 'HTML', 'CSS']
    },
    {
      number: '04',
      title: 'Organized Box Project',
      category: 'Creative School Project',
      image: boxImg,
      description:
        'A creative school project focused on organizing items in a neat and practical way.',
      technologies: ['Creativity', 'Design', 'Organization']
    }
  ]

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between bg-orange-50 px-6 md:px-16 py-16 gap-10">

        <motion.div
          className="md:w-1/2 text-center md:text-left md:ml-10 lg:ml-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-rose-600 font-semibold tracking-widest mb-3">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl text-stone-800 mb-4"
            style={{ fontFamily: 'satoshi-black' }}
          >
            Hi, I'm Jessamae Liba
          </h1>

          <h2
            className="text-xl sm:text-2xl md:text-3xl text-stone-800 mb-6"
            style={{ fontFamily: 'satoshi-medium' }}
          >
            I'm a{' '}
            <TypeAnimation
              sequence={[
                'BSIT Student',
                2000,
                'Technology Enthusiast',
                2000,
                'Computer System Servicing Learner',
                2000,
                'Future IT Professional',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-rose-600 font-bold"
            />
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed">
            I am a Bachelor of Science in Information Technology student at
            ICCT Colleges. I am passionate about learning new things,
            exploring technology, and improving my skills. I created this
            portfolio to share my personal background, abilities, hobbies,
            and educational achievements.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">

            <Link
              to="/about"
              className="bg-rose-600 text-white px-7 py-3 rounded-full hover:bg-rose-700 transition duration-300 shadow-md"
            >
              About Me
            </Link>

            <Link
              to="/achievements"
              className="border-2 border-stone-800 text-stone-800 px-7 py-3 rounded-full hover:bg-stone-800 hover:text-white transition duration-300"
            >
              My Achievements
            </Link>

          </div>
        </motion.div>

        {/* PROFILE PICTURE */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profileImg}
            alt="Jessamae Liba"
            className="w-64 sm:w-72 md:w-80 h-auto object-cover drop-shadow-[15px_15px_0px_black] rounded-lg"
          />
        </motion.div>

      </section>

      {/* ABOUT MY JOURNEY */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">

        <motion.div
          className="max-w-4xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-rose-600 font-semibold tracking-widest mb-2">
            GET TO KNOW ME
          </p>

          <h2
            className="text-3xl sm:text-4xl text-stone-800 mb-5"
            style={{ fontFamily: 'satoshi-bold' }}
          >
            About My Journey
          </h2>

          <p className="text-zinc-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            My journey as an IT student is about learning, exploring,
            and improving myself. Through school activities and hands-on
            experiences, I continue to develop my knowledge in programming,
            computer systems, and technology. I believe that every challenge
            is an opportunity to grow and learn something new.
          </p>
        </motion.div>

        {/* SKILLS HIGHLIGHTS */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              icon: <FaLaptopCode size={60} />,
              title: 'Web Development',
              desc: 'Learning to create responsive and user-friendly websites using HTML, CSS, JavaScript, and other web technologies.'
            },
            {
              icon: <FaTools size={60} />,
              title: 'Computer System Servicing',
              desc: 'Developing knowledge in computer hardware, software installation, system maintenance, and technical troubleshooting.'
            },
            {
              icon: <FaDatabase size={60} />,
              title: 'Programming and Database',
              desc: 'Practicing programming and learning how to organize, manage, and store information using database systems.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-orange-50 border-2 border-stone-900 p-7 rounded-xl shadow-md text-center hover:-translate-y-2 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-rose-600 mb-5 flex justify-center">
                {item.icon}
              </div>

              <h3
                className="text-lg text-stone-800"
                style={{ fontFamily: 'satoshi-bold' }}
              >
                {item.title}
              </h3>

              <p className="text-zinc-600 mt-3 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* PORTFOLIO NAVIGATION */}
        <div className="text-center mt-14">
          <p className="text-stone-700 mb-5">
            Explore my personal background, skills, hobbies, and school achievements.
          </p>

          <Link
            to="/about"
            className="inline-block bg-stone-800 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition duration-300"
          >
            Discover More About Me →
          </Link>
        </div>

      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className="bg-rose-50 py-20 px-6 md:px-12 lg:px-20">

        <motion.div
          className="max-w-4xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-rose-600 font-semibold tracking-widest mb-3">
            MY WORKS
          </p>

          <h2
            className="text-3xl sm:text-4xl text-stone-800 mb-5"
            style={{ fontFamily: 'satoshi-black' }}
          >
            Featured Projects
          </h2>

          <p className="text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Here are some of the projects I created during my studies.
            Each one represents my learning experiences, creativity,
            and continuous improvement as an IT student.
          </p>
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-rose-100"
            >

              {/* PROJECT IMAGE */}
              <div className="h-48 overflow-hidden bg-orange-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* PROJECT DETAILS */}
              <div className="p-5">

                <p className="text-rose-600 text-xs uppercase tracking-widest mb-2">
                  {project.category}
                </p>

                <h3
                  className="text-lg text-stone-800 mb-3"
                  style={{ fontFamily: 'satoshi-bold' }}
                >
                  {project.title}
                </h3>

                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-rose-100 text-rose-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* VIEW ALL PROJECTS BUTTON */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-block bg-rose-600 text-white px-9 py-3 rounded-full hover:bg-rose-700 transition duration-300 shadow-md"
          >
            View All Projects →
          </Link>
        </div>

      </section>
    </>
  )
}

export default LandingPage
