import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, MapPin, Shield, AlertTriangle } from "lucide-react";

const ThreatMap = () => {
  const threats = [
    { country: "Russia", attacks: 127, severity: "critical", coordinates: "55.7558° N, 37.6176° E" },
    { country: "China", attacks: 89, severity: "high", coordinates: "39.9042° N, 116.4074° E" },
    { country: "North Korea", attacks: 45, severity: "critical", coordinates: "39.0392° N, 125.7625° E" },
    { country: "Iran", attacks: 32, severity: "medium", coordinates: "35.6892° N, 51.3890° E" },
    { country: "USA", attacks: 23, severity: "low", coordinates: "38.9072° N, 77.0369° W" }
  ];

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case "critical": return "text-critical";
      case "high": return "text-high";
      case "medium": return "text-medium";
      case "low": return "text-low";
      default: return "text-muted-foreground";
    }
  };

  const getSeverityBadgeClass = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-critical text-critical-foreground";
      case "high": return "bg-high text-high-foreground";
      case "medium": return "bg-medium text-medium-foreground";
      case "low": return "bg-low text-low-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="bg-gradient-surface border-border">
      <CardHeader>
        <CardTitle className="flex items-center text-foreground">
          <Globe className="h-5 w-5 mr-2 text-primary" />
          Global Threat Intelligence
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Simulated world map visualization */}
          <div className="relative bg-muted/20 rounded-lg p-6 h-48 border border-border">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-2 animate-pulse-cyber" />
                <p className="text-sm text-muted-foreground">Real-time Threat Map</p>
                <div className="flex items-center justify-center mt-2 space-x-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-critical rounded-full mr-1 animate-pulse"></div>
                    <span className="text-xs text-muted-foreground">Critical</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-high rounded-full mr-1 animate-pulse"></div>
                    <span className="text-xs text-muted-foreground">High</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-medium rounded-full mr-1"></div>
                    <span className="text-xs text-muted-foreground">Medium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Threat source list */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2 text-primary" />
              Top Threat Sources (Last 24h)
            </h4>
            {threats.map((threat, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/10 rounded-lg border border-border/50">
                <div className="flex items-center space-x-3">
                  <MapPin className={`h-4 w-4 ${getSeverityClass(threat.severity)}`} />
                  <div>
                    <p className="font-medium text-foreground">{threat.country}</p>
                    <p className="text-xs text-muted-foreground">{threat.coordinates}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getSeverityBadgeClass(threat.severity)}>
                    {threat.severity.toUpperCase()}
                  </Badge>
                  <span className="text-sm font-semibold text-foreground">{threat.attacks}</span>
                  <span className="text-xs text-muted-foreground">attacks</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThreatMap;