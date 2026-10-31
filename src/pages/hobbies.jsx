
import React from "react";
import { motion } from "framer-motion";

import coffeeImg from "../assets/coffee.jpg";
import favflowerImg from "../assets/fav flower.jpg";
import natureImg from "../assets/nature pic.jpg";
import onlinegamesImg from "../assets/online games.jpg";
import pianoImg from "../assets/piano.jpg";
import pageantImg1 from "../assets/pageant1.jpg";
import pageantImg2 from "../assets/pageant2.jpg";

const Hobbies = () => {
  const hobbiesList = [
    {
      title: "Coffee Shop Lover",
      description:
        "I enjoy visiting coffee shops, trying different drinks, and spending peaceful moments while enjoying a good cup of coffee.",
      images: [coffeeImg],
      tags: ["Coffee", "Relaxation", "Cafe Visits"],
    },
    {
      title: "Sunflower Lover",
      description:
        "Sunflowers are my favorite flowers because their bright yellow color reminds me of happiness, positivity, and beautiful things in life.",
      images: [favflowerImg],
      tags: ["Sunflowers", "Nature", "Beauty"],
    },
    {
      title: "Nature Lover",
      description:
        "I love visiting beautiful nature places, enjoying fresh air, and appreciating peaceful surroundings that help me relax.",
      images: [natureImg],
      tags: ["Nature", "Travel", "Peace"],
    },
    {
      title: "Online Gaming",
      description:
        "Playing online games is one of my favorite ways to have fun, relax, challenge myself, and connect with friends.",
      images: [onlinegamesImg],
      tags: ["Gaming", "Entertainment", "Strategy"],
    },
    {
      title: "Music & Piano",
      description:
        "I enjoy music because it helps me relax, express my feelings, and appreciate creativity through beautiful melodies.",
      images: [pianoImg],
      tags: ["Music", "Creativity", "Relaxation"],
    },
    {
      title: "Pageant",
      description:
        "I enjoy joining pageants because they help me build confidence, express myself, and improve my communication skills. It also gives me the opportunity to showcase my personality and talent.",
      images: [pageantImg1, pageantImg2],
      tags: ["Pageant", "Confidence", "Self-Expression"],
    },
  ];

  return (
    <section className="py-20 px-6 bg-rose-50 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* PAGE INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p
            className="text-rose-600 uppercase tracking-widest text-sm mb-3"
            style={{ fontFamily: "satoshi-bold" }}
          >
            Things I Love
          </p>

          <h1
            className="text-3xl md:text-5xl text-stone-800 mb-5"
            style={{ fontFamily: "satoshi-black" }}
          >
            My Hobbies & Interests
          </h1>

          <p
            className="max-w-2xl mx-auto text-zinc-600 leading-relaxed"
            style={{ fontFamily: "satoshi-medium" }}
          >
            Aside from studying and learning about technology,
            I enjoy doing things that make me happy and help me
            relax. These are some of the little things that make
            my everyday life more meaningful.
          </p>
        </motion.div>

        {/* HOBBY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbiesList.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-rose-100"
            >
              {/* HOBBY IMAGES */}
              <div
                className={`grid ${
                  hobby.images.length > 1
                    ? "grid-cols-2"
                    : "grid-cols-1"
                } gap-1`}
              >
                {hobby.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt={`${hobby.title} ${imageIndex + 1}`}
                    className="w-full h-56 object-cover"
                  />
                ))}
              </div>

              <div className="p-6">
                <h2
                  className="text-xl text-stone-800 mb-3"
                  style={{ fontFamily: "satoshi-bold" }}
                >
                  {hobby.title}
                </h2>

                <p
                  className="text-zinc-600 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  {hobby.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {hobby.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-rose-100 text-rose-700 text-xs rounded-full"
                      style={{ fontFamily: "satoshi-bold" }}
                    >
                      {tag}
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
          <p
            className="text-stone-700 italic text-lg"
            style={{ fontFamily: "satoshi-medium" }}
          >
            "Enjoying the little things makes life more beautiful."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Hobbies;
