
import { Check } from "lucide-react";

const features = [
  {
    title: "Custom Development",
    description: "Tailored solutions built specifically for your business needs and goals",
  },
  {
    title: "Expert Team",
    description: "Skilled developers with years of experience in multiple technologies",
  },
  {
    title: "Agile Process",
    description: "Flexible development approach with regular updates and iterations",
  },
  {
    title: "Ongoing Support",
    description: "Dedicated maintenance and support after project completion",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Origin Technologies
          </h2>
          <p className="text-xl text-gray-600">
            We deliver exceptional results through our proven expertise
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-xl border bg-white hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
