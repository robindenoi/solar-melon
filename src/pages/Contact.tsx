import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-2xl md:text-3xl font-cinzel text-gold mb-8">Contact Us</h1>
        
        <div className="max-w-lg mx-auto space-y-6 text-center">
          <p className="text-gold text-lg">
            Would like to order? Please send a mail to:{" "}
            <a 
              href="mailto:info@dewijnschuur.nl" 
              className="text-gold hover:text-gold-light underline transition-colors duration-300"
            >
              info@dewijnschuur.nl
            </a>
          </p>
          
          <p className="text-gold text-lg">
            or call{" "}
            <a 
              href="tel:+31631916064" 
              className="text-gold hover:text-gold-light underline transition-colors duration-300"
            >
              +31 6 31 91 60 64
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;