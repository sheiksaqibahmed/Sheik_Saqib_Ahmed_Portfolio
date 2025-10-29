import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  description?: string;
}

const education: EducationItem[] = [
  {
    degree: "Bachelor's in Computer Applications (BCA)",
    institution: "University of Mysore, St.Philomena's Degree College",
    location: "Mysore",
    period: "2021 - 2024",
    grade: "8.06 CGPA",
    description: "Comprehensive computer science education covering programming fundamentals, data structures, algorithms, database management, and software engineering principles."
  },
  {
    degree: "Pre-University College (PCMB)",
    institution: "Higher Secondary Education",
    location: "Karnataka",
    period: "2019 - 2021",
    grade: "75%"
  },
  {
    degree: "SSLC (High School)",
    institution: "Secondary Education",
    location: "Karnataka", 
    period: "2018 - 2019",
    grade: "85.28%"
  }
];

export const Education = () => {
  return (
    <Section id="education">
      <div className="text-center mb-16 scroll-animate">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Academic foundation in computer science and continuous learning journey
        </p>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card 
            key={index}
            className="p-6 md:p-8 hover-lift glass-card border-card-border"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-accent-text">
                    {edu.degree}
                  </h3>
                </div>
                
                <p className="text-primary font-medium">
                  {edu.institution}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-0 md:ml-6">
                <Badge 
                  variant="secondary" 
                  className="bg-gradient-accent text-accent-foreground font-medium"
                >
                  {edu.grade}
                </Badge>
              </div>
            </div>

            {edu.description && (
              <p className="text-muted-foreground leading-relaxed mt-4">
                {edu.description}
              </p>
            )}
          </Card>
        ))}
      </div>

      {/* Additional Certifications/Courses */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8 text-center gradient-accent-text">
          Professional Development
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 glass-card border-card-border">
            <h4 className="font-semibold mb-2 gradient-text">Java Developer Course</h4>
            <p className="text-sm text-muted-foreground mb-3">IVAC Academy • July 2023 - Sep 2023</p>
            <p className="text-sm text-muted-foreground">
              Comprehensive Java programming course focusing on core concepts, debugging, and testing methodologies.
            </p>
          </Card>
          
          <Card className="p-6 glass-card border-card-border">
            <h4 className="font-semibold mb-2 gradient-text">Continuous Learning</h4>
            <p className="text-sm text-muted-foreground mb-3">Self-Directed Learning</p>
            <p className="text-sm text-muted-foreground">
              Actively pursuing knowledge in emerging technologies, open-source contributions, and industry best practices.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
};