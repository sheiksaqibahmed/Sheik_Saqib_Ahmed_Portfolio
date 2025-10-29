import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, Brain, Code2 } from "lucide-react";

interface Project {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  icon: any;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Trading Analysis Website",
    description: "A full-stack mobile/web trading prediction app that uses chart pattern recognition, scalping strategies, and machine learning-based price forecasting to assist traders in making smarter decisions.",
    highlights: [
      "Implemented asynchronous data processing pipelines using Python's asyncio, improving system throughput by 25%",
      "Wrote unit and integration tests using pytest, achieving 85%+ test coverage and reducing production bugs",
      "Contributed to DevOps tasks: Dockerized microservices and integrated them into CI/CD pipelines using GitHub Actions",
      "Built real-time chart analysis features with technical indicators and pattern recognition algorithms"
    ],
    technologies: ["Python", "FastAPI", "React", "Machine Learning", "Docker", "GitHub Actions", "pytest", "Technical Analysis"],
    icon: TrendingUp,
    featured: true
  },
  {
    title: "Real-Time Collaborative Task Manager",
    description: "Web-based project management platform with real-time updates, team collaboration features, and advanced analytics for tracking project progress and team productivity.",
    highlights: [
      "Implemented WebSocket-based real-time synchronization across multiple users",
      "Built responsive drag-and-drop interface for intuitive task organization",
      "Integrated analytics dashboard with data visualization for project insights",
      "Developed role-based access control system for team management"
    ],
    technologies: ["React", "Node.js", "WebSocket", "MongoDB", "TypeScript", "Chart.js", "Authentication"],
    icon: Code2,
    featured: true
  },
  {
    title: "E-Commerce Platform with AI Recommendations",
    description: "Full-stack e-commerce solution featuring AI-powered product recommendations, secure payment processing, and real-time inventory management system.",
    highlights: [
      "Developed recommendation engine using collaborative filtering algorithms",
      "Integrated Stripe payment gateway with secure transaction processing",
      "Built admin dashboard for inventory and order management",
      "Implemented cart persistence and checkout optimization"
    ],
    technologies: ["React", "Python", "Django", "PostgreSQL", "Stripe", "Redis", "AI/ML", "REST API"],
    icon: TrendingUp,
    featured: true
  },
  {
    title: "Cyber Attack Detection for Wireless Sensors in Microgrids (IoT)",
    description: "Model for identifying and responding to malicious activities targeting wireless sensor networks that monitor and control microgrid operations and data tampering to ensure the security, reliability, and efficiency.",
    highlights: [
      "Developed machine learning model for detecting cyber attacks in IoT sensor networks",
      "Implemented real-time monitoring system for microgrid wireless sensors",
      "Designed security protocols to prevent data tampering and ensure operational integrity",
      "Applied anomaly detection techniques to identify malicious network activities"
    ],
    technologies: ["Python", "IoT", "Machine Learning", "Cybersecurity", "Wireless Networks", "Anomaly Detection"],
    icon: Brain,
    featured: true
  },
  {
    title: "Weather Forecasting Dashboard",
    description: "Interactive weather application with real-time data visualization, multi-location tracking, and 7-day forecast predictions using third-party weather APIs.",
    highlights: [
      "Integrated multiple weather APIs for accurate forecasting",
      "Built interactive charts and maps for weather data visualization",
      "Implemented geolocation features for automatic location detection",
      "Developed mobile-first responsive design with PWA capabilities"
    ],
    technologies: ["React", "TypeScript", "Weather API", "Chart.js", "Geolocation", "PWA", "Tailwind CSS"],
    icon: Code2
  },
  {
    title: "Small Language Model (NLP)",
    description: "Fully Python program. This model leverages state-of-the-art natural language processing (NLP) techniques to comprehend, retrieve, and generate responses from various file formats such as txt, pdf, and .docx.",
    highlights: [
      "Built custom language model using advanced NLP techniques",
      "Implemented document parsing for multiple file formats (txt, pdf, docx)",
      "Developed intelligent information retrieval and response generation system",
      "Optimized model for efficient processing and accurate comprehension"
    ],
    technologies: ["Python", "NLP", "Natural Language Processing", "Document Parsing", "AI", "Machine Learning"],
    icon: Brain
  },
  {
    title: "Social Media Analytics Dashboard",
    description: "Comprehensive analytics platform that aggregates data from multiple social media platforms, providing insights on engagement, reach, and audience demographics.",
    highlights: [
      "Integrated APIs from Twitter, Instagram, and Facebook for data collection",
      "Built real-time analytics engine processing thousands of data points",
      "Developed custom visualization components for engagement metrics",
      "Implemented scheduled reporting and export functionality"
    ],
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Social Media APIs", "Data Visualization", "Cron Jobs"],
    icon: TrendingUp
  },
  {
    title: "Automatic Street Light Sensor System",
    description: "Intelligent lighting system that automatically controls street lights based on environmental conditions and time, optimizing energy consumption.",
    highlights: [
      "Designed sensor-based automation system for street lighting",
      "Implemented light detection algorithms for optimal switching",
      "Reduced energy consumption through intelligent automation",
      "Built reliable embedded system with minimal maintenance requirements"
    ],
    technologies: ["IoT", "Sensors", "Embedded Systems", "Automation", "Energy Optimization"],
    icon: Code2
  }
];

export const Projects = () => {
  return (
    <Section id="projects">
      <div className="text-center mb-16 scroll-animate">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Showcasing innovative solutions in web development, data science, and machine learning
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <Card 
              key={index}
              className={`p-6 hover-lift glass-card border-card-border relative overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-gradient-accent text-accent-foreground">
                    Featured
                  </Badge>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold gradient-accent-text">
                  {project.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="font-medium text-sm uppercase tracking-wide text-primary">Key Achievements</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-primary/20 hover:border-primary/40 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};