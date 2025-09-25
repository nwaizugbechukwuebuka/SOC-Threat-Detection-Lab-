import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Play, 
  Clock,
  CheckCircle,
  AlertCircle,
  Shield
} from "lucide-react";

const IncidentPlaybooks = () => {
  const playbooks = [
    {
      id: "PB-001",
      title: "Phishing Email Response",
      description: "Complete workflow for phishing email incidents",
      status: "active",
      lastUpdated: "2 days ago",
      executionTime: "15-30 min",
      severity: "high",
      steps: 8
    },
    {
      id: "PB-002",
      title: "Malware Infection",
      description: "Containment and remediation for malware incidents",
      status: "reviewed",
      lastUpdated: "1 week ago",
      executionTime: "30-60 min",
      severity: "critical",
      steps: 12
    },
    {
      id: "PB-003",
      title: "Data Exfiltration",
      description: "Response to unauthorized data access or theft",
      status: "draft",
      lastUpdated: "3 days ago",
      executionTime: "45-90 min",
      severity: "critical",
      steps: 15
    },
    {
      id: "PB-004",
      title: "Brute Force Attack",
      description: "Handling multiple failed authentication attempts",
      status: "active",
      lastUpdated: "5 days ago",
      executionTime: "10-20 min",
      severity: "medium",
      steps: 6
    },
    {
      id: "PB-005",
      title: "Insider Threat",
      description: "Investigation of suspicious internal user activity",
      status: "reviewed",
      lastUpdated: "1 week ago",
      executionTime: "60-120 min",
      severity: "high",
      steps: 18
    }
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case "active": return "bg-safe text-safe-foreground";
      case "reviewed": return "bg-medium text-medium-foreground";
      case "draft": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case "critical": return "text-critical";
      case "high": return "text-high";
      case "medium": return "text-medium";
      default: return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return CheckCircle;
      case "reviewed": return AlertCircle;
      case "draft": return Clock;
      default: return FileText;
    }
  };

  return (
    <Card className="bg-gradient-surface border-border">
      <CardHeader>
        <CardTitle className="flex items-center text-foreground">
          <Shield className="h-5 w-5 mr-2 text-primary" />
          Incident Response Playbooks
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {playbooks.map((playbook) => {
            const StatusIcon = getStatusIcon(playbook.status);
            return (
              <div
                key={playbook.id}
                className="border border-border rounded-lg p-4 hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <StatusIcon className="h-4 w-4 text-primary" />
                    <h4 className="font-semibold text-foreground">{playbook.title}</h4>
                  </div>
                  <Badge className={getStatusClass(playbook.status)}>
                    {playbook.status.toUpperCase()}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {playbook.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <div className="flex items-center space-x-4">
                    <span>ID: {playbook.id}</span>
                    <span>{playbook.steps} steps</span>
                    <span className={getSeverityClass(playbook.severity)}>
                      {playbook.severity.toUpperCase()} severity
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-3 w-3" />
                    <span>~{playbook.executionTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Updated {playbook.lastUpdated}
                  </span>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <FileText className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Play className="h-3 w-3 mr-1" />
                      Execute
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default IncidentPlaybooks;