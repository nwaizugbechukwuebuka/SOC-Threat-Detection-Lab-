import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  AlertTriangle, 
  Shield, 
  Eye, 
  Clock,
  ExternalLink,
  Filter
} from "lucide-react";

const AlertsFeed = () => {
  const alerts = [
    {
      id: "ALT-001",
      title: "Suspicious PowerShell Execution",
      description: "Detected base64 encoded PowerShell command execution",
      severity: "critical",
      source: "WIN-SRV-01",
      timestamp: "2 minutes ago",
      status: "investigating"
    },
    {
      id: "ALT-002", 
      title: "Failed Login Attempts",
      description: "Multiple failed SSH login attempts from 192.168.1.100",
      severity: "high",
      source: "LNX-WEB-02",
      timestamp: "5 minutes ago", 
      status: "new"
    },
    {
      id: "ALT-003",
      title: "Unusual Network Traffic",
      description: "Abnormal data transfer to external IP",
      severity: "medium",
      source: "Firewall",
      timestamp: "12 minutes ago",
      status: "resolved"
    },
    {
      id: "ALT-004",
      title: "Process Injection Detected",
      description: "Potential code injection in system process",
      severity: "critical",
      source: "WIN-WS-15",
      timestamp: "18 minutes ago",
      status: "escalated"
    },
    {
      id: "ALT-005",
      title: "DNS Anomaly",
      description: "Suspicious DNS queries to known malicious domains",
      severity: "high",
      source: "DNS Server",
      timestamp: "25 minutes ago",
      status: "investigating"
    }
  ];

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-critical text-critical-foreground";
      case "high": return "bg-high text-high-foreground";
      case "medium": return "bg-medium text-medium-foreground";
      case "low": return "bg-low text-low-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "new": return "bg-primary/20 text-primary border-primary/30";
      case "investigating": return "bg-medium/20 text-medium border-medium/30";
      case "escalated": return "bg-critical/20 text-critical border-critical/30";
      case "resolved": return "bg-safe/20 text-safe border-safe/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <Card className="bg-gradient-surface border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center text-foreground">
            <AlertTriangle className="h-5 w-5 mr-2 text-primary" />
            Live Security Alerts
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Filter className="h-4 w-4 mr-1" />
              Filter
            </Button>
            <Badge variant="outline" className="border-primary text-primary">
              {alerts.length} Active
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div 
                key={alert.id}
                className="border border-border rounded-lg p-4 hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Badge className={getSeverityClass(alert.severity)}>
                      {alert.severity.toUpperCase()}
                    </Badge>
                    <Badge variant="outline" className={getStatusClass(alert.status)}>
                      {alert.status.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {alert.timestamp}
                  </div>
                </div>
                
                <h4 className="font-semibold text-foreground mb-1">{alert.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Shield className="h-3 w-3 mr-1" />
                    Source: {alert.source}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-3 w-3 mr-1" />
                      Investigate
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AlertsFeed;