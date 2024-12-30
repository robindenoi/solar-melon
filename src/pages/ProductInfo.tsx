import { useNavigate } from "react-router-dom";

const ProductInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-rich-black">
      <div className="pt-8 pb-16">
        {/* First Section - Brand & Product Intro */}
        <section className="min-h-screen flex items-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="mb-6 md:mb-8">
                <img 
                  src="/lovable-uploads/217f3b39-982e-4aa3-9b55-063a8d46eec2.png" 
                  alt="Solar Logo" 
                  className="w-16 h-16 mx-auto"
                />
              </div>
              
              <h1 className="text-xl md:text-3xl lg:text-4xl font-cinzel font-light mb-8 md:mb-12 bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-transparent opacity-80 whitespace-nowrap">
                A Taste of Italian Sunshine
              </h1>
              
              <p className="text-base md:text-lg text-gold/90 leading-relaxed font-inter">
                Experience the exquisite blend of premium spirits and natural melon essence in our Solar Melon liqueur. Crafted with passion and precision, this 17% alcohol beverage offers a perfect balance of sweetness and sophistication.
              </p>
            </div>
          </div>
        </section>

        {/* Second Section - Pricing & Special Offer */}
        <section id="special-offer" className="min-h-screen flex items-center relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Single Bottle */}
                <div className="bg-rich-black/50 backdrop-blur-sm border border-gold/20 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-cinzel text-gold mb-4">Single Bottle</h3>
                  <img 
                    src="/lovable-uploads/0d6985b6-d515-4d2e-9d79-8c8ad3bb0406.png"
                    alt="Solar Melon Bottle" 
                    className="w-32 mx-auto mb-4"
                  />
                  <p className="text-3xl font-cinzel text-gold mb-1">€16,50 ex</p>
                  <p className="text-sm text-gold/70 mb-4">excl. btw</p>
                  <div className="space-y-2">
                    <p className="text-gold mb-2">Order: orders@dewijnschuur.nl</p>
                  </div>
                </div>

                {/* Special Offer */}
                <div className="bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-lg p-8 text-center relative overflow-hidden">
                  <div className="absolute top-2 right-2 rotate-12 bg-gold text-rich-black px-4 py-1 text-sm font-bold">
                    Special Offer
                  </div>
                  
                  <h3 className="text-2xl font-cinzel text-gold mb-4">Bulk Order Special</h3>
                  <div className="space-y-2 mb-6">
                    <p className="text-xl text-gold/90">Order 23 Bottles</p>
                    <p className="text-2xl font-cinzel text-gold">Get 2 Extra Bottles</p>
                    <p className="text-gold/80">FREE</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-gold mb-2">Order: orders@dewijnschuur.nl</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductInfo;