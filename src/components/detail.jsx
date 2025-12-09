import { useParams, useNavigate } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ProjectDetail({ projects }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

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
    Postman: "postman.svg", VSCode: "vscode.png", Vercel: "vercel.svg", Netlify: "netlify.svg", Streamlit: "Streamlit.svg",
    LangGraph: "langgraph.svg", GoogleAPI: "Google_AI_Studio_icon.svg", 
    Bootstrap: "bootstrap.svg", MaterialUI : "materialui.svg"
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="text-center py-24">
        <h2 className="text-3xl font-bold text-gray-700">Project not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  const features = project.features || [
  {
    title: "Automatic Soil Type Detection",
    desc: "Use your camera or gallery to scan soil images. The CNN model analyzes the image and provides accurate soil type classification."
  },
  {
    title: "Plant Recommendation System",
    desc: "Based on the detected soil type, the app suggests the most suitable plants to grow for optimal land usage."
  },
  {
    title: "Detection History",
    desc: "Automatically saves past detection results both online and offline. Data will sync to Firebase once internet connection is restored."
  },
  {
    title: "TensorFlow Lite–Powered AI",
    desc: "The CNN model is trained using soil datasets and optimized for mobile deployment using TensorFlow Lite."
  },
  {
    title: "User Profile Management",
    desc: "Users can manage personal information such as name, gender, location, and phone number within the app."
  },
  {
    title: "Offline Support & Online Sync",
    desc: "The app still works without internet access; all results are stored locally and synchronized once the device goes online."
  },
  {
    title: "Detection Statistics Dashboard",
    desc: "Displays useful insights such as soil classification distribution via pie charts and the 10 most recent detections."
  },
  {
    title: "Secure Firebase Authentication",
    desc: "Provides secure login and user authentication through Firebase Authentication."
  },
];


  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 flex items-center gap-2"
      >
        &larr; Back to Projects
      </button>

      {/* Main Project Card */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-6 space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Project Image */}
          <motion.img
  src={project.img}
  alt={project.name}
  className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-xl shadow-md"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
/>


          {/* Project Info */}
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold text-blue-600">{project.name}</h1>
            <p className="text-gray-700">{project.desc}</p>

            {/* Tech Stack */}
<div className="pt-2">
  <h2 className="text-lg font-semibold text-gray-800 mb-2">Tech Stack</h2>
  <div className="flex flex-wrap gap-3">
    {project.tech.map((t, i) => (
      <div
        key={i}
        className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-xl shadow-sm"
      >
        <img
          src={`/${iconMap[t]}`}
          alt={t}
          className="w-5 h-5 object-contain"
        />
        <span className="text-sm font-medium text-blue-800">{t}</span>
      </div>
    ))}
  </div>
</div>

            {/* Links */}
            <div className="flex gap-4 mt-4 flex-wrap">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
              >
                <FaGithub /> GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-500 transition"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="pt-6 border-t border-gray-200 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Features</h2>
          <div className="space-y-3">
            {features.map((f, i) => (
              <motion.div
  key={i}
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: i * 0.1 }}
  className="flex gap-4 items-start bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
>

                <FaCheckCircle className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
