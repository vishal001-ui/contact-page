
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { cn } from "@/lib/utils";

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = "Contact Us | Minimalist";
  }, []);
  
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "hello@minimalist.com",
      description: "Our friendly team is here to help.",
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+1 (555) 000-0000",
      description: "Mon-Fri from 8am to 5pm.",
    },
    {
      icon: <MapPin size={20} />,
      title: "Office",
      value: "123 Design Street",
      description: "San Francisco, CA 94103",
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
    <div className="w-full min-h-screen pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-widest text-primary/70 mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-light tracking-tight mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            Have a question or need assistance? We're here to help.
            Fill out the form below and our team will get back to you shortly.
          </motion.p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
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
                "transition-all duration-300"
              )}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/5 text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-medium mb-2">{item.title}</h3>
              <p className="text-lg mb-1">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <h2 className="text-2xl font-light">Send us a message</h2>
            <p className="text-muted-foreground">
              We'd love to hear from you. Please fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
              <h3 className="text-sm font-medium mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                Our typical response time is within 24 hours during business days.
              </p>
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
