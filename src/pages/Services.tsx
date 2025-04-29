
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import CTA from "@/components/CTA";

const services = [
  {
    title: "Mobile App Development",
    description: "We create responsive, feature-rich mobile applications for iOS and Android platforms that engage users and deliver exceptional experiences.",
    features: [
      "Native and cross-platform development",
      "UI/UX design for mobile",
      "App store optimization",
      "Maintenance and support"
    ],
    icon: "📱"
  },
  {
    title: "Web Development",
    description: "Our web development services range from simple landing pages to complex web applications, all designed with performance and usability in mind.",
    features: [
      "Responsive website design",
      "Progressive web apps",
      "E-commerce solutions",
      "Content management systems"
    ],
    icon: "🌐"
  },
  {
    title: "UI/UX Design",
    description: "We create intuitive, engaging interfaces that delight users while achieving your business objectives through thoughtful, research-driven design.",
    features: [
      "User research and testing",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Design systems"
    ],
    icon: "🎨"
  },
  {
    title: "Consulting",
    description: "Our technology consulting services help you make informed decisions about product strategy, technology stack, and development roadmap.",
    features: [
      "Technology assessment",
      "Digital transformation strategy",
      "Technical architecture planning",
      "Team augmentation"
    ],
    icon: "💼"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver cutting-edge digital solutions tailored to your business needs.
              Our team of experts combines technical excellence with creative thinking.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-orange-500/10 hover:border-orange-500/30 transition-colors">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Key Features:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-muted-foreground">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-orange-500/10 rounded-lg p-8 mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Development Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-orange-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1</span>
                </div>
                <h3 className="font-semibold mb-2">Discovery</h3>
                <p className="text-sm text-muted-foreground">We analyze your requirements and define project scope.</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2</span>
                </div>
                <h3 className="font-semibold mb-2">Design</h3>
                <p className="text-sm text-muted-foreground">We create wireframes, prototypes and visual designs.</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3</span>
                </div>
                <h3 className="font-semibold mb-2">Development</h3>
                <p className="text-sm text-muted-foreground">We build your solution with iterative feedback cycles.</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">4</span>
                </div>
                <h3 className="font-semibold mb-2">Delivery</h3>
                <p className="text-sm text-muted-foreground">We deploy and provide ongoing support and maintenance.</p>
              </div>
            </div>
          </div>
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
