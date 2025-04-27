
const testimonials = [
  {
    quote: "Origin Technologies transformed our business with their exceptional app development services. They truly understand client needs.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
  },
  {
    quote: "Working with Origin Technologies was a game-changer. Their expertise and dedication to quality is unmatched.",
    author: "Michael Chen",
    role: "Founder, InnovateCo",
  },
  {
    quote: "The team's attention to detail and commitment to excellence made our project a huge success.",
    author: "Emily Rodriguez",
    role: "CTO, FutureTech",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground">
            The results speak for themselves
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-orange-500/10 hover:border-orange-500/30 transition-colors shadow-lg">
              <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gradient">{testimonial.author}</p>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
