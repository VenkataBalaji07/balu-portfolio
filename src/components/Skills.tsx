import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  LineChart, 
  BrainCircuit, 
  Network, 
  Sparkles, 
  Wrench,
  Layers
} from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      iconColor: "#2563EB",
      skills: [
        { name: "Python", logo: "https://icon.horse/icon/python.org" },
        { name: "C++", logo: "https://icon.horse/icon/isocpp.org" },
        { name: "JavaScript", logo: "https://icon.horse/icon/javascript.info" },
        { name: "SQL", logo: "https://icon.horse/icon/mysql.com" }
      ]
    },
    {
      title: "Data Science",
      icon: LineChart,
      iconColor: "#16A34A",
      skills: [
        { name: "Pandas", logo: "https://icon.horse/icon/pandas.pydata.org" },
        { name: "NumPy", logo: "https://icon.horse/icon/numpy.org" },
        { name: "Matplotlib", logo: "https://icon.horse/icon/matplotlib.org" },
        { name: "Seaborn", logo: "https://icon.horse/icon/seaborn.pydata.org" },
        { name: "NLTK", logo: "https://icon.horse/icon/nltk.org" },
        { name: "SciPy", logo: "https://icon.horse/icon/scipy.org" }
      ]
    },
    {
      title: "Machine Learning",
      icon: BrainCircuit,
      iconColor: "#9333EA",
      skills: [
        { name: "Scikit-Learn", logo: "https://icon.horse/icon/scikit-learn.org" },
        { name: "XGBoost", logo: "https://icon.horse/icon/xgboost.ai" },
        { name: "Predictive Modeling", logo: "https://icon.horse/icon/kaggle.com" },
        { name: "Feature Engineering", logo: "https://icon.horse/icon/databricks.com" },
        { name: "Model Validation", logo: "https://icon.horse/icon/wandb.ai" }
      ]
    },
    {
      title: "Deep Learning",
      icon: Network,
      iconColor: "#EC4899",
      skills: [
        { name: "Neural Networks", logo: "https://icon.horse/icon/deepmind.google" },
        { name: "NLP", logo: "https://icon.horse/icon/huggingface.co" },
        { name: "Computer Vision", logo: "https://icon.horse/icon/opencv.org" },
        { name: "Time-Series", logo: "https://icon.horse/icon/influxdata.com" }
      ]
    },
    {
      title: "Generative AI",
      icon: Sparkles,
      iconColor: "#EAB308",
      skills: [
        { name: "LangChain", logo: "https://icon.horse/icon/langchain.com" },
        { name: "Large Language Models", logo: "https://icon.horse/icon/openai.com" },
        { name: "Prompt Engineering", logo: "https://icon.horse/icon/anthropic.com" },
        { name: "RAG", logo: "https://icon.horse/icon/pinecone.io" },
        { name: "Transformers", logo: "https://icon.horse/icon/huggingface.co" }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      iconColor: "#F97316",
      skills: [
        { name: "MySQL", logo: "https://icon.horse/icon/mysql.com" },
        { name: "MongoDB", logo: "https://icon.horse/icon/mongodb.com" },
        { name: "PostgreSQL", logo: "https://icon.horse/icon/postgresql.org" }
      ]
    },
    {
      title: "Frameworks",
      icon: Layers,
      iconColor: "#06B6D4",
      skills: [
        { name: "TensorFlow", logo: "https://icon.horse/icon/tensorflow.org" },
        { name: "PyTorch", logo: "https://icon.horse/icon/pytorch.org" },
        { name: "Keras", logo: "https://icon.horse/icon/keras.io" }
      ]
    },
    {
      title: "Development Tools",
      icon: Wrench,
      iconColor: "#6366F1",
      skills: [
        { name: "VS Code", logo: "https://icon.horse/icon/code.visualstudio.com" },
        { name: "Cursor AI", logo: "https://icon.horse/icon/cursor.sh" },
        { name: "Windsurf AI", logo: "https://icon.horse/icon/codeium.com" },
        { name: "Lovable", logo: "https://icon.horse/icon/lovable.dev" },
        { name: "Antigravity IDE", logo: "https://icon.horse/icon/deepmind.google.com" }
      ]
    },
    {
      title: "Other Tools",
      icon: Code2,
      iconColor: "#475569",
      skills: [
        { name: "Jupyter Notebook", logo: "https://icon.horse/icon/jupyter.org" },
        { name: "Google Colab", logo: "https://icon.horse/icon/colab.research.google.com" },
        { name: "Git", logo: "https://icon.horse/icon/git-scm.com" },
        { name: "GitHub", logo: "https://icon.horse/icon/github.com" }
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent" id="skills">
      {/* Light Cyberpunk Tech Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#8B5CF620_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute left-1/4 right-1/4 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent opacity-30" />
      </div>

      {/* Decorative blurred blob */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#00E5FF] tracking-tight mb-6 drop-shadow-sm">
            Tech Stack
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-[#8B5CF6] to-[#00E5FF] mx-auto rounded-full mb-8 shadow-[0_0_10px_rgba(139,92,246,0.4)]"></div>
          <p className="text-[#5E6472] max-w-2xl mx-auto text-[17px] font-medium">
            Technologies, frameworks, and tools I use to build intelligent AI applications, data-driven solutions, and scalable software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-full"
              >
                <GlowCard 
                  customSize={true} 
                  glowColor="blue"
                  className="bg-white/80 backdrop-blur-xl p-8 group flex flex-col h-full border border-[#8B5CF6]/20 hover:border-[#00E5FF]/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,229,255,0.15)] transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-[14px] bg-white flex items-center justify-center group-hover:bg-[#00E5FF]/10 transition-colors duration-500 ease-out shadow-sm border border-[#8B5CF6]/30 group-hover:border-[#00E5FF] shadow-[0_0_10px_rgba(139,92,246,0.1)] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                      <category.icon 
                        className="w-6 h-6 transition-colors duration-500 ease-out group-hover:text-[#00E5FF]" 
                        style={{ color: category.iconColor }} 
                        strokeWidth={2.5}
                      />
                    </div>
                    <h3 className="text-[22px] font-heading font-extrabold text-[#1F1F23] tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8B5CF6] group-hover:to-[#00E5FF] transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>
              
              <div className="flex flex-wrap gap-3 mt-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill.name}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: skillIdx * 0.2
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-[#1E293B] text-[14.5px] font-bold rounded-full border border-[#E2E8F0] hover:border-[#00E5FF] hover:bg-gradient-to-r hover:from-[#F0FDFA] hover:to-[#EFF6FF] hover:text-[#0F172A] transition-colors duration-300 cursor-default shadow-sm hover:shadow-[0_0_12px_rgba(0,229,255,0.2)]"
                  >
                    {skill.logo && (
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className="w-4 h-4 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    )}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
