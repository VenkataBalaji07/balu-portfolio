
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Sparkles, Brain } from "lucide-react";

interface AnalysisInputProps {
  projectUrl: string;
  setProjectUrl: (url: string) => void;
  isAnalyzing: boolean;
  onAnalyze: () => void;
}

const AnalysisInput = ({ projectUrl, setProjectUrl, isAnalyzing, onAnalyze }: AnalysisInputProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto mb-12"
    >
      <Card className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700/50">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Brain className="w-6 h-6 mr-2 text-primary" />
            Analyze Full Stack AI Project
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Input
              placeholder="Paste GitHub repository or project URL here..."
              value={projectUrl}
              onChange={(e) => setProjectUrl(e.target.value)}
              className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 pr-4 py-6 text-lg"
            />
          </div>
          <Button
            onClick={onAnalyze}
            disabled={!projectUrl || isAnalyzing}
            className="w-full bg-gradient-to-r from-primary to-cyan-400 hover:from-cyan-400 hover:to-primary text-black font-semibold py-6 text-lg button-glow"
          >
            {isAnalyzing ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-2 border-black border-t-transparent rounded-full mr-2"
              />
            ) : (
              <Sparkles className="w-6 h-6 mr-2" />
            )}
            {isAnalyzing ? "Analyzing Full Stack Architecture..." : "Analyze AI Application"}
          </Button>
          {projectUrl && (
            <p className="text-sm text-gray-400 text-center">
              This will analyze frontend, backend, and AI components using advanced development patterns
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AnalysisInput;
