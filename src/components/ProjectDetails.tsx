
import { motion } from "framer-motion";
import { Target, Zap, User, TrendingUp } from "lucide-react";

const ProjectDetails = () => {
  const techStack = [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Backend" },
    { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", category: "Framework" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Language" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", category: "Styling" },
    { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", category: "Data Science" },
    { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", category: "Computing" },
    { name: "HuggingFace", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", category: "AI/ML" },
  ];

  const features = [
    "Analyze 100-200 YouTube comments in real-time",
    "Hybrid NLP: VADER/TextBlob + BERT models",
    "Interactive visualizations: Pie charts, bar charts, word clouds",
    "Video metadata extraction and sentiment summary",
    "CSV and PDF export functionality",
    "Responsive design with advanced animations"
  ];

  const projectSections = [
    {
      icon: Target,
      title: "Objective",
      content: "Build a full-stack AI-powered web application that analyzes YouTube comment sentiment using advanced NLP models and presents results through rich, interactive visualizations."
    },
    {
      icon: User,
      title: "My Role",
      content: "Full-stack development including UI/UX design, YouTube API integration, sentiment analysis pipeline, data visualization implementation, and complete deployment on modern web infrastructure."
    },
    {
      icon: TrendingUp,
      title: "Learning Outcome",
      content: "Successfully built a production-ready NLP application, mastered API integration, combined rule-based and deep learning approaches, and gained expertise in modern web development and deployment strategies."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Project Details
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto mb-8"></div>
        </motion.div>

        {/* Project Overview Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projectSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(74, 222, 128, 0.15)"
              }}
              className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-cyan-400 rounded-full mb-6"
              >
                <section.icon className="w-8 h-8 text-black" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
              <p className="text-gray-300 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <Zap className="w-8 h-8 text-primary mr-3" />
            <h3 className="text-3xl font-bold text-white">Key Features</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg border border-gray-600/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-300 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.2,
                  rotateY: 180,
                  boxShadow: "0 15px 30px rgba(74, 222, 128, 0.3)"
                }}
                className="group bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain filter group-hover:drop-shadow-lg group-hover:drop-shadow-primary/50 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/64x64/4ADE80/000000?text=" + tech.name.charAt(0);
                    }}
                  />
                </div>
                <h4 className="text-sm font-medium text-white group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </h4>
                <p className="text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">
                  {tech.category}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails;
