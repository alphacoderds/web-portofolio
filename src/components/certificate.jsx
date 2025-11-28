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

  const [visible, setVisible] = useState(3); // tampil 3 dulu
  const [modal, setModal] = useState(null); // untuk modal

  return (
    <section id="certificate" className="py-24 px-6 bg-white text-gray-800">
  <h2 className="text-4xl font-bold text-center mb-12">
    🎓 Certificates
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center">
    {certificates.slice(0, visible).map((cert, i) => (
  <motion.div
    key={i}
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-gray-100 border border-gray-200 p-4 rounded-xl shadow-lg cursor-pointer"
    onClick={() => setModal(cert)}
  >
    <img
      src={cert.pdf ? "/icons/pdf.png" : cert.img}
      alt={cert.title}
      className="w-full h-40 object-cover rounded-lg mb-4 border border-gray-300 bg-white"
    />
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
        {/* jika PDF → iframe, jika tidak → img */}
        {modal.pdf ? (
          <iframe
            src={modal.pdf}
            className="w-full h-[600px] rounded-lg"
          />
        ) : (
          <img
            src={modal.img}
            alt={modal.title}
            className="w-full max-h-[70vh] object-contain object-top rounded-lg mb-4"
          />
        )}

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