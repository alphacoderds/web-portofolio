import { motion } from "framer-motion";

export default function Experience() {
  const data = [
  {
    year: "Jan 2024 – Jun 2024",
    title: "Software Developer Intern — PT Rekaindo Global Jasa (INKA Group)",
    location: "Madiun, East Java, Indonesian",
    logo: "/rekaindo.png",
    cert: "/intern.png",
    desc: [
      "Designed, developed, and implemented the Rekachain App for both web and Android, improving the production tracking process to be more accurate and efficient.",
      "Integrated camera-based scanning features in Flutter to enhance scanning accuracy and streamline user workflow.",
      "Developed new features, fixed bugs, and optimized application performance for better stability and responsiveness.",
      "Supported server deployment and system management using Proxmox Virtual Environment, ensuring secure and stable application operations."
    ]
  },
  {
    year: "Sept 2024 – Dec 2024",
    title: "MSIB Kampus Merdeka Batch 7 – Bangkit Academy 2024 Graduate",
    location: "Cloud Computing Cohort",
    logo: "/bangkit.png",
    cert: "/sertif/bangkit.png",
    desc: [
      "Completed more than 900 hours of intensive learning on Google Cloud Platform, machine learning, and software engineering.",
      "Developed Cofflyze, an AI-powered capstone project for early detection of coffee leaf diseases to support farmers in early prevention.",
      "Collaborated in a cross-functional team (Mobile Development, Cloud Computing, and Machine Learning) to deliver a high-quality final product."
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
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-center mb-12"
>
  <h2 className="text-5xl sm:text-5xl font-extrabold text-gray-800">
    My <span className="text-blue-600">Experiences</span>
  </h2>

  <p className="text-gray-700 text-xl mt-3 leading-8">
    A journey of learning, building, and creating impactful technology.
  </p>
</motion.div>



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
          className="w-12 h-12 object-contain"
        />
      )}

      <div>
        <h3 className="text-2xl font-bold text-blue-600">{item.year}</h3>
        <p className="text-lg font-semibold text-gray-800">{item.title}</p>
        <p className="text-sm text-gray-500">{item.location}</p>
      </div>
    </div>

    {/* DESCRIPTION LIST */}
    <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
      {item.desc.map((d, i) => (
        <li key={i}>{d}</li>
      ))}
    </ul>

    {/* ACTION BUTTONS */}
    <div className="flex gap-4 mt-5">

      {/* Certificate Button (only if exists) */}
      {item.cert && (
        <a
          href={item.cert}
          target="_blank"
          className="px-4 py-2 bg-blue-600 text-white rounded-xl font-medium
                   hover:bg-blue-700 hover:-translate-y-1 transition"
        >
          View Certificate
        </a>
      )}
    </div>

  </div>
</motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}
