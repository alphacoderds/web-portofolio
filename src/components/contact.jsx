import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      type: "Email",
      value: "rahmandapr20@gmail.com",
      icon: <FaEnvelope />,
      href: "mailto:rahmandapr20@gmail.com",
      color: "bg-red-100 hover:bg-red-200",
    },
    {
      type: "LinkedIn",
      value: "Rahmanda Putri Radisa",
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/rahmandaputriradisa",
      color: "bg-blue-100 hover:bg-blue-200",
    },
    {
      type: "Instagram",
      value: "@rhmndapr",
      icon: <FaInstagram />,
      href: "https://instagram.com/rhmndapr",
      color: "bg-pink-100 hover:bg-pink-200",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-blue-50 via-purple-50 to-white"
    >
      {/* Gradient overlay ganda */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8ec5fc]/90 via-[#e0c3fc]/20 to-white/80 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#a1c4fd]/90 via-[#e0c3fc]/20 to-white/80 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 z-10">
        {/* Foto Profil */}
        <motion.div
          className="flex-shrink-0 mt-10"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/(1).jpg"
            alt="Rahmanda Putri Radisa"
            className="w-48 h-48 object-cover shadow-lg border border-gray-300 rounded-md hover:scale-105 transition-transform"
          />
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex flex-col justify-center gap-6"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl">
            I’m always open to collaborating on projects or having discussions. Connect with me via any of the channels below.
          </p>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {contacts.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`${c.color} flex items-center gap-3 p-4 rounded-xl shadow-lg cursor-pointer transition`}
              >
                <span className="text-2xl text-gray-700">{c.icon}</span>
                <div className="flex flex-col">
                  <span className="text-gray-800 font-semibold">{c.type}</span>
                  <span className="text-gray-600 text-sm">{c.value}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="mt-16 text-center text-gray-600 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        © 2025 Rahmanda Putri Radisa — All Rights Reserved
        <p className="text-sm">Last Update: November 2025</p>
      </motion.footer>
    </section>
  );
}
