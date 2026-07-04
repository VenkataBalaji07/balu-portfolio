
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Code, Database } from "lucide-react";

interface ProjectInfoProps {
  projectInfo: {
    title: string;
    description: string;
    techStack: string;
    analysisCount: string;
  };
}

const ProjectInfo = ({ projectInfo }: ProjectInfoProps) => {
  return (
    <Card className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700/50">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">{projectInfo.title}</h3>
            <p className="text-gray-300 mb-4 line-clamp-2">{projectInfo.description}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Badge variant="outline" className="border-primary text-primary">
                <Code className="w-4 h-4 mr-1" />
                {projectInfo.analysisCount}
              </Badge>
              <Badge variant="outline" className="border-cyan-400 text-cyan-400">
                <Database className="w-4 h-4 mr-1" />
                {projectInfo.techStack}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectInfo;
