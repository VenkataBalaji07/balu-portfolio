
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface KeyInsightsProps {
  keyInsights: string[];
}

const KeyInsights = ({ keyInsights }: KeyInsightsProps) => {
  return (
    <Card className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700/50">
      <CardHeader>
        <CardTitle className="text-white">Development Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {keyInsights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start p-4 bg-gray-800/50 rounded-lg border border-gray-600/50"
            >
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300">{insight}</span>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default KeyInsights;
