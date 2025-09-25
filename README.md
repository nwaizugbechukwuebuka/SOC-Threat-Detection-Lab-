# SOC Threat Detection & Incident Response Lab

## 📌 Overview

This project is a **real-world SOC (Security Operations Center) simulation lab**, designed to demonstrate practical skills in threat detection, incident response, and log analysis. It replicates core SOC Level 1 activities using open-source tools and cloud/on-premises environments.

The lab provides hands-on experience with:

* SIEM (Security Information and Event Management)
* Log collection & correlation
* Threat detection use cases
* Incident response workflows
* Security monitoring & reporting

---

## 🎯 Objectives

1. Build a SOC lab environment replicating enterprise workflows.
2. Configure and deploy open-source SIEM (e.g., Wazuh, ELK Stack, or Splunk Free).
3. Collect logs from endpoints, firewalls, and applications.
4. Implement detection rules for common attacks (phishing, brute force, malware).
5. Document incidents and response steps in a structured playbook format.

---

## 🏗️ Project Structure

```
SOC-Lab-Project/
│
├── README.md                # Project documentation
├── architecture/            # Lab architecture diagrams
│   └── soc_lab_architecture.png
│
├── setup/                   # Setup guides & configuration files
│   ├── docker-compose.yml    # Example SIEM deployment
│   ├── wazuh-setup.md        # Wazuh setup guide
│   └── elk-setup.md          # ELK Stack setup guide
│
├── logs/                    # Sample log data for analysis
│   ├── windows-event-logs/
│   ├── linux-syslogs/
│   └── firewall-logs/
│
├── detections/              # Detection rules & queries
│   ├── brute_force_detection.yml
│   ├── phishing_detection.yml
│   └── malware_alerts.yml
│
├── incidents/               # Case studies of incidents
│   ├── incident_001_bruteforce.md
│   ├── incident_002_phishing.md
│   └── incident_003_malware.md
│
├── playbooks/               # Incident response workflows
│   ├── brute_force_playbook.md
│   ├── phishing_playbook.md
│   └── malware_playbook.md
│
└── reports/                 # SOC reports & dashboards
    ├── weekly_report_template.docx
    ├── threat_summary_sept2025.pdf
    └── dashboard_screenshot.png
```

---

## 🛠️ Tools & Technologies

* **SIEM**: Wazuh, ELK Stack, or Splunk (Free)
* **Log Sources**: Windows Event Logs, Linux Syslog, Firewall Logs
* **Detection**: Sigma Rules, Custom Queries
* **Visualization**: Kibana or Splunk Dashboards
* **Response Documentation**: Markdown playbooks, SOC report templates

---

## 📚 Methodology

1. Deploy SIEM using Docker or local setup.
2. Configure log forwarding from endpoints.
3. Write detection rules for brute force, phishing, and malware.
4. Trigger test attacks (simulated).
5. Document findings and incident response steps.
6. Generate SOC reports for stakeholders.

---

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/SOC-Lab-Project.git
cd SOC-Lab-Project
```

2. Follow the setup guides in `/setup` to deploy the lab.

3. Start monitoring logs and testing detections.

4. Document incidents in `/incidents`.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.