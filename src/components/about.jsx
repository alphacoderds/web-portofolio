import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white dark:bg-gray-900 flex justify-center md:pl-12 pl-3"
    >
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-14 items-center text-justify leading-relaxed">
        
        {/* TEXT SECTION */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-gray-800 dark:text-white mb-6"
          >
            About <span className="text-blue-600">Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg"
          >
            An Information Technology graduate specializing in software development and cloud computing. Experienced in building web and mobile applications, managing backend services, and utilizing modern development tools. Skilled in API integration, technical documentation, and collaborative development workflows. Familiar with cloud platforms—especially Google Cloud Platform—for deploying serverless architectures, managing compute services, and optimizing application performance. Committed to continuous learning and delivering clean, scalable, and reliable technology solutions.
          </motion.p>

          {/* BUTTON - VIEW CV */}
          <motion.a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block mt-7 px-6 py-3 rounded-xl text-white font-semibold 
                       bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600
                       shadow-md hover:shadow-lg transition-all"
          >
            View CV
          </motion.a>

          {/* HIGHLIGHT CARDS */}
          <div className="mt-10 flex gap-8 flex-wrap">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="p-6 w-56 bg-blue-50 dark:bg-blue-900/20 rounded-xl shadow text-center border border-blue-200/40 dark:border-blue-700/40"
            >
              <h3 className="font-semibold text-xl text-blue-600 dark:text-blue-400">
                10+ Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                IT, Cloud & Application Dev
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="p-6 w-56 bg-blue-50 dark:bg-blue-900/20 rounded-xl shadow text-center border border-blue-200/40 dark:border-blue-700/40"
            >
              <h3 className="font-semibold text-xl text-blue-600 dark:text-blue-400">
                2+ Years
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                IT Developer & Designer
              </p>
            </motion.div>
          </div>
        </div>

        {/* LOTTIE ANIMATION SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center"
        >
          <DotLottieReact
            src="/codingslide.json"
            loop
            autoplay
            className="w-[350px] h-[350px] md:w-[420px] md:h-[420px]"
          />
        </motion.div>

      </div>
    </section>
  );
}
