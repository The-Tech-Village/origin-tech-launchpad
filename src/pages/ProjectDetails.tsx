
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

// Define the project type
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  longDescription?: string;
  goals?: string[];
  challenges?: string[];
  solution?: string;
  results?: string;
}

// Projects data
const projectsData: Project[] = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory management.",
    longDescription: "We built a comprehensive e-commerce solution that handles everything from inventory management to payment processing. The platform includes features such as real-time stock updates, personalized recommendations, and an intuitive admin dashboard.",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=E-Commerce",
    tech: ["React", "Node.js", "MongoDB"],
    goals: [
      "Create a scalable shopping experience",
      "Implement real-time inventory tracking",
      "Provide detailed analytics for business owners"
    ],
    challenges: [
      "Handling high traffic during sales events",
      "Ensuring secure payment processing",
      "Optimizing for mobile devices"
    ],
    solution: "We implemented a microservices architecture to handle various aspects of the platform separately, allowing for better scalability. The frontend was built with React for a responsive user interface, while the backend used Node.js and MongoDB for efficient data management.",
    results: "The platform saw a 40% increase in conversion rates and a 25% reduction in cart abandonment compared to the client's previous solution."
  },
  {
    id: "healthcare-app",
    title: "Healthcare App",
    description: "Patient management system with integrated telemedicine features.",
    longDescription: "We developed a healthcare management application that bridges the gap between patients and healthcare providers. The app facilitates appointment scheduling, secure messaging, video consultations, and medical record management.",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=Healthcare",
    tech: ["React Native", "Express", "PostgreSQL"],
    goals: [
      "Streamline patient-doctor communication",
      "Simplify appointment management",
      "Ensure HIPAA compliance for all data"
    ],
    challenges: [
      "Maintaining patient data security",
      "Creating a reliable video consultation feature",
      "Integrating with existing hospital systems"
    ],
    solution: "We built a cross-platform mobile application using React Native, with a secure Express backend and PostgreSQL database. Special attention was given to encryption and data protection measures to ensure compliance with healthcare regulations.",
    results: "The app helped reduce administrative overhead by 35% and increased patient satisfaction scores by 28%."
  },
  {
    id: "financial-dashboard",
    title: "Financial Dashboard",
    description: "Real-time financial data visualization and analysis platform.",
    longDescription: "We created a comprehensive financial dashboard that provides real-time insights into market trends, portfolio performance, and investment opportunities. The platform aggregates data from multiple sources and presents it in an intuitive interface.",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=Finance",
    tech: ["React", "Python", "AWS"],
    goals: [
      "Visualize complex financial data simply",
      "Enable real-time market monitoring",
      "Provide actionable investment insights"
    ],
    challenges: [
      "Processing large volumes of market data quickly",
      "Creating meaningful visualizations for complex data",
      "Ensuring minimal latency for real-time updates"
    ],
    solution: "We utilized React for the frontend with dynamic charting libraries, while Python handled the data processing backend. The entire solution was deployed on AWS for scalability and reliability, with special attention to optimizing data flow for real-time performance.",
    results: "Users reported making investment decisions 50% faster with the dashboard, and the platform maintained sub-second response times even during peak market activity."
  },
];

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  
  useEffect(() => {
    // Find the project that matches the ID in the URL
    const foundProject = projectsData.find(p => p.id === id);
    setProject(foundProject || null);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center pt-24 pb-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Button variant="outline" asChild className="mb-6">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full rounded-lg shadow-lg mb-6"
              />
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-orange-500/10">
                <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-orange-500/10 text-orange-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{project.longDescription}</p>
              
              {project.goals && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Project Goals</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {project.goals.map((goal, index) => (
                      <li key={index} className="text-muted-foreground">{goal}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.challenges && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-muted-foreground">{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.solution && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
              )}
              
              {project.results && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Results</h2>
                  <p className="text-muted-foreground">{project.results}</p>
                </div>
              )}
              
              <Button 
                className="mt-4 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-lg shadow-orange-500/20"
                onClick={() => scrollToSection('contact')}
              >
                Start a Similar Project
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Helper function to scroll to a section
const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default ProjectDetails;
