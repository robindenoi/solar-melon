import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Products = () => {
  const { toast } = useToast();

  const handleOrder = () => {
    toast({
      title: "How to Order",
      description: (
        <div className="space-y-2 mt-2">
          <p>Please contact us via:</p>
          <p>
            Email:{" "}
            <a 
              href="mailto:info@dewijnschuur.nl"
              className="text-gold hover:text-gold-light underline transition-colors duration-300"
            >
              info@dewijnschuur.nl
            </a>
          </p>
          <p>
            Phone:{" "}
            <a 
              href="tel:+31631916064"
              className="text-gold hover:text-gold-light underline transition-colors duration-300"
            >
              +31 6 31 91 60 64
            </a>
          </p>
        </div>
      ),
      duration: 10000,
    });
  };

  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />
      
      <section className="min-h-screen pt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-xs mx-auto bg-rich-black/50 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
            <div className="relative group">
              <img 
                src="/lovable-uploads/0d6985b6-d515-4d2e-9d79-8c8ad3bb0406.png"
                alt="Solar Melon Bottle" 
                className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-6 text-center">
              <h3 className="text-xl font-cinzel text-gold mb-2">Solar Melon</h3>
              <p className="text-gold/80 mb-2 text-sm font-light">17% Alcohol</p>
              <p className="text-gold mb-4 font-cinzel">€16,50</p>
              
              <Button
                onClick={handleOrder}
                className="w-full bg-gold hover:bg-gold-light text-rich-black font-cinzel font-semibold transition-colors duration-300"
              >
                Order Here
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;