import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  website?: string;
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Developer",
    company: "Qubits Infotech Solutions Pvt. Ltd.",
    location: "Bengaluru",
    period: "Jan 2025 – Jun 2025",
    website: "https://www.qubitsinfotechsolution.tech/",
    description: [
      "Developed and maintained real-time web applications using Python and FastAPI",
      "Focused on scalable backend services and API integrations", 
      "Collaborated with cross-functional teams to deliver logistics management platform",
      "Handled real-time shipment tracking and automated notifications"
    ],
    skills: ["Python", "FastAPI", "REST APIs", "Real-time Systems", "Team Collaboration"]
  },
  {
    title: "Data Science Trainee",
    company: "Naghavi Financial Services Pvt. Ltd.",
    location: "Bengaluru", 
    period: "Sep 2024 – Jan 2025",
    website: "https://naghavifin.com",
    description: [
      "Gained hands-on experience in data preprocessing, EDA, and predictive modeling",
      "Contributed to real-time credit risk analysis project with 18% accuracy improvement",
      "Designed interactive dashboards using Power BI and Matplotlib",
      "Applied statistical techniques and feature engineering for model performance",
      "Collaborated with data engineering team to automate data pipelines"
    ],
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Power BI", "SQL", "Machine Learning"]
  },
  {
    title: "Python Full-stack Development Intern",
    company: "Shishira Softbiz Pvt Ltd",
    location: "Mysore",
    period: "March 2024 - May 2024",
    description: [
      "Learned Git and GitHub for effective code collaboration and version control",
      "Gained experience in building end-to-end web applications",
      "Integrated front-end, back-end, and database technologies"
    ],
    skills: ["Python", "Full-stack Development", "Git", "GitHub", "Web Applications"]
  },
  {
    title: "Java Developer Course",
    company: "IVAC Academy",
    location: "Online",
    period: "July 2023 - Sep 2023",
    description: [
      "Focused on writing, debugging, and testing code in Java",
      "Assisted in fixing bugs reported by QA teams and end-users",
      "Learned core Java programming concepts and best practices"
    ],
    skills: ["Java", "Debugging", "Testing", "Problem Solving"]
  }
];

export const Experience = () => {
  return (
    <Section id="experience" className="bg-muted/30">
      <div className="text-center mb-16 scroll-animate">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Professional journey through software development, data science, and continuous learning
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card 
            key={index} 
            className="p-6 md:p-8 hover-lift glass-card border-card-border"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold gradient-accent-text">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>{exp.company}</span>
                  {exp.website && (
                    <a 
                      href={exp.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary-glow transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4">
                {exp.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="text-xs border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};