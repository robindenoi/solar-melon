import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AgeVerification from "@/components/AgeVerification";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const navigate = useNavigate();
  const [showAgeVerification, setShowAgeVerification] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Check if user has already verified their age
    const isAgeVerified = localStorage.getItem("ageVerified");
    if (isAgeVerified) {
      setShowAgeVerification(false);
    } else {
      // If not verified, force show verification
      setShowAgeVerification(true);
    }
  }, []);

  // Prevent content from showing if age verification is required
  if (showAgeVerification) {
    return <AgeVerification onVerificationSuccess={() => setShowAgeVerification(false)} />;
  }

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
              className="w-16 h-16 mx-auto animate-[zoom_1s_ease-out] animate-float"
            />
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-cinzel font-light mb-12 bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-transparent opacity-80">
            A Taste of Italian Sunshine
          </h1>
          
          <button 
            onClick={() => navigate('/products')}
            className="px-8 py-3 bg-gold hover:bg-gold-light text-rich-black font-cinzel font-semibold rounded transition-colors duration-300"
          >
            Explore Our Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;