
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Minimalist | Home";
  }, []);

  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-primary/5 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in">
            Minimalist Design
          </span>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight mb-6 animate-slide-down">
            Beautifully Simple
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-slide-down" style={{ animationDelay: "100ms" }}>
            Inspired by the design principles of minimalism, we create experiences that are intuitive, 
            elegant, and focused on what truly matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-down" style={{ animationDelay: "200ms" }}>
            <Button className="h-12 px-8 rounded-lg btn-hover">
              Learn More
            </Button>
            
            <Link to="/contact">
              <Button variant="outline" className="h-12 px-8 rounded-lg flex items-center gap-2 btn-hover">
                Contact Us 
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
