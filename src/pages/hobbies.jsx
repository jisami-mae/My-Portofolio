import React from "react";
import { motion } from "framer-motion";
import coffeeImg from "../assets/coffee.jpg";
import favflowerImg from "../assets/fav flower.jpg";
import natureImg from "../assets/nature pic.jpg";
import onlinegamesImg from "../assets/online games.jpg";
import pianoImg from "../assets/piano.jpg";

const Hobbies = () => {
  const hobbiesList = [
    {
      title: "Coffee",
      description:
        "I enjoy the rich aroma and taste of coffee, often exploring different brewing methods and flavors. It's a daily ritual that energizes me.",
      image: coffeeImg,
      tech: ["Brewing", "Espresso", "Relaxation"],
    },
    {
      title: "Favorite Flowers",
      description:
        "I have a deep appreciation for flowers, especially roses and lilies. Their beauty and fragrance bring joy and inspiration to my daily life.",
      image: favflowerImg,
      tech: ["Nature", "Gardening", "Aesthetics"],
    },
    {
      title: "Nature Lover",
      description: "Enjoying the fresh air, green scenery, and peaceful views.",
      image: natureImg,
      tech: ["Outdoors", "Photography", "Scenery"],
    },
    {
      title: "Online Games",
      description: "Playing online games to relax and connect with friends.",
      image: onlinegamesImg,
      tech: ["Gaming", "Strategy", "Teamwork"],
    },
    {
      title: "Piano",
      description: "Playing music and relaxing with the piano.",
      image: pianoImg,
      tech: ["Music", "Melody", "Creativity"],
    },
  ];

  return (
    <section className="py-16 px-4 bg-rose-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-stone-800">
          My Hobbies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbiesList.map((hobby, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col justify-between"
            >
              <div>
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">
                    {hobby.title}
                  </h3>
                  <p className="text-zinc-600 text-sm mb-4">
                    {hobby.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hobby.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-rose-100 text-rose-700 text-xs rounded-full font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;