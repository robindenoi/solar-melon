import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Lock } from "lucide-react";
import Navbar from "@/components/Navbar";

const Gallery = () => {
  const { toast } = useToast();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(age) < 18) {
      toast({
        variant: "destructive",
        title: "Age Restriction",
        description: "You must be 18 or older to access exclusive content.",
      });
      return;
    }
    setIsLoggedIn(true);
    toast({
      title: "Success!",
      description: "Welcome to our exclusive content section!",
    });
  };

  const partyImages = [
    {
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      alt: "Elegant Party Setting"
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      alt: "Luxury Event Space"
    },
    {
      src: "https://images.unsplash.com/photo-1518877593221-1f28583780b4",
      alt: "VIP Party Area"
    }
  ];

  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />
      <div className="min-h-screen pt-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-rich-black border border-gold/20 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-cinzel text-gold mb-4">Exclusive Member Content</h2>
            <p className="text-gold/80 mb-6">
              Join our exclusive membership to access premium content and special features.
            </p>
            
            {!showLoginForm ? (
              <Button
                onClick={() => setShowLoginForm(true)}
                className="bg-gold hover:bg-gold-light text-rich-black font-semibold"
              >
                Access Exclusive Content
              </Button>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <div>
                  <label htmlFor="email" className="block text-gold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 rounded bg-rich-black border border-gold/20 text-gold"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-gold mb-2">Age</label>
                  <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full p-2 rounded bg-rich-black border border-gold/20 text-gold"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-gold hover:bg-gold-light text-rich-black font-semibold"
                >
                  Submit
                </Button>
              </form>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {partyImages.map((image, index) => (
              <Card key={index} className="bg-rich-black border-gold/20 relative overflow-hidden">
                <CardContent className="p-4">
                  <div className="relative">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-48 object-cover rounded-lg ${!isLoggedIn ? 'blur-sm' : ''}`}
                    />
                    {!isLoggedIn && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                        <Lock className="w-8 h-8 text-gold" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;