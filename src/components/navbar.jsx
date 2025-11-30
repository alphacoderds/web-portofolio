import { useState, useEffect } from "react";
import { Menu, X } from "react-feather";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menu = ["Home", "About", "Skills", "Projects", "Experience", "Certificate", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        backdrop-blur-md
        ${scrolled ? "bg-white/80 shadow-lg" : "bg-white/50"}
      `}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">

        {/* LOGO */}
        <h1 className="text-2xl font-extrabold tracking-wide text-blue-600">
          <span className="text-gray-900">Manda</span>.Portfolio
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
          {menu.map((item) => (
            <li key={item} className="group">
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-900 font-semibold tracking-wide"
              >
                {item}

                <span
                  className="
                    absolute left-0 -bottom-1 h-[2px] w-0 
                    bg-gradient-to-r from-blue-600 to-purple-600 
                    transition-all duration-300 group-hover:w-full
                  "
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
    {/* MOBILE MENU DROPDOWN (ANIMATED) */}
<AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="
        md:hidden bg-white/95 backdrop-blur-xl shadow-xl
        rounded-b-xl px-6 py-4
      "
    >
      <ul className="flex flex-col gap-4">
        {menu.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="
                block text-gray-900 font-semibold tracking-wide
                hover:text-blue-600 transition-all duration-200
                text-lg
              "
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  )}
</AnimatePresence>


    </nav>
  );
}
