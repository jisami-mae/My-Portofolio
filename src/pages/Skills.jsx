
import React from "react";
import { motion } from "framer-motion";
import {
  FaComments,
  FaUsers,
  FaClock,
  FaLightbulb,
  FaSyncAlt,
  FaTasks,
  FaUserCheck,
  FaBookOpen,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const personalSkills = [
    {
      icon: <FaComments />,
      title: "Communication",
      description: "Able to express ideas clearly and listen to others."
    },
    {
      icon: <FaUsers />,
      title: "Teamwork",
      description: "Can work well with others and contribute to group activities."
    },
    {
      icon: <FaClock />,
      title: "Time Management",
      description: "Able to organize tasks and finish responsibilities on time."
    },
    {
      icon: <FaLightbulb />,
      title: "Problem-Solving",
      description: "Willing to find solutions and handle different challenges."
    },
    {
      icon: <FaSyncAlt />,
      title: "Adaptability",
      description: "Can adjust to new situations and learn new things."
    },
    {
      icon: <FaTasks />,
      title: "Multitasking",
      description: "Able to handle different tasks while staying organized."
    },
    {
      icon: <FaUserCheck />,
      title: "Responsibility",
      description: "Takes tasks seriously and completes assigned duties."
    },
    {
      icon: <FaBookOpen />,
      title: "Willingness to Learn",
      description: "Always open to learning new skills and improving myself."
    },
  ];

  return (
    <section className="min-h-screen bg-orange-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p
            className="text-rose-600 uppercase tracking-widest text-sm mb-3"
            style={{ fontFamily: "satoshi-bold" }}
          >
            What Makes Me Who I Am
          </p>

          <h2
            className="text-3xl md:text-5xl text-stone-800 mb-5"
            style={{ fontFamily: "satoshi-black" }}
          >
            My Personal Skills
          </h2>

          <p
            className="max-w-2xl mx-auto text-zinc-600 leading-relaxed"
            style={{ fontFamily: "satoshi-medium" }}
          >
            I believe that personal skills are important for both
            personal and professional growth. I continue to develop
            these abilities through my studies, daily experiences,
            and interactions with other people.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-orange-200 rounded-2xl p-7 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-rose-500 text-4xl mb-5 flex justify-center">
                {skill.icon}
              </div>

              <h3
                className="text-lg text-stone-800 mb-3"
                style={{ fontFamily: "satoshi-bold" }}
              >
                {skill.title}
              </h3>

              <p
                className="text-sm text-zinc-600 leading-relaxed"
                style={{ fontFamily: "satoshi-medium" }}
              >
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-stone-700 italic mt-14"
          style={{ fontFamily: "satoshi-medium" }}
        >
          "Every day is an opportunity to learn, grow, and become better."
        </motion.p>

      </div>
    </section>
  );
};

export default Skills;
