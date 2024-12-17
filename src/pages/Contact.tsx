import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const name = encodeURIComponent(formData.get('name') as string);
      const email = encodeURIComponent(formData.get('email') as string);
      const message = encodeURIComponent(formData.get('message') as string);

      const mailtoLink = `mailto:robindrory@gmail.com?subject=Contact Form Submission from ${name}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
      
      // Use window.location.href for better compatibility
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened",
        description: "Your default email client should now open with your message.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem opening your email client. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-2xl md:text-3xl font-cinzel text-gold mb-8">Contact Us</h1>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-gold mb-2 font-cinzel">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-rich-black border border-gold/20 rounded p-2 text-gold focus:outline-none focus:border-gold"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gold mb-2 font-cinzel">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-rich-black border border-gold/20 rounded p-2 text-gold focus:outline-none focus:border-gold"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gold mb-2 font-cinzel">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full bg-rich-black border border-gold/20 rounded p-2 text-gold focus:outline-none focus:border-gold"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold hover:bg-gold-light text-rich-black font-cinzel font-semibold py-2 rounded transition-colors duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;