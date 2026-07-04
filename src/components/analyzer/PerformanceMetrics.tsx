
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TrendingUp } from "lucide-react";

interface PerformanceMetricsProps {
  performanceMetrics: {
    [key: string]: number;
  };
}

const PerformanceMetrics = ({ performanceMetrics }: PerformanceMetricsProps) => {
  return (
    <Card className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700/50">
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <TrendingUp className="w-6 h-6 mr-2 text-primary" />
          Performance Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(performanceMetrics).map(([metric, score], index) => (
            <motion.div
              key={metric}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-600/50"
            >
              <div className="text-2xl font-bold text-primary mb-1">{score}%</div>
              <div className="text-sm text-gray-300 capitalize">{metric.replace(/([A-Z])/g, ' $1')}</div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceMetrics;
