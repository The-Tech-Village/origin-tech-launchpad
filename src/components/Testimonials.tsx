
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
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
