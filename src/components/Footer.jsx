
import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-10 px-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2
            className="text-2xl text-rose-400"
            style={{ fontFamily: 'satoshi-black' }}
          >
            Jessamae Liba
          </h2>

          <p className="text-sm text-gray-300 mt-3 leading-relaxed">
            BSIT Student | Computer System Servicing Learner |
            Future IT Professional
          </p>

          <p className="text-sm text-gray-400 mt-3">
            Learning today, improving for tomorrow.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3
            className="text-lg mb-4"
            style={{ fontFamily: 'satoshi-bold' }}
          >
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li><Link to="/" className="hover:text-rose-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-rose-400 transition">About</Link></li>
            <li><Link to="/skills" className="hover:text-rose-400 transition">Skills</Link></li>
            <li><Link to="/hobbies" className="hover:text-rose-400 transition">Hobbies</Link></li>
            <li><Link to="/achievements" className="hover:text-rose-400 transition">Achievements</Link></li>
            <li><Link to="/projects" className="hover:text-rose-400 transition">Projects</Link></li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3
            className="text-lg mb-4"
            style={{ fontFamily: 'satoshi-bold' }}
          >
            Connect With Me
          </h3>

          <p className="text-sm text-gray-300 mb-4">
            Feel free to visit my social media accounts or send me an email.
          </p>

          <div className="flex space-x-5 text-2xl">

            <a href="https://github.com/jisami-mae/Jesamae.git" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-rose-400 transition">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/jessamae-liba-90ba0431b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-rose-400 transition">
              <FaLinkedin />
            </a>

            <a href="https://www.facebook.com/jessa.badilla.5/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-rose-400 transition">
              <FaFacebook />
            </a>

            <a href="mailto:jessamaeliba05@gmail.com" aria-label="Email" className="hover:text-rose-400 transition">
              <FaEnvelope />
            </a>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Jessamae Liba. All rights reserved.

        <p className="mt-2 text-rose-300">
          Personal Portfolio | BS Information Technology
        </p>
      </div>

    </footer>
  )
}

export default Footer
