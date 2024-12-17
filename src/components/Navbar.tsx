import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <nav className="fixed w-full bg-rich-black/90 backdrop-blur-sm z-50 border-b border-gold/20">
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-gold hover:text-gold-light transition-colors">
            <img 
              src="/lovable-uploads/217f3b39-982e-4aa3-9b55-063a8d46eec2.png" 
              alt="Solar Logo" 
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="font-cinzel text-lg md:text-xl">Solar</span>
          </Link>
          
          {isMobile ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-gold hover:text-gold-light transition-colors">
                  <Menu className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-rich-black border border-gold/20">
                <DropdownMenuItem asChild>
                  <Link to="/" className="text-gold hover:text-gold-light w-full font-cinzel">
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/gallery" className="text-gold hover:text-gold-light w-full font-cinzel">
                    Gallery
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products" className="text-gold hover:text-gold-light w-full font-cinzel">
                    Products
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact" className="text-gold hover:text-gold-light w-full font-cinzel">
                    Contact
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center space-x-8 font-cinzel">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/gallery" className="nav-link">Gallery</Link>
              <Link to="/products" className="nav-link">Products</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;