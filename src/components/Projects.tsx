import { motion } from "framer-motion";
import { Github, ExternalLink, Activity } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const Projects = () => {
  const projects = [
    {
      title: "Exploratory Data Analysis",
      description: "Comprehensive data analysis projects focusing on data cleaning, visualization, and uncovering hidden patterns in complex datasets to drive actionable business insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      tags: [
        { name: "Python", logo: "https://icon.horse/icon/python.org" },
        { name: "Pandas", logo: "https://icon.horse/icon/pandas.pydata.org" },
        { name: "Matplotlib", logo: "https://icon.horse/icon/matplotlib.org" },
        { name: "Seaborn", logo: "https://icon.horse/icon/seaborn.pydata.org" },
        { name: "Data Viz", logo: "https://icon.horse/icon/tableau.com" }
      ],
      github: "https://github.com/VenkataBalaji07",
      demo: "#",
    },
    {
      title: "Bengaluru House Price Prediction",
      description: "A machine learning model developed to accurately predict house prices in Bengaluru based on various property features, location data, and market trends.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
      tags: [
        { name: "Python", logo: "https://icon.horse/icon/python.org" },
        { name: "Scikit-Learn", logo: "https://icon.horse/icon/scikit-learn.org" },
        { name: "ML Models", logo: "https://icon.horse/icon/kaggle.com" },
        { name: "Pandas", logo: "https://icon.horse/icon/pandas.pydata.org" },
        { name: "NumPy", logo: "https://icon.horse/icon/numpy.org" }
      ],
      github: "https://github.com/VenkataBalaji07/Bengaluru_house_price_prediction",
      demo: "#",
    },
    {
      title: "E-commerce Purchase Intention Model",
      description: "A predictive model designed to determine user purchase intentions on an e-commerce platform by analyzing real-time session data and browsing behavior.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
      tags: [
        { name: "Python", logo: "https://icon.horse/icon/python.org" },
        { name: "Predictive ML", logo: "https://icon.horse/icon/kaggle.com" },
        { name: "XGBoost", logo: "https://icon.horse/icon/xgboost.ai" },
        { name: "Pandas", logo: "https://icon.horse/icon/pandas.pydata.org" }
      ],
      github: "https://github.com/VenkataBalaji07/E-Commerce-Purchase-Intention-Model-",
      demo: "#",
    },
    {
      title: "Language Learning Bot",
      description: "An AI-powered conversational chatbot built with Large Language Models to help users learn new languages through interactive and dynamic dialogue.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200",
      tags: [
        { name: "Generative AI", logo: "https://icon.horse/icon/openai.com" },
        { name: "NLP", logo: "https://icon.horse/icon/huggingface.co" },
        { name: "LLMs", logo: "https://icon.horse/icon/anthropic.com" },
        { name: "Python", logo: "https://icon.horse/icon/python.org" }
      ],
      github: "https://github.com/VenkataBalaji07/Language_Learning_Bot",
      demo: "#",
    },
    {
      title: "AI News Summarizer",
      description: "An automated NLP application that scrapes, aggregates, and concisely summarizes daily news articles, saving users time and delivering core information efficiently.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200",
      tags: [
        { name: "NLP", logo: "https://icon.horse/icon/huggingface.co" },
        { name: "LangChain", logo: "https://icon.horse/icon/langchain.com" },
        { name: "Transformers", logo: "https://icon.horse/icon/huggingface.co" },
        { name: "Python", logo: "https://icon.horse/icon/python.org" }
      ],
      github: "https://github.com/VenkataBalaji07/News_Summarizer",
      demo: "#",
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent" id="projects">
      {/* Light Cyberpunk Tech Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#00E5FF20_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute left-1/4 right-1/4 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-30" />
      </div>

      {/* Decorative blurred blobs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#8B5CF6]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#00E5FF]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#00E5FF] tracking-tight mb-6 drop-shadow-sm">
            AI & Data Science Projects
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-[#8B5CF6] to-[#00E5FF] mx-auto rounded-full mb-8 shadow-[0_0_10px_rgba(0,229,255,0.4)]"></div>
          <p className="text-[#5E6472] max-w-2xl mx-auto text-[17px] font-medium">
            Showcasing practical applications of Machine Learning, Data Analytics, and predictive modeling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-full"
              >
                <GlowCard 
                  customSize={true}
                  glowColor="blue"
                  className="bg-white/80 backdrop-blur-xl h-full flex flex-col group overflow-hidden border border-[#00E5FF]/20 hover:border-[#8B5CF6]/50 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] transition-all duration-300"
                >
                  <div className="relative aspect-video w-full overflow-hidden border-b border-[#E6E3EE]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <div className="w-10 h-10 rounded-[12px] bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
                        <Activity className="w-5 h-5 text-[#8B5CF6]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full p-6 sm:p-8 flex flex-col flex-1">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#1F1F23] mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8B5CF6] group-hover:to-[#00E5FF] transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-[#5E6472] text-[15px] leading-[1.7] font-medium mb-6">
                        {project.description}
                      </p>
                      
                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-2.5 mb-8">
                        {project.tags.map((tag) => (
                          <motion.div
                            key={tag.name}
                            whileHover={{ y: -3, scale: 1.05 }}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#1E293B] text-[12px] font-bold rounded-full border border-[#E2E8F0] hover:border-[#00E5FF] hover:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all duration-300 cursor-default"
                          >
                            <img 
                              src={tag.logo} 
                              alt={tag.name} 
                              className="w-3.5 h-3.5 object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                            {tag.name}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-[#E6E3EE]">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-premium w-full flex-1 h-11 text-[13.5px] rounded-[10px]"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline-premium w-full flex-1 h-11 text-[13.5px] rounded-[10px]"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
