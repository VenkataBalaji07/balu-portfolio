
import { useState } from "react";
import { motion } from "framer-motion";
import AnalysisInput from "./analyzer/AnalysisInput";
import ProjectInfo from "./analyzer/ProjectInfo";
import PerformanceMetrics from "./analyzer/PerformanceMetrics";
import AnalysisCharts from "./analyzer/AnalysisCharts";
import KeyInsights from "./analyzer/KeyInsights";
import DownloadReport from "./analyzer/DownloadReport";

const SentimentAnalyzer = () => {
  const [projectUrl, setProjectUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  // Mock analysis function for full stack AI development
  const analyzeProject = async () => {
    setIsAnalyzing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock results for full stack AI development
    const mockResults = {
      projectInfo: {
        title: "Full Stack AI Application",
        description: "Complete AI-powered web application with React frontend and Python backend...",
        techStack: "React, Node.js, Python, TensorFlow",
        analysisCount: "Analyzed 15 components and 8 AI models"
      },
      techDistribution: [
        { name: "Frontend", value: 40, count: 6, color: "#4ADE80" },
        { name: "Backend", value: 35, count: 5, color: "#94A3B8" },
        { name: "AI/ML", value: 25, count: 4, color: "#EF4444" }
      ],
      performanceMetrics: {
        apiResponse: 95.2,
        modelAccuracy: 92.7,
        codeQuality: 88.5,
        scalability: 91.3
      },
      keyInsights: [
        "Excellent integration between frontend and backend",
        "High-performance AI models with real-time inference",
        "Scalable architecture with microservices",
        "Strong data pipeline and processing capabilities"
      ],
      techFeatures: {
        frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        backend: ["Node.js", "Express", "PostgreSQL", "Redis"],
        ai: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API"]
      }
    };
    
    setResults(mockResults);
    setIsAnalyzing(false);
  };

  const downloadReport = () => {
    if (!results) return;
    
    // Mock report download
    const reportContent = "data:text/csv;charset=utf-8," +
      "Component,Technology,Performance,AI Integration\n" +
      "Frontend,React,95%,High\n" +
      "Backend,Node.js,92%,Medium\n" +
      "AI Models,TensorFlow,88%,Critical\n";
    
    const encodedUri = encodeURI(reportContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "fullstack_ai_analysis.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="analyzer">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Full Stack AI Development Analyzer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Analyze <span className="text-primary font-semibold">complete AI applications</span> using advanced 
            development patterns to understand architecture, performance, and AI integration
          </p>
        </motion.div>

        <AnalysisInput
          projectUrl={projectUrl}
          setProjectUrl={setProjectUrl}
          isAnalyzing={isAnalyzing}
          onAnalyze={analyzeProject}
        />

        {results && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <ProjectInfo projectInfo={results.projectInfo} />
            <PerformanceMetrics performanceMetrics={results.performanceMetrics} />
            <AnalysisCharts techDistribution={results.techDistribution} />
            <KeyInsights keyInsights={results.keyInsights} />
            <DownloadReport onDownload={downloadReport} />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SentimentAnalyzer;
