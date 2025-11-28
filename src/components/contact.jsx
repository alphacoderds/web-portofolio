import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
  <section
  id="contact"
  className="relative overflow-hidden py-10 px-6"
>
  {/* Gradient overlay ganda */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#8ec5fc]/90 via-[#e0c3fc]/20 to-white/80 pointer-events-none"></div>
  <div className="absolute inset-0 bg-gradient-to-t from-[#a1c4fd]/90 via-[#e0c3fc]/20 to-white/80 pointer-events-none"></div>

  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 z-10">
    {/* Foto Profil */}
    <div className="flex-shrink-0">
      <img
        src="/(1).jpg"
        alt="Rahmanda Putri Radisa"
        className="w-48 h-48 object-cover shadow-lg mx-0 border border-gray-300 rounded-md"
      />
    </div>

    {/* Info Kontak */}
    <div className="flex-1 space-y-6 text-left">
      <h3 className="text-3xl font-bold text-gray-800">Rahmanda Putri Radisa</h3>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-4">
        <a href="mailto:rahmandapr20@gmail.com" className="flex items-center gap-2 text-gray-800 hover:text-gray-900 transition">
          <FaEnvelope /> rahmandapr20@gmail.com
        </a>
        <a href="https://linkedin.com/in/rahmandaputriradisa" target="_blank" className="flex items-center gap-2 text-gray-800 hover:text-gray-900 transition">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://instagram.com/rhmndapr" target="_blank" className="flex items-center gap-2 text-gray-800 hover:text-gray-900 transition">
          <FaInstagram /> Instagram
        </a>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <footer className="mt-16 text-center text-gray-600 relative z-10">
    © 2025 Rahmanda Putri Radisa — All Rights Reserved
    <p>Last Update : November 2025</p>
  </footer>
</section>
  );
}