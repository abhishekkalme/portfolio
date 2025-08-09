"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FiGithub, FiExternalLink, FiCode, FiLayers } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const projects = [
  {
    title: "Balaji Training Portal",
    description: "Government-certified training platform with course management, certificate generation, and payment gateway integration for vocational education programs.",
    image: "/projectImg/balaji.png",
    techStack: ["MERN Stack", "PDF Generation", "Razorpay API", "Admin Dashboard", "Role-Based Access"],
    githubLink: "https://github.com/Eklak-Alam/Training-Project-With-Certificate-Generate-Frontend-Code",
    liveLink: "https://balajitraining.in/"
  },
  {
    title: "Stack Connect",
    description: "A community-driven platform where developers  connect, collaborate, and grow together. Stack Connect enables peer-to-peer help, project collaboration, and open discussions on tech topics including web development, backend, AI, and more.",
    image: "/projectImg/stackconnect.jpg",
    techStack: ["Next.js", "Node.js", "Framer Motion", "Data Scrapper", "Tailwind CSS", "etc..."],
    githubLink: "https://github.com/Eklak-Alam/Stack-Connect",
    liveLink: "https://stackconnect.vercel.app/"
  },
  {
    title: "Shanaya Training Institute",
    description: "A comprehensive learning platform for professional courses. Features course management, student progress tracking, and certification system with secure authentication.",
    image: "/projectImg/shanayatraining.png",
    techStack: ["Next.js", "MongoDB", "JWT Auth", "TailwindCSS", "Node.js"],
    githubLink: "https://github.com/Eklak-Alam/LMS-Learning-management-system-",
    liveLink: "https://shanayatraining.com/"
  },
  {
    title: "Blix Media Solutions",
    description: "Corporate website for digital marketing agency featuring service showcases, client portfolios, and lead generation forms with analytics integration.",
    image: "/projectImg//blixmedia.png",
    techStack: ["React.js", "GSAP Animations", "Formik", "Google Analytics", "Mailchimp API"],
    githubLink: "https://github.com/Eklak-Alam/Blix-Media",
    liveLink: "https://project-psi-ivory-35.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "My personal showcase built with cutting-edge Next.js 14, featuring fluid animations with Framer Motion and sleek TailwindCSS styling. Demonstrates modern web development practices with optimized performance.",
    image: "/projectImg/eklakportfolio.png",
    techStack: ["Next.js 14", "Framer Motion", "TailwindCSS", "Three.js", "Aceternity UI"],
    githubLink: "https://github.com/Eklak-Alam/eklak-portfolio",
    liveLink: "https://eklak-portfolio.vercel.app/"
  },
  {
    title: "AI Background Remover",
    description: "Advanced image processing application that automatically removes backgrounds using AI algorithms. Processes high-resolution images in seconds with 98% accuracy.",
    image: "/projectImg/bgremoval.png",
    techStack: ["React.js", "Node.js", "TensorFlow.js", "Cloudinary API", "Canvas API"],
    githubLink: "https://github.com/Eklak-Alam/BGRemoval",
    liveLink: "https://bg-removal-eklak.vercel.app/"
  },
  {
    title: "Deaf Link Assistive Tech",
    description: "Innovative speech-to-text application for the hearing impaired. Features real-time transcription, conversation history, and customizable display options.",
    image: "/projectImg/deaflink.png",
    techStack: ["React.js", "Web Speech API", "Firebase", "Redux", "Accessibility Tools"],
    githubLink: "https://github.com/Eklak-Alam/DeafLink",
    liveLink: "https://www.deaflink.co/"
  }
];

export function Projects() {
  const { darkMode } = useTheme();

  // Color schemes for both modes
  const darkColors = {
    background: "#0f172a",
    textPrimary: "#ffffff",
    textSecondary: "#e2e8f0",
    cardBg: "#1e293b",
    cardBorder: "rgba(255, 255, 255, 0.1)",
    blobColor1: "rgba(124, 58, 237, 0.1)",
    blobColor2: "rgba(37, 99, 235, 0.1)",
    blobColor3: "rgba(16, 185, 129, 0.1)"
  };

  const lightColors = {
    background: "#ffffff",
    textPrimary: "#0f172a",
    textSecondary: "#334155",
    cardBg: "#f8fafc",
    cardBorder: "rgba(0, 0, 0, 0)",
    blobColor1: "rgba(219, 234, 254, 0.5)",
    blobColor2: "rgba(220, 252, 231, 0.5)",
    blobColor3: "rgba(224, 231, 255, 0.5)"
  };

  const colors = darkMode ? darkColors : lightColors;

  return (
    <section 
      id="projects" 
      className="relative py-20 px-4 sm:px-6 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full filter blur-3xl animate-blob"
          style={{ backgroundColor: colors.blobColor1 }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full filter blur-3xl animate-blob animation-delay-2000"
          style={{ backgroundColor: colors.blobColor2 }}
        ></div>
        <div 
          className="absolute bottom-0 left-1/2 w-96 h-96 rounded-full filter blur-3xl animate-blob animation-delay-4000"
          style={{ backgroundColor: colors.blobColor3 }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <FiCode className="text-3xl text-blue-500 mr-3" />
            <h2 
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ color: colors.textPrimary }}
            >
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Projects</span>
            </h2>
            <FiLayers className="text-3xl text-emerald-500 ml-3" />
          </div>
          
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.textSecondary }}
          >
            Each project represents <span className="font-semibold text-blue-400">real-world solutions</span> crafted with modern technologies and <span className="font-semibold text-emerald-400">attention to detail</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardContainer className="inter-var h-full">
                <CardBody 
                  className={`relative group/card w-full h-full rounded-xl p-6 ${darkMode ? "" : "border"}`}
                  style={{
                    backgroundColor: colors.cardBg,
                    borderColor: colors.cardBorder
                  }}
                >
                  <CardItem translateZ="100" className="w-full">
                    <img
                      src={project.image}
                      height="1000"
                      width="1000"
                      className="h-48 w-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                      alt={project.title}
                    />
                  </CardItem>

                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold mt-4 mb-2 line-clamp-1"
                    style={{ color: colors.textPrimary }}
                  >
                    {project.title}
                  </CardItem>
                  
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm line-clamp-2 mb-4"
                    style={{ color: colors.textSecondary }}
                  >
                    {project.description}
                  </CardItem>

                  <CardItem translateZ="40" className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-1 text-xs font-medium rounded-full"
                          style={{
                            backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
                            color: darkMode ? "#93c5fd" : "#3b82f6"
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardItem>

                  <div className="flex justify-between items-center mt-auto">
                    {project.githubLink && (
                      <CardItem
                        translateZ={30}
                        as="a"
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
                        style={{
                          backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
                          color: colors.textPrimary
                        }}
                      >
                        <FiGithub className="text-lg" />
                        <span>Code</span>
                      </CardItem>
                    )}
                    {project.liveLink && (
                      <CardItem
                        translateZ={30}
                        as="a"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
                        style={{
                          background: "linear-gradient(to right, #2563eb, #10b981)",
                          color: "white"
                        }}
                      >
                        <FiExternalLink className="text-lg" />
                        <span>Live Demo</span>
                      </CardItem>
                    )}
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p style={{ color: colors.textSecondary }}>
            Interested in my work? <span className="text-blue-400">Let's build something amazing</span> together
          </p>
        </motion.div>
      </div>
    </section>
  );
}