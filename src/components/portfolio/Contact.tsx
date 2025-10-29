import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Github } from "lucide-react";

export const Contact = () => {
  return (
    <Section id="contact" className="bg-muted/30">
      <div className="text-center mb-16 scroll-animate">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Let's Connect</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to collaborate on exciting projects? Let's discuss how we can work together to create innovative solutions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Email */}
          <Card className="p-6 hover-lift glass-card border-card-border text-center">
            <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 gradient-accent-text">Email</h3>
            <p className="text-sm text-muted-foreground mb-4">sheiksaqibahmed@gmail.com</p>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full hover:bg-primary/10"
              asChild
            >
              <a href="mailto:sheiksaqibahmed@gmail.com">
                Send Message
              </a>
            </Button>
          </Card>

          {/* Phone */}
          <Card className="p-6 hover-lift glass-card border-card-border text-center">
            <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 gradient-accent-text">Phone</h3>
            <p className="text-sm text-muted-foreground mb-4">+91 9108387178</p>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full hover:bg-primary/10"
              asChild
            >
              <a href="tel:+919108387178">
                Call Now
              </a>
            </Button>
          </Card>

          {/* LinkedIn */}
          <Card className="p-6 hover-lift glass-card border-card-border text-center">
            <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 gradient-accent-text">LinkedIn</h3>
            <p className="text-sm text-muted-foreground mb-4">Professional Network</p>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full hover:bg-primary/10"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/saqib-ahmed-8178382a6" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Connect
              </a>
            </Button>
          </Card>

          {/* GitHub */}
          <Card className="p-6 hover-lift glass-card border-card-border text-center">
            <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
              <Github className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 gradient-accent-text">GitHub</h3>
            <p className="text-sm text-muted-foreground mb-4">Code Repository</p>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full hover:bg-primary/10"
              asChild
            >
              <a 
                href="https://github.com/sheiksaqibahmed"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </Button>
          </Card>
        </div>

        {/* Location & Availability */}
        <div className="mt-12 text-center">
          <Card className="p-8 glass-card border-card-border">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium gradient-accent-text">Based in Bengaluru, India</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Available for full-time opportunities, freelance projects, and collaboration on innovative software solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="hover:bg-primary/10 transition-colors"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/saqib-ahmed-8178382a6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  View LinkedIn
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="hover:bg-primary/10 transition-colors"
                asChild
              >
                <a 
                  href="https://github.com/sheiksaqibahmed"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};