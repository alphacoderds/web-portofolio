import { motion } from "framer-motion";

// ===============================
// SKILL DATA
// ===============================
const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "CSS" }, { name: "HTML" }, { name: "JavaScript" },
      { name: "ReactJS" }, { name: "TailwindCSS" },
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Firebase" }, { name: "Flask" }, { name: "Laravel" },
      { name: "MySQL" }, { name: "NodeJS" }, { name: "PostgreSQL" },
      { name: "Streamlit" }
    ]
  },
  {
    category: "Mobile",
    skills: [
      { name: "Dart" }, { name: "Flutter" }, { name: "Kotlin" },
    ]
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Keras" }, { name: "Matplotlib" }, { name: "NumPy" },
      { name: "Pandas" }, { name: "Python" }, { name: "Scikitlearn" },
      { name: "Seaborn" }, { name: "TensorFlow" }, { name: "LangGraph"}
    ]
  },
  {
    category: "Cloud Computing",
    skills: [
      { name: "AlibabaCloud" }, { name: "GCP" }, { name: "AWS" }, { name: "GoogleAPI" }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git" }, { name: "Github" }, { name: "Figma" },
      { name: "Postman" }, { name: "VSCode" }, { name: "Jupyter" }, { name: "Docker" },
      { name: "GoogleColab"}
    ]
  }
];

// ===============================
// ICON MAP
// ===============================
const iconMap = {
  ReactJS: "react.svg", HTML: "html.svg", CSS: "css.svg",
  TailwindCSS: "tailwind.svg", JavaScript: "javascript.svg",

  NodeJS: "node.svg", Firebase: "firebase.svg", Laravel: "laravel.svg",
  MySQL: "mysql.svg", PostgreSQL: "postgresql.svg", Streamlit: "Streamlit.svg",

  Flutter: "flutter.svg", Dart: "dart.svg", Kotlin: "kotlin.png",

  Python: "python.svg", TensorFlow: "tensorflow.svg", Keras: "keras.svg",
  Scikitlearn: "scikitlearn.svg", Pandas: "pandas.svg",
  NumPy: "numpy.svg", Matplotlib: "matplotlib.svg", Seaborn: "seaborn.svg", LangGraph: "langgraph.svg",

  GCP: "gcp.svg", AWS: "aws.svg", AlibabaCloud: "alibabacloud.svg", GoogleAPI: "Google_AI_Studio_icon.svg",

  Docker: "docker.svg", Figma: "figma.svg", Flask: "flask.svg",
  Git: "git.svg", Github: "github.svg", Jupyter: "jupyter.svg",
  Postman: "postman.svg", VSCode: "vscode.png", GoogleColab: "gcolab.svg",
};

// CATEGORY COLORS
const categoryColors = [
  "from-blue-500 to-purple-500",
  "from-green-500 to-emerald-500",
  "from-pink-500 to-rose-500",
  "from-indigo-500 to-violet-500",
  "from-orange-500 to-yellow-500",
  "from-cyan-500 to-blue-500",
];

const categoryIcons = {
  "Frontend Development": "🎨",
  "Backend Development": "🛠️",
  "Mobile": "📱",
  "Machine Learning": "🤖",
  "Cloud Computing": "☁️",
  "Tools & Others": "⚙️",
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
      {/* Blobs */}
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

      <div className="absolute inset-0 bg-white/20 backdrop-blur-[4px]"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-16">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold text-gray-800 text-center"
        >
          Tech Stack <span className="text-blue-600">Skills</span>
          <p className="text-gray-700 text-xl mt-3 font-normal">
            Technologies I use to build applications
          </p>
        </motion.h2>

        {/* CATEGORY CARD GRID (2 per row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/60 border border-white/40 shadow-xl 
                         rounded-2xl p-6 backdrop-blur-md"
            >
              {/* Category Title */}
              <h3
  className={`text-3xl font-bold mb-3 bg-gradient-to-r 
    ${categoryColors[index]} text-transparent bg-clip-text`}
>
  {categoryIcons[category.category]} {category.category}
</h3>




              {/* Skill icons */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white/70 border border-white/40 rounded-xl 
                               shadow p-3 flex flex-col items-center justify-center
                               hover:-translate-y-2 hover:shadow-lg transition"
                  >
                    <img
                      src={iconMap[skill.name]}
                      alt={skill.name}
                      className="w-10 h-10 mb-1 select-none"
                      draggable="false"
                    />
                    <span className="text-xs font-medium text-gray-800">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
