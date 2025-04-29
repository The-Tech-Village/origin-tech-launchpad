
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">About Origin Technologies</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a passionate team of developers, designers, and digital strategists dedicated to transforming ideas into powerful digital solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2018, Origin Technologies began with a simple mission: to make cutting-edge technology accessible to businesses of all sizes. What started as a small team of three dedicated developers has grown into a full-service digital agency with expertise across multiple disciplines.
              </p>
              <p className="text-muted-foreground mb-4">
                Our journey has been defined by our commitment to quality, innovation, and client success. We believe that technology should solve real problems and create tangible value, which is why we approach every project with a focus on business outcomes rather than just technical specifications.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to have worked with clients across various industries, from startups to enterprise businesses, helping them navigate the digital landscape and achieve their business goals.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-orange-500/10 rounded-lg p-8">
              <div className="mb-6 text-center">
                <div className="inline-block bg-orange-500/10 rounded-full p-4 mb-4">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground mt-2">
                  To be the catalyst for digital innovation, empowering businesses to thrive in an increasingly connected world.
                </p>
              </div>
              <div className="mb-6 text-center">
                <div className="inline-block bg-orange-500/10 rounded-full p-4 mb-4">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground mt-2">
                  To deliver exceptional digital solutions that drive growth, enhance user experiences, and solve complex business challenges.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card/50 backdrop-blur-sm border border-orange-500/10 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace emerging technologies and creative approaches to solve complex problems.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-orange-500/10 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Partnership</h3>
                <p className="text-muted-foreground">
                  We build lasting relationships based on trust, transparency, and mutual success.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-orange-500/10 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in every aspect of our work, from code quality to client communication.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {name: "Alex Johnson", role: "Founder & CEO", image: "https://placehold.co/200x200/1a1f2c/ffffff?text=AJ"},
                {name: "Sarah Chen", role: "Lead Designer", image: "https://placehold.co/200x200/1a1f2c/ffffff?text=SC"},
                {name: "Michael Rodriguez", role: "Technical Lead", image: "https://placehold.co/200x200/1a1f2c/ffffff?text=MR"},
                {name: "Priya Patel", role: "Product Manager", image: "https://placehold.co/200x200/1a1f2c/ffffff?text=PP"},
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-2 border-orange-500/30"
                  />
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
