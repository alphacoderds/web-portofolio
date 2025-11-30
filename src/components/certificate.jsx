import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Certificate() {
  const certificates = [
  // --- 📌 DESAIN / KREATIF ---
  {
    title: "Junior Graphic Designer",
    org: "Badan Nasional Sertifikasi Profesi (BNSP)",
    img: "sertif/design_graphic.png",
  },

  // --- 📌 PEMROGRAMAN DASAR ---
  {
    title: "Dasar Pemrograman",
    org: "Dicoding Indonesia",
    img: "sertif/dicoding_pengembangsoftware.png",
  },
  {
    title: "Pemrograman Python",
    org: "Dicoding Indonesia",
    img: "sertif/dicodingpython.png",
  },
  {
    title: "Pemrograman JavaScript",
    org: "Dicoding Indonesia",
    img: "sertif/dicoding_javascript.png",
  },
  {
    title: "Pemrograman Web",
    org: "Dicoding Indonesia",
    img: "sertif/dicoding_web.png",
  },
  {
    title: "Dasar Git dengan Github",
    org: "Dicoding Indonesia",
    img: "sertif/dicoding_git.png",
  },

  // --- 📌 AI & MACHINE LEARNING ---
  {
    title: "Dasar Artificial Intelligence",
    org: "Dicoding Indonesia",
    img: "sertif/dicoding_ai.png",
  },
  {
    title: "Artificial Intelligence",
    org: "Digitalent X HUAWEI",
    img: "sertif/fga_AI.png",
  },
  {
    title: "Visualisasi Data",
    org: "Dicoding Indonesia",
    img: "sertif/dicoding_visualisasi.png",
  },
  {
    title: "Generative AI",
    org: "Dicoding Indonesia",
    img: "sertif/dicoding_generatifai.png",
  },
  {
    title: "Machine Learning",
    org: "Dicoding Indonesia",
    img: "sertif/dicoding_machinelearning.png",
  },
  {
    title: "Penerapan Machine Learning dengan Cloud Computing",
    org: "Dicoding Indonesia",
    img: "sertif/dicoding_machinelearning+cloud.png",
  },

  // --- 📌 CLOUD COMPUTING ---
  {
    title: "Cloud Computing",
    org: "Bangkit Academy 2024",
    img: "sertif/bangkit.png"
  },
  {
    title: "Google Cloud Engineer",
    org: "Dicoding Indonesia",
    img: "sertif/dicoding_cloud.png",
  },
  {
    title: "Cloud Computing",
    org: "Alibaba Cloud Certified Associate",
    img: "sertif/alibaba_aca.png",
  },
  {
    title: "AWS Cloud Foundations",
    org: "Universitas Internasional Batam",
    img: "sertif/aws_uib.png",
  },

  // --- 📌 CYBERSECURITY ---
  {
    title: "Foundations of Cybersecurity",
    org: "Coursera",
    img: "sertif/coursera_cyber.png",
  },
  {
    title: "Tools of the Trade: Linux and SQL",
    org: "Coursera",
    img: "sertif/coursera_linuxsql.png",
  },
  {
    title: "Introduction to Cybersecurity",
    org: "Cisco Networking Academy",
    img: "sertif/cisco_cyber.png",
  },

  // --- 📌 SOFTWARE ENGINEERING & KHUSUS ---
  {
    title: "Code Generation Optimization",
    org: "IBM SkillsBuild",
    img: "sertif/ibm_code.png",
  },
  {
    title: "Java Fundamental & Foundations",
    org: "Digitalent",
    img: "sertif/tsa_java.png",
  }
];

 const [visible, setVisible] = useState(6); // tampil awal 6
  const [modal, setModal] = useState(null);

  return (
    <section id="certificate" className="py-24 px-6 bg-white text-gray-800">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-extrabold text-gray-800">
          My <span className="text-blue-600">Certificates</span>
        </h2>
        <p className="text-gray-600 text-xl mt-3 leading-8">
          List of professional certifications and programs I have completed.
        </p>
      </motion.div>

      {/* Certificate Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center">
        {certificates.slice(0, visible).map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300, delay: i * 0.05 }}
            className="bg-gray-100 border border-gray-200 p-4 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl"
            onClick={() => setModal(cert)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-40 object-cover mb-4 border border-gray-300 bg-white"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/25 transition">
                <span className="text-white font-semibold opacity-0 hover:opacity-100 transition">
                  Click to view
                </span>
              </div>
            </div>
            <h3 className="text-lg font-semibold">{cert.title}</h3>
            <p className="text-gray-500 text-sm">{cert.org}</p>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      {visible < certificates.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisible(certificates.length)}
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition shadow-lg text-white"
          >
            View More
          </button>
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-xl max-w-lg w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modal.img}
                alt={modal.title}
                className="w-full max-h-[70vh] object-contain object-top rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mt-4">{modal.title}</h3>
              <p className="text-gray-600">{modal.org}</p>

              <button
                onClick={() => setModal(null)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-800 text-2xl font-bold"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}