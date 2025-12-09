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
    tech: ["Kotlin", "Python", "GCP", "Flask", "NodeJS"],
    features: [
    { title: "Disease Detection", desc: "Detects coffee leaf diseases using a CNN model for accurate image-based classification." },
    { title: "Real-time Scanning", desc: "Allows users to capture leaf images through the camera or select from the gallery." },
    { title: "Disease Information", desc: "Provides detailed explanations including symptoms, causes, risk factors, and impacts." },
    { title: "Treatment & Prevention", desc: "Offers actionable recommendations for treatment, handling, and preventive steps." },
    { title: "Detection History", desc: "Stores past detection records to help users track plant health over time." },
    { title: "Cloud-based Processing", desc: "Processes images through a Flask & GCP-powered API for more accurate and scalable AI inference." }
  ]
  },

  {
    id: 4,
    name: "RekaChain Admin Website",
    desc: "An internal admin platform designed to manage production data, monitor workflow progress, validate user scans, and oversee the entire RekaChain manufacturing process.",
    img: "/rekachain website.png",
    github: "https://github.com/alphacoderds/ProjectWebAdminRekaChain",
    tech: ["Flutter", "Dart", "MySQL"],
    features: [
  { title: "Dashboard Monitoring", desc: "Visualizes production data using charts to track progress in real time." },
  { title: "Production Data Input", desc: "Allows admins to input material, panel, lot code, and workflow information." },
  { title: "STTPR Reporting", desc: "Provides a reporting module for STTPR documents to support administrative processes." },
  { title: "Material Planning", desc: "Helps manage material requirements and production planning across projects." },
  { title: "Document Upload", desc: "Enables uploading of supporting documents such as technical sheets or project files." },
  { title: "After-Sales Module", desc: "Handles after-sales service records and ensures proper follow-up." },
  { title: "User & Admin Management", desc: "Manages admin accounts, field users, and access permissions." },
  { title: "Project Management", desc: "Used to create, update, and track multiple projects within the system." },
  { title: "Scan Validation", desc: "Validates QR scan results from the mobile app to ensure accurate production data." }
]
  },

  {
    id: 5,
    name: "DiesCraft Website",
    desc: "A modern and responsive landing page created for the DiesCraft organization to showcase their products, activities, and community presence.",
    img: "/Presentation Proposal Portofolio Modern Putih Krem (1).png",
    github: "https://github.com/ritaapr/Dies-Craft",
    tech: ["ReactJS", "CSS", "HTML", "JavaScript", "TailwindCSS", "Vercel"],
    features: [
  { title: "Landing Page Showcase", desc: "Displays the organization’s identity, mission, and community activities." },
  { title: "Product Gallery", desc: "Shows a collection of handmade crafts with images and descriptions." },
  { title: "Responsive Layout", desc: "Fully responsive design that works smoothly on desktop and mobile devices." },
  { title: "Navigation Menu", desc: "Simple and clean navigation for browsing sections easily." },
  { title: "Contact Information", desc: "Provides contact and social media links for visitors to connect with the team." },
  { 
    title: "Maps Location Integration", 
    desc: "Integrasi lokasi menggunakan Google Maps untuk menampilkan alamat workshop atau pusat kegiatan DiesCraft secara akurat." 
  }
]

  },

  {
  id: 6,
  name: "MBTI Chatbot Edukasi",
  desc: "A Streamlit-based educational MBTI chatbot that provides a personality quiz and an interactive AI assistant powered by Google Gemini and LangChain.",
  img: "/mbti.jpg",
  github: "https://github.com/alphacoderds/MBTI-Chatbot-Edukasi",
  demo: "https://mbti-chatbot-edukasi-wejeksbguywbnoburxcuwb.streamlit.app/",
  tech: [ "Streamlit", "Python", "GoogleAPI", "LangGraph", "Matplotlib" ],
  features: [
  { title: "MBTI Personality Quiz", desc: "Interactive quiz that identifies the user’s MBTI personality type." },
  { title: "AI Chat Assistant", desc: "Chatbot powered by Google Gemini and LangChain for personalized guidance." },
  { title: "Learning Resources", desc: "Provides explanations, insights, and educational content about MBTI types." },
  { title: "Web-Based Interface", desc: "Built with Streamlit for a clean, fast, and accessible user experience." }
]
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
