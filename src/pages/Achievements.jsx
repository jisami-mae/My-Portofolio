import React from "react";
import { motion } from "framer-motion";

import elementaryImg from "../assets/elementary.jpg";
import juniorHighImg from "../assets/junior-high.jpg";
import seniorHighImg from "../assets/senior-high.jpg";

const achievements = [
  {
    title: "Elementary School",
    school: "Katipunan, Abuyog, Leyte",
    image: elementaryImg,
    description:
      "My educational journey started in elementary school, where I learned the importance of discipline, responsibility, and hard work. I always did my best in my studies and worked hard to become a good student.",
    achievement: "Academic Achiever",
  },
  {
    title: "Junior High School",
    school: "Balocawehay, Abuyog, Leyte",
    image: juniorHighImg,
    description:
      "During my junior high school years, I continued to work hard and improve my academic performance. This stage helped me become more responsible, confident, and determined to reach my goals.",
    achievement: "Academic Achievement",
  },
  {
    title: "Senior High School",
    school: "Abuyog Community College",
    image: seniorHighImg,
    description:
      "My senior high school experience helped prepare me for college and future opportunities. I continued to value education, overcome challenges, and stay focused on achieving my dreams.",
    achievement: "Academic Achievement",
  },
];

const Achievements = () => {
  return (
    <section className="min-h-screen bg-orange-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-rose-600 uppercase tracking-widest text-sm mb-3"
             style={{ fontFamily: "satoshi-bold" }}>
            My Educational Journey
          </p>

          <h1 className="text-3xl md:text-5xl text-stone-800 mb-5"
              style={{ fontFamily: "satoshi-black" }}>
            My School Achievements
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-600 leading-relaxed"
             style={{ fontFamily: "satoshi-medium" }}>
            Every step of my education has taught me valuable lessons.
            These three stages represent my hard work, dedication,
            personal growth, and the experiences that shaped me into
            the person I am today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-orange-200 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <span className="inline-block bg-rose-100 text-rose-700 text-xs px-3 py-2 rounded-full mb-4">
                  {item.achievement}
                </span>

                <h2 className="text-2xl text-stone-800 mb-2"
                    style={{ fontFamily: "satoshi-bold" }}>
                  {item.title}
                </h2>

                <p className="text-rose-600 text-sm mb-4"
                   style={{ fontFamily: "satoshi-bold" }}>
                  {item.school}
                </p>

                <p className="text-zinc-600 text-sm leading-relaxed"
                   style={{ fontFamily: "satoshi-medium" }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl text-stone-800 mb-4"
              style={{ fontFamily: "satoshi-bold" }}>
            The Journey Continues...
          </h2>

          <p className="text-zinc-600 max-w-2xl mx-auto"
             style={{ fontFamily: "satoshi-medium" }}>
            I am now continuing my educational journey at ICCT Colleges
            as an Information Technology student. I will keep learning,
            growing, and working hard to achieve my dreams.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
