import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-2xl mx-auto bg-rich-black/50 backdrop-blur-sm border border-gold/10 rounded-lg p-8 md:p-12 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-cinzel text-gold mb-12 bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-transparent">
            Contact Us
          </h1>
          
          <div className="space-y-8 text-center">
            <div className="p-6 rounded-lg border border-gold/10 backdrop-blur-sm hover:border-gold/20 transition-all duration-300">
              <p className="text-xl md:text-2xl text-gold mb-4 font-cinzel">
                Would like to order?
              </p>
              <p className="text-lg md:text-xl text-gold/90">
                Please send a mail to:{" "}
                <a 
                  href="mailto:info@dewijnschuur.nl" 
                  className="text-gold hover:text-gold-light underline transition-colors duration-300 font-semibold"
                >
                  info@dewijnschuur.nl
                </a>
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gold/10 backdrop-blur-sm hover:border-gold/20 transition-all duration-300">
              <p className="text-xl md:text-2xl text-gold mb-4 font-cinzel">
                Or give us a call
              </p>
              <p className="text-lg md:text-xl text-gold/90">
                <a 
                  href="tel:+31631916064" 
                  className="text-gold hover:text-gold-light underline transition-colors duration-300 font-semibold"
                >
                  +31 6 31 91 60 64
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;