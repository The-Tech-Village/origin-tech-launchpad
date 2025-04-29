
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Explore the emerging technologies and methodologies that are shaping the future of web development.",
    date: "April 22, 2025",
    author: "Alex Johnson",
    category: "Technology",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=Web+Dev+Trends"
  },
  {
    id: "2",
    title: "Improving User Experience with Micro-Interactions",
    excerpt: "Learn how small, thoughtful animations can significantly enhance your application's user experience.",
    date: "April 15, 2025",
    author: "Sarah Chen",
    category: "Design",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=UX+Design"
  },
  {
    id: "3",
    title: "Building Scalable Backend Systems: Best Practices",
    excerpt: "Discover architectural patterns and practices for creating backend systems that can grow with your business.",
    date: "April 10, 2025",
    author: "Michael Rodriguez",
    category: "Development",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=Backend+Systems"
  },
  {
    id: "4",
    title: "The Role of AI in Modern Software Development",
    excerpt: "How artificial intelligence is transforming the way we build, test, and deploy software applications.",
    date: "April 5, 2025",
    author: "Priya Patel",
    category: "AI & ML",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=AI+in+Development"
  },
  {
    id: "5",
    title: "Optimizing Performance in React Applications",
    excerpt: "Techniques and tools to ensure your React applications run smoothly even as they grow in complexity.",
    date: "March 28, 2025",
    author: "David Kim",
    category: "React",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=React+Performance"
  },
  {
    id: "6",
    title: "Implementing Robust Security in Web Applications",
    excerpt: "Essential security measures every web application should implement to protect user data.",
    date: "March 20, 2025",
    author: "Emma Williams",
    category: "Security",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=Web+Security"
  }
];

const categories = [
  "All", "Technology", "Design", "Development", "AI & ML", "React", "Security"
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Our Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tutorials, and industry perspectives from our team of experts.
            </p>
          </div>
          
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "" : "border-orange-500/30 hover:bg-orange-500/10"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover:scale-105 transition-transform duration-300 bg-card/50 backdrop-blur-sm border-orange-500/10 hover:border-orange-500/30"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">By {post.author}</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="group text-orange-400 hover:text-orange-500 hover:bg-orange-500/5"
                      asChild
                    >
                      <Link to={`#`}>
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" className="border-orange-500/30 hover:bg-orange-500/10">
              Load More Articles
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
