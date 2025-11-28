import { motion } from "framer-motion";

// ===============================
// SKILL DATA
// ===============================
const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "CSS" },
      { name: "HTML" },
      { name: "JavaScript" },
      { name: "ReactJS" },
      { name: "TailwindCSS" },
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Firebase" },
      { name: "Flask" },
      { name: "Laravel" },
      { name: "MySQL" },
      { name: "NodeJS" },
      { name: "PostgreSQL" },
    
    ]
  },
  {
    category: "Mobile",
    skills: [
      { name: "Dart" },
      { name: "Flutter" },
      { name: "Kotlin" },
    ]
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Keras" },
      { name: "Matplotlib" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Python" },
      { name: "Scikitlearn" },
      { name: "Seaborn" },
      { name: "TensorFlow" },
    ]
  },
  {
    category: "Cloud Computing",
    skills: [
      { name: "AlibabaCloud" },
      { name: "GCP" },
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git" },
      { name: "Figma" },
      { name: "Postman" },
      { name: "VSCode" },
    ]
  }
];

// ===============================
// ICON MAP (SEMUA FILE KAMU SENDIRI)
// ===============================
const iconMap = {
  ReactJS: "react.svg",
  HTML: "html.svg",
  CSS: "css.svg",
  TailwindCSS: "tailwind.svg",
  JavaScript: "javascript.svg",

  NodeJS: "node.svg",
  Firebase: "firebase.svg",
  Laravel: "laravel.svg",
  MySQL: "mysql.svg",
  PostgreSQL: "postgresql.svg",

  Flutter: "flutter.svg",
  Dart: "dart.svg",
  Kotlin: "kotlin.png",

  Python: "python.svg",
  TensorFlow: "tensorflow.svg",
  Keras: "keras.svg",
  Scikitlearn: "scikitlearn.svg",
  Pandas: "pandas.svg",
  NumPy: "numpy.svg",
  Matplotlib: "matplotlib.svg",
  Seaborn: "seaborn.svg",

  GCP: "gcp.svg",
  AlibabaCloud: "alibabacloud.svg",

  Git: "git.svg",
  Figma: "figma.svg",
  VSCode: "vscode.png",
  Docker: "docker.svg",
  Flask: "flask.svg",
  Postman: "postman.svg",
};

// ===============================
// COMPONENT
// ===============================
export default function Skill() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden min-h-screen py-24 px-6
                 bg-gradient-to-b from-[#8ec5fc] via-[#e0c3fc]/50 to-white"
    >

      {/* Floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -25, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-10 left-10 w-64 h-64 bg-purple-400/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300/40 rounded-full blur-3xl"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[4px]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-16 max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-gray-800 mb-4 flex items-center gap-2"
        >
          🎯 Skills
        </motion.h2>

        {skillCategories.map((category) => (
          <div key={category.category} className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              {category.category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white/40 dark:bg-gray-800/40 border border-white/30 
                             shadow-sm rounded-xl p-3 flex flex-col items-center justify-center 
                             text-center hover:-translate-y-2 hover:shadow-lg transition 
                             backdrop-blur-md w-20 h-20"
                >
                  <img
                    src={iconMap[skill.name]}
                    alt={skill.name}
                    className="w-11 h-11 mb-1 select-none"
                    draggable="false"
                  />
                  <span className="text-xs font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
