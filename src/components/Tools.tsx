
import { motion } from "framer-motion";

const Tools = () => {
  const tools = [
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      description: "Core programming language for AI and data science"
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "Frontend library for building user interfaces"
    },
    {
      name: "Flask",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      description: "Web framework for Python applications"
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
      name: "TensorFlow",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      description: "Machine learning framework"
    },
    {
      name: "PyTorch",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      description: "Deep learning framework"
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      description: "Utility-first CSS framework"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black" id="tools">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Tools & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and frameworks I use to build intelligent solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                boxShadow: "0 20px 40px rgba(74, 222, 128, 0.3)"
              }}
              className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
              >
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="w-12 h-12 group-hover:drop-shadow-lg group-hover:drop-shadow-primary/50 transition-all duration-300"
                />
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
