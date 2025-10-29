import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Brain, Wrench, Github, Users } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    description: "Core programming expertise",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "Web Development",
    icon: Database,
    description: "Full-stack development capabilities",
    skills: ["FastAPI", "React", "REST APIs", "HTML/CSS", "Git", "GitHub"]
  },
  {
    title: "Data Science & ML",
    icon: Brain,
    description: "Machine learning and analytics",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Power BI", "Matplotlib", "Statistical Analysis"]
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    description: "Development and deployment tools",
    skills: ["Docker", "GitHub Actions", "CI/CD", "pytest", "Version Control"]
  },
  {
    title: "Databases",
    icon: Database,
    description: "Data storage and management",
    skills: ["SQL", "Database Design", "Data Pipelines", "Data Preprocessing"]
  },
  {
    title: "Soft Skills",
    icon: Users,
    description: "Professional capabilities",
    skills: ["Problem Solving", "Team Collaboration", "Analytical Thinking", "Continuous Learning"]
  }
];

export const Skills = () => {
  return (
    <Section id="skills" className="bg-muted/30">
      <div className="text-center mb-16 scroll-animate">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Skills & Expertise</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive technical skills across software development, data science, and modern web technologies
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <Card 
              key={index}
              className="p-6 hover-lift glass-card border-card-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold gradient-accent-text">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Achievement Highlights */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-8 gradient-accent-text">Key Achievements</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6 glass-card border-card-border">
            <div className="text-3xl font-bold gradient-text mb-2">18%</div>
            <p className="text-sm text-muted-foreground">Risk Assessment Accuracy Improvement</p>
          </Card>
          <Card className="p-6 glass-card border-card-border">
            <div className="text-3xl font-bold gradient-text mb-2">25%</div>
            <p className="text-sm text-muted-foreground">System Throughput Improvement</p>
          </Card>
          <Card className="p-6 glass-card border-card-border">
            <div className="text-3xl font-bold gradient-text mb-2">85%+</div>
            <p className="text-sm text-muted-foreground">Test Coverage Achievement</p>
          </Card>
        </div>
      </div>
    </Section>
  );
};