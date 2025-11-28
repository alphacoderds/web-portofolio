import { useState, useEffect } from "react";
import { Menu, X } from "react-feather";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menu = ["Home", "About", "Skills", "Projects", "Experience", "Certificate", "Contact"];

  // Detect scroll
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
        ${scrolled ? "bg-white/70 dark:bg-gray-900/70 shadow-lg" : "bg-white/40 dark:bg-gray-900/40"}
      `}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">

        {/* LOGO */}  
        <h1 className="text-2xl font-extrabold tracking-wide text-blue-600 dark:text-blue-400">
          <span className="text-gray-900 dark:text-white">Manda</span>.Portfolio
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
          {menu.map((item) => (
            <li key={item} className="group">
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-800 dark:text-gray-200 font-semibold tracking-wide"
              >
                {item}

                {/* Hover Line */}
                <span className="
                  absolute left-0 -bottom-1 h-[2px] w-0 
                  bg-gradient-to-r from-blue-600 to-purple-600 
                  transition-all duration-300 group-hover:w-full
                "></span>
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`
          md:hidden transition-all duration-300 overflow-hidden
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-lg
        `}
      >
        <ul className="flex flex-col gap-4 px-6 py-4">
          {menu.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-gray-800 dark:text-gray-200 font-medium tracking-wide"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
