import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { differenceInYears } from "date-fns";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const [showAgeVerification, setShowAgeVerification] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already verified their age
    const isAgeVerified = localStorage.getItem("ageVerified");
    if (isAgeVerified) {
      setShowAgeVerification(false);
    }
  }, []);

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    
    const age = differenceInYears(new Date(), date);
    
    if (age >= 18) {
      localStorage.setItem("ageVerified", "true");
      setShowAgeVerification(false);
      toast({
        title: "Welcome",
        description: "Age verification successful. Welcome to our website!",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "You must be 18 or older to access this website.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-rich-black">
      <AlertDialog open={showAgeVerification}>
        <AlertDialogContent className="bg-rich-black border border-gold/20">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-gold font-cinzel text-xl text-center">
              Age Verification Required
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gold/80 text-center">
              You must be 18 years or older to enter this website.
              Please select your date of birth:
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="flex justify-center py-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              disabled={(date) => date > new Date()}
              className="rounded-md border border-gold/20 bg-rich-black text-gold"
            />
          </div>
          
          <AlertDialogFooter className="sm:justify-center">
            <Button
              variant="outline"
              onClick={() => window.location.href = "https://www.google.com"}
              className="border-gold text-gold hover:bg-gold hover:text-rich-black font-cinzel"
            >
              Exit Website
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {!showAgeVerification && (
        <>
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
                  <button 
                    onClick={() => navigate('/products')}
                    className="px-6 py-2 bg-gold hover:bg-gold-light text-rich-black font-cinzel rounded transition-colors duration-300"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Index;