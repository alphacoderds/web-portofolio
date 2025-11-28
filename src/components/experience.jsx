import { motion } from "framer-motion";

export default function Experience() {
  const data = [
    {
      year: "Jan 2024 - Jun 2024",
      title: "Software Developer Intern — PT Rekaindo Global Jasa (INKA Group)",
      location: "Madiun, Jawa Timur, Indonesia",
      logo: "/rekaindo.png",
      cert: "/intern.png",
      desc: [
        "Merancang, mengembangkan, dan mengimplementasikan Rekachain App berbasis web dan Android.",
        "Mengembangkan fitur baru, melakukan maintenance, serta optimalisasi fungsionalitas aplikasi.",
        "Integrasi kamera pada Flutter, pengolahan data, dan peningkatan performa aplikasi.",
        "Mendukung pengelolaan server menggunakan Proxmox Virtual Environment."
      ]
    },
    {
      year: "Sept 2024 - Des 2024",
      title: "MSIB Kampus Merdeka Batch 7 – Bangkit Academy 2024 Graduate",
      location: "Cloud Computing Cohort",
      logo: "/bangkit.png",
      cert: "/sertif/bangkit.jpg",
      desc: [
        "Mengikuti pembelajaran intensif mengenai Google Cloud Platform & software engineering.",
        "Mengembangkan Cofflyze, aplikasi capstone pendeteksi penyakit daun kopi berbasis AI."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden min-h-screen py-24 px-6
                 bg-gradient-to-b from-[#8ec5fc] via-[#e0c3fc]/40 to-white"
    >
      {/* Floating background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -left-20 top-32 w-72 h-72 bg-blue-300/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 25, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute right-10 bottom-20 w-80 h-80 bg-purple-300/40 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16">
          Experience
        </h2>

        <div className="relative border-l-4 border-blue-500/70 pl-8 space-y-14">

          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Dot */}
              <span className="absolute -left-5 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></span>

              <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/40
                              group-hover:shadow-xl transition duration-300">
                
                {/* LOGO + HEADER */}
                <div className="flex items-center gap-4 mb-4">
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt="logo"
                      className="w-12 h-12 object-contain"
                    />
                  )}

                  <div>
                    <h3 className="text-2xl font-bold text-blue-600">
                      {item.year}
                    </h3>
                    <p className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                  {item.desc.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>

                {/* CERTIFICATE BUTTON */}
                {item.cert && (
                  <a
                    href={item.cert}
                    target="_blank"
                    className="inline-block mt-4 text-blue-700 font-semibold underline hover:text-blue-900"
                  >
                    Lihat Sertifikat
                  </a>
                )}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
