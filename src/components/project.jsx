import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiFlutter, SiTensorflow, SiFirebase, SiDart } from "react-icons/si";

export default function Project() {
  const projects = [
    {
      id: 1,
      name: "PlantFit – Soil Detection App",
      desc: "Aplikasi pendeteksi jenis tanah dengan CNN + TFLite + Firebase.",
      img: "Mobile App Screen Mockup, Plantfit.png",
      github: "https://github.com/alphacoderds/PlantFit",
      detail: "/projects/plantfit",
      tech: ["SiFlutter", "SiDart", "SiTensorflow", "SiFirebase"]
    },
    {
      id: 2,
      name: "Rekachain Mobile App",
      desc: "Asisten daur ulang berbasis AI untuk mengenali jenis sampah & rekomendasi reuse.",
      img: "Mobile App Screen Mockup, Rekachain App.png",
      github: "https://github.com/alphacoderds/ProjectScanner",
      detail: "/projects/reloopai",
      tech: ["SiFlutter", "SiDart", "SiTensorflow"]
    },
    {
      id: 3,
      name: "ReLoopAI – AI Recycling Assistant",
      desc: "Asisten daur ulang berbasis AI untuk mengenali jenis sampah & rekomendasi reuse.",
      img: "Mobile App Screen Mockup, cofflyze.png",
      github: "https://github.com/alphacoderds/Cofflyze-Team-Capstone",
      detail: "/projects/reloopai",
      tech: ["SiFlutter", "SiDart", "SiTensorflow"]
    },
    {
      id: 4,
      name: "Rekachain Website",
      desc: "Asisten daur ulang berbasis AI untuk mengenali jenis sampah & rekomendasi reuse.",
      img: "rekachain website.png",
      github: "https://github.com/alphacoderds/ProjectWebAdminRekaChain",
      detail: "/projects/reloopai",
      tech: ["SiFlutter", "SiDart", "SiTensorflow"]
    },
    {
      id: 4,
      name: "DiesCraft Website",
      desc: "Asisten daur ulang berbasis AI untuk mengenali jenis sampah & rekomendasi reuse.",
      img: "Presentation Proposal Portofolio Modern Putih Krem (1).png",
      github: "https://github.com/ritaapr/Dies-Craft",
      detail: "/projects/reloopai",
      tech: ["SiFlutter", "SiDart", "SiTensorflow"]
    },
  ];
  
  const [visible, setVisible] = useState(2);

  const iconMap = {
    SiFlutter: SiFlutter,
    SiDart: SiDart,
    SiTensorflow: SiTensorflow,
    SiFirebase: SiFirebase
  };

  return (
    <section id="projects" className="py-24 bg-white px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {projects.slice(0, visible).map((p) => (
          <div
            key={p.id}
            className="bg-blue-50 rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition cursor-pointer"
          >
            <img src={p.img} className="w-full h-56 object-cover" />
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-semibold text-blue-600">{p.name}</h3>
              <p className="text-gray-600">{p.desc}</p>

              {/* Tech Icons */}
              <div className="flex gap-3 mt-2">
                {p.tech.map((t, i) => {
                  const Icon = iconMap[t];
                  return <Icon key={i} className="w-6 h-6 text-gray-700" />;
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-4">
                <a
                  href={p.github}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={p.detail}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <FaExternalLinkAlt /> Detail
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {visible < projects.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisible(projects.length)}
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition shadow-lg"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}
