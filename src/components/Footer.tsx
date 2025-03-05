
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-white dark:bg-card border-t border-border/50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-medium tracking-tight">
              Minimalist
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Designed with simplicity and elegance in mind.
            </p>
          </div>
          
          <div className="flex space-x-6 md:space-x-10">
            <Link to="/" className="text-sm hover:text-primary transition-all duration-300">Home</Link>
            <Link to="/contact" className="text-sm hover:text-primary transition-all duration-300">Contact</Link>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Minimalist. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-all duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-all duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
