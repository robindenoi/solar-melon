import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 pt-20 text-center relative">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/217f3b39-982e-4aa3-9b55-063a8d46eec2.png" 
              alt="Solar Logo" 
              className="w-16 h-16 mx-auto animate-[zoom_1s_ease-out]"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-cinzel font-bold mb-6 bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-transparent">
            A Taste of Italian Sunshine
          </h1>
          
          <p className="text-lg md:text-xl text-gold/80 max-w-2xl mx-auto mb-12">
            In the picturesque town of Cagli, Italy, Melon Solar is crafted with unparalleled passion and tradition.
          </p>
          
          <button className="px-8 py-3 bg-gold hover:bg-gold-light text-rich-black font-cinzel font-semibold rounded transition-colors duration-300">
            Explore Our Products
          </button>
        </div>
      </section>
      
      {/* Product Section */}
      <section className="py-24 bg-gradient-to-b from-rich-black to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-cinzel text-center mb-16 text-gold">
            Our Collection
          </h2>
          
          <div className="max-w-md mx-auto bg-rich-black/50 backdrop-blur-sm border border-gold/20 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/e3d95c36-4b5f-418f-a77e-68be08f2d5d1.png" 
              alt="Melon Solar Bottle" 
              className="w-full h-auto"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-cinzel text-gold mb-2">Melon Solar</h3>
              <p className="text-gold/80 mb-4">17% Alcohol</p>
              <button className="px-6 py-2 bg-gold hover:bg-gold-light text-rich-black font-cinzel rounded transition-colors duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;