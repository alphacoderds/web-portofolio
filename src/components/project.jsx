import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Project({ projects }) {
  const [visible, setVisible] = useState(2);

  const iconMap = {
    ReactJS: "react.svg", HTML: "html.svg", CSS: "css.svg",
    TailwindCSS: "tailwind.svg", JavaScript: "javascript.svg",
    NodeJS: "node.svg", Firebase: "firebase.svg", Laravel: "laravel.svg",
    MySQL: "mysql.svg", PostgreSQL: "postgresql.svg",
    Flutter: "flutter.svg", Dart: "dart.svg", Kotlin: "kotlin.png",
    Python: "python.svg", TensorFlow: "tensorflow.svg", Keras: "keras.svg",
    Scikitlearn: "scikitlearn.svg", Pandas: "pandas.svg",
    NumPy: "numpy.svg", Matplotlib: "matplotlib.svg", Seaborn: "seaborn.svg",
    GCP: "gcp.svg", AWS: "aws.svg", AlibabaCloud: "alibabacloud.svg",
    Docker: "docker.svg", Figma: "figma.svg", Flask: "flask.svg",
    Git: "git.svg", Github: "github.svg", Jupyter: "jupyter.svg",
    Postman: "postman.svg", VSCode: "vscode.png",
  };

  return (
    <section id="projects" className="py-24 bg-white px-6">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-800">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <p className="text-gray-700 text-xl mt-3 leading-8">
          A collection of applications I’ve built using modern technologies
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.slice(0, visible).map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-blue-50 rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition cursor-pointer"
          >
            <img src={p.img} alt={p.name} className="w-full h-76 object-cover" />
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-semibold text-blue-600">{p.name}</h3>
              <p className="text-gray-600">{p.desc}</p>

              {/* Tech Stack */}
              <p className="text-sm font-medium text-gray-500 mt-2">TECH STACK:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {p.tech.map((t, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-1 bg-white shadow px-2 py-1 rounded-full transition-transform"
                  >
                    <img src={iconMap[t]} alt={t} className="w-5 h-5 object-contain" />
                    <span className="text-xs font-medium text-gray-700">{t}</span>
                  </motion.div>
                ))}
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex gap-4 mt-4 flex-wrap">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 
                               bg-gray-200 text-gray-800 rounded-lg shadow-sm 
                               hover:bg-gray-300 hover:shadow-md transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}

                <Link
                  to={`/projects/${p.id}`}
                  className="flex items-center gap-2 px-4 py-2 
                             bg-blue-600 text-white rounded-lg shadow 
                             hover:bg-blue-700 hover:shadow-md transition"
                >
                  <FaExternalLinkAlt /> Detail
                </Link>

                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 
                               bg-blue-400 text-white rounded-lg shadow 
                               hover:bg-blue-500 hover:shadow-md transition"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* VIEW MORE BUTTON */}
      {visible < projects.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisible(projects.length)}
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 
                       text-white transition shadow-lg"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}
