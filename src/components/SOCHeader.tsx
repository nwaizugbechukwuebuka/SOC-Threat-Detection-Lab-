import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Activity, Settings } from "lucide-react";

const SOCHeader = () => {
  return (
    <header className="border-b border-border bg-gradient-surface p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary animate-glow" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">CyberShield SOC</h1>
              <p className="text-sm text-muted-foreground">Threat Detection & Response Lab</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="border-safe text-safe">
              <Activity className="h-3 w-3 mr-1" />
              System Operational
            </Badge>
            <Badge variant="outline" className="border-medium text-medium">
              <AlertTriangle className="h-3 w-3 mr-1" />
              3 Active Alerts
            </Badge>
          </div>
          
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SOCHeader;