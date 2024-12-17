import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = encodeURIComponent(formData.get('name') as string);
    const email = encodeURIComponent(formData.get('email') as string);
    const message = encodeURIComponent(formData.get('message') as string);

    // Create mailto link with properly encoded form data
    const mailtoLink = `mailto:robindrory@gmail.com?subject=Contact Form Submission from ${name}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    // Open in new window/tab to prevent navigation issues
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Email client opened",
      description: "Please send the email through your default email client.",
    });
  };

  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />
      
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <h1 className="text-2xl md:text-3xl font-cinzel font-light mb-12 bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-transparent opacity-80">
            Get in Touch
          </h1>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-gold mb-2 font-cinzel">Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                className="bg-rich-black border-gold/20 text-gold focus:border-gold"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gold mb-2 font-cinzel">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                className="bg-rich-black border-gold/20 text-gold focus:border-gold"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gold mb-2 font-cinzel">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-md bg-rich-black border border-gold/20 text-gold focus:border-gold p-3 resize-none"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gold hover:bg-gold-light text-rich-black font-cinzel font-semibold rounded transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;