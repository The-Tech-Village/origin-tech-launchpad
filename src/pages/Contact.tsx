
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // In a real application, you would send this data to your backend
      console.log("Form submitted:", formData);
      
      // Email would be sent to contact.ttvillage@gmail.com in a real implementation
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions or want to discuss your project? Reach out to us using the form below or through our contact information.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="md:col-span-2">
              <div className="bg-card/50 backdrop-blur-sm border border-orange-500/10 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is your message about?"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Please provide details about your inquiry"
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 hover:opacity-90 transition-opacity text-lg py-6 shadow-lg shadow-orange-500/20"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
            <div>
              <div className="bg-card/50 backdrop-blur-sm border border-orange-500/10 rounded-lg p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-4 text-orange-400 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">contact.ttvillage@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-4 text-orange-400 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-4 text-orange-400 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-muted-foreground">
                        1234 Tech Street<br />
                        San Francisco, CA 94107<br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-4 text-orange-400 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9AM - 6PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.103672391171!2d-122.41941708471198!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085d91d63a1%3A0x91607041a9ec504a!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1582052361692!5m2!1sen!2s" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
