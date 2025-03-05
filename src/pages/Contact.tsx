
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { cn } from "@/lib/utils";

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = "Contact Me | B.Tech Portfolio";
  }, []);
  
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "sunilbishnoi6530@gmail.com",
      description: "Feel free to reach out anytime.",
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+91 XXXX XXXX XX",
      description: "Available Mon-Fri, 9am-6pm.",
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "New Delhi, India",
      description: "Open to relocation & remote",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      title: "GitHub",
      url: "https://github.com/yourusername",
    },
    {
      icon: <Linkedin size={20} />,
      title: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
    },
    {
      icon: <Code size={20} />,
      title: "Projects",
      url: "/projects",
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  
  return (
    <div className="w-full min-h-screen pt-28 pb-20 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-widest text-primary/70 mb-3"
          >
            Let's Connect
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            Currently pursuing my B.Tech degree and looking for opportunities in software development. 
            Feel free to reach out for collaborations, projects, or just to say hello!
          </motion.p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "flex flex-col items-center justify-center text-center",
                "p-8 rounded-xl",
                "bg-white dark:bg-card",
                "shadow-sm hover:shadow-md",
                "border border-border/50",
                "transition-all duration-300 hover:scale-105"
              )}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-medium mb-2">{item.title}</h3>
              <p className="text-lg mb-1">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target={item.url.startsWith("http") ? "_blank" : "_self"}
              rel={item.url.startsWith("http") ? "noopener noreferrer" : ""}
              variants={itemVariants}
              className={cn(
                "flex flex-col items-center justify-center text-center",
                "p-6 rounded-xl",
                "bg-primary/5 dark:bg-primary/10",
                "shadow-sm hover:shadow-md",
                "border border-primary/10",
                "transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary/20"
              )}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                {item.icon}
              </div>
              <h3 className="text-base font-medium">{item.title}</h3>
            </motion.a>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <h2 className="text-2xl font-bold">Send a Message</h2>
            <p className="text-muted-foreground">
              Looking for internships, project collaborations, or have questions about my technical skills and projects? Drop me a message!
            </p>
            
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
              <h3 className="text-sm font-medium mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">React</span>
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">TypeScript</span>
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">Node.js</span>
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">Java</span>
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">Python</span>
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs">ML/AI</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-card rounded-xl shadow-sm border border-border/50 p-6 sm:p-8">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
