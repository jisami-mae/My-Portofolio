
import React from 'react'
import profileImg from '../assets/pfp.jpg'

import { TypeAnimation } from 'react-type-animation'
import { FaLaptopCode, FaTools, FaDatabase } from 'react-icons/fa'
import { motion } from 'framer-motion'

const LandingPage = () => {
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

      </section>
    </>
  )
}

export default LandingPage
