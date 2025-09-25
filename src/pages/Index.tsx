import SOCHeader from "@/components/SOCHeader";
import ThreatMetrics from "@/components/ThreatMetrics";
import AlertsFeed from "@/components/AlertsFeed";
import ThreatMap from "@/components/ThreatMap";
import IncidentPlaybooks from "@/components/IncidentPlaybooks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SOCHeader />
      
      <main className="container mx-auto p-6 space-y-6">
        {/* Threat Overview Metrics */}
        <ThreatMetrics />
        
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Alerts Feed - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <AlertsFeed />
          </div>
          
          {/* Threat Map - Takes up 1 column */}
          <div className="lg:col-span-1">
            <ThreatMap />
          </div>
        </div>
        
        {/* Incident Response Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <IncidentPlaybooks />
          
          {/* Additional SOC Tools Panel */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-gradient-surface border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-3 bg-primary/20 border border-primary/30 rounded-lg text-primary hover:bg-primary/30 transition-colors">
                  Run System Scan
                </button>
                <button className="p-3 bg-medium/20 border border-medium/30 rounded-lg text-medium hover:bg-medium/30 transition-colors">
                  Update IOCs
                </button>
                <button className="p-3 bg-safe/20 border border-safe/30 rounded-lg text-safe hover:bg-safe/30 transition-colors">
                  Generate Report
                </button>
                <button className="p-3 bg-critical/20 border border-critical/30 rounded-lg text-critical hover:bg-critical/30 transition-colors">
                  Emergency Mode
                </button>
              </div>
            </div>
            
            {/* System Status */}
            <div className="bg-gradient-surface border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">SIEM Engine</span>
                  <span className="text-safe">●  Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Threat Intelligence</span>
                  <span className="text-safe">●  Synced</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Log Collectors</span>
                  <span className="text-medium">●  23/25 Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Endpoint Agents</span>
                  <span className="text-safe">●  147/150 Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
