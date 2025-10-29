import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.jpg";

export const Hero = () => {
  return (
    <Section className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center space-y-8 animate-slide-up">
        {/* Avatar */}
        <div className="relative mx-auto w-32 h-32 mb-8">
          <img
            src={heroAvatar}
            alt="Sheik Saqib Ahmed - Software Engineer"
            className="w-full h-full rounded-full object-cover ring-4 ring-primary/20 animate-float"
          />
        </div>

        {/* Name & Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Sheik Saqib Ahmed</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
            Software Engineer & Data Science Enthusiast
          </h2>
        </div>

        {/* Location & Contact */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Bengaluru, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91 9108387178</span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Motivated Software Engineer with a Bachelor's in Computer Applications (BCA, 2024) and a solid background in Python, Java development, SQL, and Analytical Problem-solving. Excited to leverage skills and enthusiasm for continuous learning to contribute actively to cutting-edge projects and create a significant impact.
        </p>

        {/* Skills Badges */}
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
          {["Python", "Java", "FastAPI", "React", "SQL", "Data Science", "Machine Learning", "DevOps"].map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="px-3 py-1 hover-lift cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            asChild
          >
            <a href="mailto:sheiksaqibahmed@gmail.com">
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Get In Touch
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="hover-lift glass-card border-border/50 group"
            asChild
          >
            <a 
              href="/Saqib_Ahmed_Resume.pdf" 
              download="Saqib_Ahmed_Resume.pdf"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Resume
            </a>
          </Button>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              className="hover-lift glass-card border-border/50"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/saqib-ahmed-8178382a6" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="hover-lift glass-card border-border/50"
              asChild
            >
              <a 
                href="mailto:sheiksaqibahmed@gmail.com"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="hover-lift glass-card border-border/50"
              asChild
            >
              <a 
                href="https://github.com/sheiksaqibahmed"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};