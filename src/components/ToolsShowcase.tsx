
import { motion } from "framer-motion";

const ToolsShowcase = () => {
  const tools = [
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      description: "Core programming language for AI and data science"
    },
    {
      name: "SQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      description: "Database querying and management"
    },
    {
      name: "Pandas",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      description: "Data manipulation and analysis library"
    },
    {
      name: "NumPy",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      description: "Numerical computing library"
    },
    {
      name: "Matplotlib",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
      description: "Static data visualization library"
    },
    {
      name: "Seaborn",
      logo: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
      description: "Statistical data visualization"
    },
    {
      name: "Plotly",
      logo: "https://plotly.com/all_static/images/plotly-logo.png",
      description: "Interactive data visualization"
    },
    {
      name: "Scikit-Learn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      description: "Machine learning library"
    },
    {
      name: "TensorFlow",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      description: "Deep learning framework"
    },
    {
      name: "Keras",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
      description: "High-level neural networks API"
    },
    {
      name: "spaCy",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/SpaCy_logo.svg",
      description: "Natural language processing library"
    },
    {
      name: "OpenCV",
      logo: "https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_black_.png",
      description: "Computer vision library"
    },
    {
      name: "PyTorch",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      description: "Deep learning framework"
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]" id="tools">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0F172A]">
            Tools & Technologies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2563EB] to-[#38BDF8] mx-auto mb-6 rounded-full"></div>
          <p className="text-base text-[#64748B] max-w-3xl mx-auto">
            Technologies and frameworks I use to build intelligent solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -4,
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)"
              }}
              className="group bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm hover:border-[#2563EB]/15 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
                className="w-14 h-14 mx-auto mb-3 flex items-center justify-center"
              >
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="w-10 h-10 object-contain transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/48x48/2563EB/FFFFFF?text=${tool.name.charAt(0)}`;
                  }}
                />
              </motion.div>
              <h3 className="text-sm font-semibold text-[#0F172A] mb-1 group-hover:text-[#2563EB] transition-colors">
                {tool.name}
              </h3>
              <p className="text-[#94A3B8] text-xs group-hover:text-[#64748B] transition-colors">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsShowcase;
