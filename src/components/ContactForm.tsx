
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mail, MessageCircle, SendIcon, User, Briefcase } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Call Supabase Edge Function to send email
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          recipientEmail: "sunilbishnoi6530@gmail.com"
        }
      });
      
      if (error) throw error;
      
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-6 animate-fade-in"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label 
            htmlFor="name" 
            className="text-sm font-medium text-foreground/80"
          >
            Name
          </label>
          <div className="relative">
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              {...register("name")}
              className={cn(
                "pl-10 h-12 w-full rounded-lg border border-input bg-background",
                "transition-all focus:form-input-focus",
                errors.name && "border-destructive focus:ring-destructive/20"
              )}
              aria-invalid={errors.name ? "true" : "false"}
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <User size={16} />
            </div>
          </div>
          {errors.name && (
            <p className="text-xs font-medium text-destructive mt-1 animate-slide-down">
              {errors.name.message}
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <label 
            htmlFor="email" 
            className="text-sm font-medium text-foreground/80"
          >
            Email
          </label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              {...register("email")}
              className={cn(
                "pl-10 h-12 w-full rounded-lg border border-input bg-background",
                "transition-all focus:form-input-focus",
                errors.email && "border-destructive focus:ring-destructive/20"
              )}
              aria-invalid={errors.email ? "true" : "false"}
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Mail size={16} />
            </div>
          </div>
          {errors.email && (
            <p className="text-xs font-medium text-destructive mt-1 animate-slide-down">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <label 
          htmlFor="subject" 
          className="text-sm font-medium text-foreground/80"
        >
          Subject
        </label>
        <div className="relative">
          <Input
            id="subject"
            type="text"
            placeholder="What is your message about?"
            {...register("subject")}
            className={cn(
              "pl-10 h-12 w-full rounded-lg border border-input bg-background",
              "transition-all focus:form-input-focus",
              errors.subject && "border-destructive focus:ring-destructive/20"
            )}
            aria-invalid={errors.subject ? "true" : "false"}
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Briefcase size={16} />
          </div>
        </div>
        {errors.subject && (
          <p className="text-xs font-medium text-destructive mt-1 animate-slide-down">
            {errors.subject.message}
          </p>
        )}
      </div>
      
      <div className="space-y-2">
        <label 
          htmlFor="message" 
          className="text-sm font-medium text-foreground/80"
        >
          Message
        </label>
        <div className="relative">
          <Textarea
            id="message"
            placeholder="Please tell me about your project, opportunities, or questions..."
            {...register("message")}
            className={cn(
              "pl-10 min-h-[150px] w-full rounded-lg border border-input bg-background resize-none",
              "transition-all focus:form-input-focus",
              errors.message && "border-destructive focus:ring-destructive/20"
            )}
            aria-invalid={errors.message ? "true" : "false"}
          />
          <div className="absolute left-3 top-3 text-muted-foreground">
            <MessageCircle size={16} />
          </div>
        </div>
        {errors.message && (
          <p className="text-xs font-medium text-destructive mt-1 animate-slide-down">
            {errors.message.message}
          </p>
        )}
      </div>
      
      <div className="pt-4">
        <Button
          type="submit"
          className={cn(
            "h-12 px-8 rounded-lg w-full md:w-auto btn-hover",
            "transition-all duration-300 ease-out",
            "flex items-center justify-center gap-2",
            isSubmitting ? "opacity-80" : ""
          )}
          disabled={isSubmitting || !isDirty}
        >
          {isSubmitting ? (
            <>
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <SendIcon size={16} />
              <span>Send Message</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
