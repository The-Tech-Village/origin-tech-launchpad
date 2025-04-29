
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const jobOpenings = [
  {
    title: "Senior Frontend Developer",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for an experienced frontend developer with expertise in React, TypeScript, and modern web technologies to join our growing team.",
    skills: ["React", "TypeScript", "CSS/Tailwind", "Testing"]
  },
  {
    title: "UX Designer",
    location: "Remote",
    type: "Full-time",
    description: "Join our design team to create intuitive and beautiful user experiences for our clients' digital products.",
    skills: ["Figma", "User Research", "UI Design", "Prototyping"]
  },
  {
    title: "Backend Developer",
    location: "Remote",
    type: "Full-time",
    description: "Help us build robust and scalable backend systems using modern technologies and best practices.",
    skills: ["Node.js", "Python", "SQL", "API Design"]
  },
  {
    title: "Project Manager",
    location: "Hybrid",
    type: "Full-time",
    description: "Lead our development projects from inception to completion, ensuring they meet client requirements and deadlines.",
    skills: ["Agile Methodologies", "Client Communication", "Team Leadership", "Technical Background"]
  },
];

const benefits = [
  {
    title: "Flexible Work",
    description: "Work remotely with flexible hours to maintain a healthy work-life balance.",
    icon: "🌎"
  },
  {
    title: "Competitive Salary",
    description: "We offer industry-competitive compensation packages based on experience and skill level.",
    icon: "💰"
  },
  {
    title: "Growth Opportunities",
    description: "Clear career progression paths and regular opportunities to learn new skills.",
    icon: "📈"
  },
  {
    title: "Health Benefits",
    description: "Comprehensive health, dental, and vision insurance for you and your family.",
    icon: "🏥"
  },
  {
    title: "Tech Stipend",
    description: "Annual budget for equipment, software, and professional development.",
    icon: "💻"
  },
  {
    title: "Team Events",
    description: "Regular virtual and in-person gatherings to foster team spirit and collaboration.",
    icon: "🎉"
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're always looking for talented individuals who are passionate about technology and innovation.
              Explore our current openings and become part of our growing team.
            </p>
          </div>
          
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Current Openings</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-orange-500/10 hover:border-orange-500/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 text-xs rounded-full bg-orange-500/10 text-orange-400">{job.location}</span>
                        <span className="px-3 py-1 text-xs rounded-full bg-orange-500/10 text-orange-400">{job.type}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-orange-500/5 text-orange-400 border border-orange-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full group">
                      Apply Now
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Work With Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm border border-orange-500/10 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-orange-500/10 rounded-lg p-8 text-center mb-20">
            <h2 className="text-2xl font-bold mb-4">Don't See a Suitable Role?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always interested in connecting with talented professionals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-lg shadow-orange-500/20">
              Submit Your Resume
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
