import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skill from "./components/skill";
import Project from "./components/project";
import ProjectDetail from "./components/detail";
import Experience from "./components/experience";
import Certificate from "./components/certificate";
import Contact from "./components/contact";

export default function App() {
  const projects = [
  {
    id: 1, // PlantFit
    name: "PlantFit – Soil Type Detection & Plant Recommendation App",
    desc: "PlantFit is an AI-powered mobile application designed to automatically detect soil types using the camera or gallery. The app uses a CNN model to analyze soil images and provides suitable plant recommendations based on the detected soil type. Ideal for farmers, students, gardeners, and anyone looking to optimize land productivity.",
    img: "/plantfit.png",
    tech: ["Flutter", "Dart", "Firebase", "GCP", "Python", "TensorFlow", "Keras"],
    github: "https://github.com/alphacoderds/plantfit",
    demo: "https://drive.google.com/file/d/1NnAkZ8lJcvDcKqiSOHAIPvhf1tTkVr9X/view?usp=sharing",
    features: [
      { title: "Automatic Soil Type Detection", desc: "Scan soil images using the camera or gallery. The CNN model analyzes the image and instantly classifies the soil type." },
      { title: "Plant Recommendations", desc: "Provides a list of suitable plants based on the detected soil type." },
      { title: "Detection History", desc: "Automatically stores detection records both online and offline, syncing to Firebase when internet is available." },
      { title: "TensorFlow Lite Integration", desc: "AI model trained with soil datasets and optimized for mobile deployment using TensorFlow Lite." },
      { title: "User Profile Management", desc: "Users can manage personal information such as name, gender, location, and phone number." },
      { title: "Offline Support & Online Sync", desc: "Detection still works offline; data will automatically sync when back online." },
      { title: "Detection Statistics Dashboard", desc: "Displays visual insights such as soil distribution using pie charts and the latest detection list." },
      { title: "Firebase Authentication", desc: "Secure login system powered by Firebase Authentication." },
    ]
  },

  {
    id: 2, // RekaChain
    name: "RekaChain – Mobile App (Internship Project)",
    desc: "A mobile application developed during an internship program, built using Flutter. The app serves as a tracking and scanning system for managing materials and product flow at PT Rekaindo Global Jasa.",
    img: "/rekaapp.png",
    tech: ["Flutter", "Dart", "MySQL"],
    github: "https://github.com/alphacoderds/ProjectScanner",
    features: [
      { title: "Material Scanning", desc: "QR Code scanning for material tracking." },
      { title: "Product Scanning", desc: "QR Code scanning for product validation." },
      { title: "Scan History", desc: "Displays historical scan records." },
      { title: "Document Download", desc: "Allows users to download related documents and files." },
      { title: "After Sales", desc: "Provides a module for after-sales service handling." },
      { title: "Completion Stage", desc: "Marks completion stages of material or production flow." },
    ]
  },

  {
    id: 3,
    name: "Cofflyze – Coffee Leaf Disease Analyzer",
    desc: "Cofflyze is a smart mobile app built to detect coffee leaf diseases using CNN-based image processing, helping farmers with early detection and faster prevention.",
    img: "/cofflyze.png",
    github: "https://github.com/alphacoderds/Cofflyze-Team-Capstone",
    demo: "https://drive.google.com/file/d/1tyKU3ofDSi8wvupyHXFDhWG1P0_6m5X7/view?usp=sharing",
    tech: ["Kotlin", "Python", "GCP", "Flask", "NodeJS"]
  },

  {
    id: 4,
    name: "RekaChain Admin Website",
    desc: "An internal admin platform designed to manage production data, monitor workflow progress, validate user scans, and oversee the entire RekaChain manufacturing process.",
    img: "/rekachain website.png",
    github: "https://github.com/alphacoderds/ProjectWebAdminRekaChain",
    tech: ["Flutter", "Dart", "MySQL"]
  },

  {
    id: 5,
    name: "DiesCraft Website",
    desc: "A modern and responsive landing page created for the DiesCraft organization to showcase their products, activities, and community presence.",
    img: "/Presentation Proposal Portofolio Modern Putih Krem (1).png",
    github: "https://github.com/ritaapr/Dies-Craft",
    tech: ["Laravel", "MySQL"]
  },

  {
  id: 6,
  name: "MBTI Chatbot Edukasi",
  desc: "A Streamlit-based educational MBTI chatbot that provides a personality quiz and an interactive AI assistant powered by Google Gemini and LangChain.",
  img: "/mbti.jpg",
  github: "https://github.com/alphacoderds/MBTI-Chatbot-Edukasi",
  demo: "https://mbti-chatbot-edukasi-wejeksbguywbnoburxcuwb.streamlit.app/",
  tech: [ "Streamlit", "Python", "GoogleAPI", "LangGraph", "Matplotlib" ]
}

];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skill />
              <Project projects={projects} />
              <Experience />
              <Certificate />
              <Contact />
            </>
          }
        />
        <Route path="/projects/:id" element={<ProjectDetail projects={projects} />} />
      </Routes>
    </Router>
  );
}
