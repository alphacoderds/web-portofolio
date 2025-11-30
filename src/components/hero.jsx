import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const roles = ["IT Enthusiast", "Web Developer", "Mobile Developer", "AI Enthusiast", "UI/UX Designer", "Cloud Developer"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 900);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center 
      bg-gradient-to-br from-[#8ec5fc] via-[#e0c3fc] to-[#a1c4fd] px-4"
    >
      {/* Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -25, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-10 left-10 w-64 h-64 bg-purple-400/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300/40 rounded-full blur-3xl"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[4px]"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto mt-16 md:mt-24">

        {/* NAME */}
        <motion.h1
          animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="text-6xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 via-purple-700 to-pink-500 bg-clip-text text-transparent"
        >
          Rahmanda Putri Radisa
        </motion.h1>

        {/* ROLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-gray-900 mt-2"
        >
          {text} <span className="ml-1 animate-pulse">▋</span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-700 mt-6"
        >
          Software Developer with experience in web, mobile, and cloud solutions.
          Passionate about UI/UX, design graphic, system design, and building modern digital products.
        </motion.p>

        {/* SOCIAL ICONS */}
        <motion.div className="flex gap-6 mt-8">
          {[
            { href: "https://github.com/alphacoderds", img: "/github.svg", alt: "GitHub" },
            { href: "https://linkedin.com/in/rahmandaputriradisa", img: "/linkedin.png", alt: "LinkedIn" },
            { href: "https://instagram.com/rhmndapr", img: "/instagram.png", alt: "Instagram" },
            { href: "mailto:rahmandapr20@gmail.com", img: "/gmail.png", alt: "Email" }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ delay: i * 0.3, duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.93 }}
              className="p-4 rounded-2xl shadow-lg bg-white/50 backdrop-blur-xl border border-white/40 flex items-center justify-center"
            >
              <img src={item.img} className="w-8 h-8" alt={item.alt} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
