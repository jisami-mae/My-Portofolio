
import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Send } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md"
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa"

const navMenu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/achievements", label: "Achievements" },
  { href: "/projects", label: "Projects" },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Contact form states
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [formStatus, setFormStatus] = useState("")

  const location = useLocation()
  const currentPath = location.pathname

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () =>
      window.removeEventListener("scroll", handleScroll)
  }, [])

  // Contact form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${name}`
    )

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )

    const mailtoLink =
      `mailto:jessamaeliba05@gmail.com?subject=${subject}&body=${body}`

    setFormStatus(
      "Your email app should open with your message ready to send."
    )

    window.location.href = mailtoLink
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b-2 border-stone-800 ${
        scrolled
          ? "bg-gradient-to-r from-rose-200 to-red-200 shadow-lg"
          : "bg-red-200"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-2xl text-stone-800 hover:text-white transition-colors duration-300"
            style={{ fontFamily: "satoshi-black" }}
          >
            &lt;Nen/&gt;
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex justify-end px-12 flex-1 space-x-9 text-stone-800 text-base"
          style={{ fontFamily: "satoshi-medium" }}
        >
          {navMenu.map((link) => (
            <Link
              to={link.href}
              key={link.href}
              className={`relative group transition-colors duration-300 ${
                currentPath === link.href
                  ? "text-white"
                  : "hover:text-white"
              }`}
            >
              {link.label}

              <span
                className={`absolute left-0 bottom-[-4px] h-[2px] bg-stone-800 transition-all duration-300 ${
                  currentPath === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Button
            onClick={() => setSheetOpen(true)}
            className="bg-red-300 hover:bg-red-100 text-stone-800 transition-all duration-300"
          >
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-stone-800 hover:scale-110 transition-transform duration-200"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-rose-200 to-red-200 border-t border-stone-800 px-6 py-4 space-y-4">
          {navMenu.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block rounded p-2 transition ${
                currentPath === link.href
                  ? "bg-stone-800 text-white"
                  : "text-stone-800 hover:bg-stone-800 hover:text-white"
              }`}
              style={{ fontFamily: "satoshi-medium" }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Button
            onClick={() => {
              setSheetOpen(true)
              setIsOpen(false)
            }}
            className="w-full bg-red-300 hover:bg-red-100 text-stone-800"
          >
            Contact Me
          </Button>
        </div>
      )}

      {/* Contact Sheet */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent
          side="right"
          className="bg-red-50 overflow-y-auto w-full sm:max-w-md"
        >
          <SheetHeader>
            <SheetTitle
              className="text-2xl px-4 mt-8 text-stone-800"
              style={{ fontFamily: "satoshi-bold" }}
            >
              Get in Touch 💗
            </SheetTitle>
          </SheetHeader>

          <div
            className="px-6 space-y-5 pb-8"
            style={{ fontFamily: "satoshi-medium" }}
          >
            <p className="text-sm text-stone-600">
              Have a question or opportunity? Send me a message!
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <a
                href="mailto:jessamaeliba05@gmail.com"
                className="flex items-center gap-3 hover:text-rose-500 transition"
              >
                <MdEmail className="text-rose-500" size={20} />
                <span className="text-sm text-zinc-700">
                  jessamaeliba05@gmail.com
                </span>
              </a>

              <a
                href="tel:+639457755702"
                className="flex items-center gap-3 hover:text-rose-500 transition"
              >
                <MdPhone className="text-rose-500" size={20} />
                <span className="text-sm text-zinc-700">
                  +63 9457755702
                </span>
              </a>

              <div className="flex items-center gap-3">
                <MdLocationOn className="text-rose-500" size={20} />
                <span className="text-sm text-zinc-700">
                  Marikina, Philippines
                </span>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div className="border-t border-rose-200 pt-5">
              <h3
                className="text-lg text-stone-800 mb-3"
                style={{ fontFamily: "satoshi-bold" }}
              >
                Send Me a Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-3"
              >
                {/* Name */}
                <div>
                  <label className="block text-sm text-stone-700 mb-1">
                    Your Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-lg border border-rose-200 bg-white px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-stone-700 mb-1">
                    Your Email
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-lg border border-rose-200 bg-white px-3 py-2 text-sm outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-stone-700 mb-1">
                    Your Message
                  </label>

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    rows={4}
                    required
                    className="w-full rounded-lg border border-rose-200 bg-white px-3 py-2 text-sm outline-none resize-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
                  />
                </div>

                {/* Send Message Button */}
                <Button
                  type="submit"
                  className="w-full bg-rose-400 hover:bg-rose-500 text-white transition-all"
                >
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>

                {formStatus && (
                  <p className="text-xs text-green-700 bg-green-50 p-3 rounded-lg">
                    {formStatus}
                  </p>
                )}
              </form>
            </div>

            {/* Social Links */}
            <div className="border-t border-rose-200 pt-5">
              <h4
                className="text-stone-800 mb-3"
                style={{ fontFamily: "satoshi-bold" }}
              >
                Connect With Me
              </h4>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.facebook.com/jessa.badilla.5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-3 rounded-full bg-white shadow hover:bg-rose-100 transition-colors"
                >
                  <FaFacebookF className="text-rose-500" size={20} />
                </a>

                <a
                  href="https://github.com/jisami-mae/Jesamae.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-full bg-white shadow hover:bg-rose-100 transition-colors"
                >
                  <FaGithub className="text-rose-500" size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/jessamae-liba-90ba0431b"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-full bg-white shadow hover:bg-rose-100 transition-colors"
                >
                  <FaLinkedinIn className="text-rose-500" size={20} />
                </a>

                <a
                  href="https://www.instagram.com/_vzyxessang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-3 rounded-full bg-white shadow hover:bg-rose-100 transition-colors"
                >
                  <FaInstagram className="text-rose-500" size={20} />
                </a>

                <a
                  href="https://www.tiktok.com/@kars_mae?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="p-3 rounded-full bg-white shadow hover:bg-rose-100 transition-colors"
                >
                  <FaTiktok className="text-rose-500" size={20} />
                </a>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

export default Header
