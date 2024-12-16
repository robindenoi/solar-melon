import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Gallery = () => {
  const { toast } = useToast();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

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
    toast({
      title: "Success!",
      description: "Welcome to our exclusive content section!",
    });
    // Here you would typically handle authentication
  };

  return (
    <div className="min-h-screen pt-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-cinzel text-gold mb-8">Our Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Public Gallery Images */}
          <Card className="bg-rich-black border-gold/20">
            <CardContent className="p-4">
              <img 
                src="https://source.unsplash.com/photo-1615729947596-a598e5de0ab3" 
                alt="Gallery Image 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </CardContent>
          </Card>
          <Card className="bg-rich-black border-gold/20">
            <CardContent className="p-4">
              <img 
                src="https://source.unsplash.com/photo-1504893524553-b855bce32c67" 
                alt="Gallery Image 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </CardContent>
          </Card>
          <Card className="bg-rich-black border-gold/20">
            <CardContent className="p-4">
              <img 
                src="https://source.unsplash.com/photo-1469474968028-56623f02e42e" 
                alt="Gallery Image 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </CardContent>
          </Card>
        </div>

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
      </div>
    </div>
  );
};

export default Gallery;