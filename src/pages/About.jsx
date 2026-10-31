
import React from "react";
import myImg from '../assets/pfp.jpg';
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      title: "Computer System Servicing",
      desc: "Learning computer hardware, system maintenance, and technical troubleshooting."
    },
    {
      title: "AR Effect Design",
      desc: "Creating and exploring augmented reality effects and creative digital designs."
    },
    {
      title: "Data & Organization",
      desc: "Organizing information, managing records, and developing accurate data entry skills."
    }
  ];

  return (
    <section className="bg-white px-8 md:px-16 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">

        {/* PROFILE PHOTO */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={myImg}
            alt="Jessamae Liba"
            className="w-72 h-72 md:w-80 md:h-80 object-cover border-8 border-stone-900 rounded-full shadow-lg"
          />
        </motion.div>

        {/* ABOUT ME DESCRIPTION */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-4xl mb-6 text-stone-800"
            style={{ fontFamily: 'satoshi-black' }}
          >
            A Little About Myself
          </h2>

          <p className="text-zinc-600 leading-relaxed mb-5" style={{ fontFamily: 'satoshi-medium' }}>
            Hello! I'm <span className="font-semibold text-stone-800">Jessamae Liba</span>,
            a 20-year-old Information Technology student from Marikina City,
            currently studying at ICCT Colleges. I am a hardworking and
            responsible person who enjoys learning new things, exploring
            my interests, and discovering opportunities to grow.
          </p>

          <p className="text-zinc-600 leading-relaxed mb-5" style={{ fontFamily: 'satoshi-medium' }}>
            I have a growing interest in technology, especially programming,
            web development, and computer systems. Through my school activities
            and projects, I continue to improve my technical skills, creativity,
            and problem-solving abilities. I believe that every experience
            is a chance to learn something valuable.
          </p>

          <p className="text-zinc-600 leading-relaxed" style={{ fontFamily: 'satoshi-medium' }}>
            Outside academics, I enjoy playing online games, visiting coffee
            shops and nature places, shopping online, listening to music, and
            appreciating beautiful sunflowers. One of my biggest dreams is to
            finish my studies, build a successful career, and give my family
            a better future.
          </p>
        </motion.div>
      </div>

      {/* PERSONAL HIGHLIGHTS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className="bg-orange-100 p-6 rounded-xl shadow-md text-center border border-orange-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-stone-800 text-lg font-bold"
              style={{ fontFamily: 'satoshi-bold' }}
            >
              {item.title}
            </h3>

            <p className="text-sm text-zinc-600 mt-3" style={{ fontFamily: 'satoshi-medium' }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
