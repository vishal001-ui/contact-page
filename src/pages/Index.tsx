import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Code, BookOpen } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "B.Tech Portfolio | Home";
  }, []);

  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in">
            B.Tech Computer Science Student
          </span>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 animate-slide-down">
            Building the Future <br /> With Code
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-slide-down" style={{ animationDelay: "100ms" }}>
            B.Tech in Computer Science and Engineering, specializing in software development, 
            data structures and algorithms, and innovative problem-solving.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-down" style={{ animationDelay: "200ms" }}>
            <Button className="h-12 px-8 rounded-lg btn-hover flex items-center gap-2">
              <Code size={18} />
              View Projects
            </Button>
            
            <Link to="/contact">
              <Button variant="outline" className="h-12 px-8 rounded-lg flex items-center gap-2 btn-hover">
                Contact Me 
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 flex justify-center gap-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-all">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="p-3 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-all">
              <BookOpen size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
