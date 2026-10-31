
import React from "react";
import { motion } from "framer-motion";

// PROJECT IMAGES
import messageImg from "../assets/message-preview.jpg";
import registrationImg from "../assets/student-registration.jpg";
import gradeImg from "../assets/grade-summary.jpg";
import boxImg from "../assets/organized-box.jpg";

// PROJECT DETAILS
const projects = [
  {
    number: "01",
    title: "One-Page Live Message Preview",
    category: "Web Development",
    description:
      "A simple webpage that allows users to type a message and instantly see a live preview of their input. This project helped me understand how JavaScript handles user input and updates webpage content.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: messageImg,
  },
  {
    number: "02",
    title: "Student Registration Form",
    category: "Web Development",
    description:
      "A student registration form designed to collect student information. It includes form validation to check required fields and help ensure that the submitted information is correct.",
    technologies: ["HTML", "CSS", "PHP"],
    image: registrationImg,
  },
  {
    number: "03",
    title: "Grade Summary",
    category: "Programming",
    description:
      "A program that accepts student scores, calculates the average grade, and displays the appropriate remarks. This project helped me practice variables, arrays, loops, and calculations.",
    technologies: ["PHP", "HTML", "CSS"],
    image: gradeImg,
  },
  {
    number: "04",
    title: "Organized Box Project",
    category: "Creative School Project",
    description:
      "A creative project focused on organizing items in a neat and practical way. It allowed me to develop my creativity, planning, and problem-solving skills.",
    technologies: ["Creativity", "Design", "Organization"],
    image: boxImg,
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-rose-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="text-rose-600 uppercase tracking-widest text-sm mb-3"
            style={{ fontFamily: "satoshi-bold" }}
          >
            My Works
          </p>

          <h1
            className="text-3xl md:text-5xl text-stone-800 mb-5"
            style={{ fontFamily: "satoshi-black" }}
          >
            My Projects & Portfolio
          </h1>

          <p
            className="max-w-2xl mx-auto text-zinc-600 leading-relaxed"
            style={{ fontFamily: "satoshi-medium" }}
          >
            These are some of the projects I created during my
            studies. Each project helped me improve my technical
            skills, creativity, and understanding of technology.
          </p>
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
              <div className="h-56 overflow-hidden bg-orange-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* PROJECT INFORMATION */}
              <div className="p-7">
                <p className="text-rose-600 text-xs uppercase tracking-widest mb-2">
                  {project.category}
                </p>

                <h2
                  className="text-xl md:text-2xl text-stone-800 mb-4"
                  style={{ fontFamily: "satoshi-bold" }}
                >
                  {project.title}
                </h2>

                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-rose-100 text-rose-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CLOSING MESSAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-stone-700 italic text-lg">
            "Every project is an opportunity to learn, improve, and grow."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
