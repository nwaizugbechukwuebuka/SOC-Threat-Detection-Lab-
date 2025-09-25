import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  Activity,
  TrendingUp,
  Clock
} from "lucide-react";

const ThreatMetrics = () => {
  const metrics = [
    {
      title: "Active Threats",
      value: "3",
      subtext: "2 Critical, 1 High",
      icon: AlertTriangle,
      color: "critical",
      trend: "+2 from yesterday"
    },
    {
      title: "Events Monitored",
      value: "47,291",
      subtext: "Last 24 hours",
      icon: Activity,
      color: "primary",
      trend: "+12% from average"
    },
    {
      title: "Detection Rate",
      value: "98.7%",
      subtext: "Security posture",
      icon: Shield,
      color: "safe",
      trend: "Excellent coverage"
    },
    {
      title: "Mean Response Time",
      value: "4.2m",
      subtext: "Average incident response",
      icon: Clock,
      color: "medium",
      trend: "-30s improvement"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "critical": return "text-critical border-critical/30";
      case "safe": return "text-safe border-safe/30";
      case "medium": return "text-medium border-medium/30";
      default: return "text-primary border-primary/30";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => {
        const IconComponent = metric.icon;
        return (
          <Card key={index} className="bg-gradient-surface border-border hover:shadow-cyber transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <IconComponent className={`h-5 w-5 ${getColorClass(metric.color)}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-1">
                {metric.value}
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                {metric.subtext}
              </p>
              <div className="flex items-center text-xs">
                <TrendingUp className="h-3 w-3 text-safe mr-1" />
                <span className="text-muted-foreground">{metric.trend}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ThreatMetrics;