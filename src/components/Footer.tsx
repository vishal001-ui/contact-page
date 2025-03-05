
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-white dark:bg-card border-t border-border/50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold tracking-tight">
              B.Tech Portfolio
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Computer Science & Engineering Student
            </p>
          </div>
          
          <div className="flex space-x-6 md:space-x-10">
            <Link to="/" className="text-sm hover:text-primary transition-all duration-300">Home</Link>
            <Link to="/projects" className="text-sm hover:text-primary transition-all duration-300">Projects</Link>
            <Link to="/resume" className="text-sm hover:text-primary transition-all duration-300">Resume</Link>
            <Link to="/contact" className="text-sm hover:text-primary transition-all duration-300">Contact</Link>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {currentYear} B.Tech Portfolio. All rights reserved.</p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-primary transition-all">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-all">
              <Linkedin size={18} />
            </a>
            <a href="mailto:sunilbishnoi6530@gmail.com" 
               className="text-muted-foreground hover:text-primary transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
