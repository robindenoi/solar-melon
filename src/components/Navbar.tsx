import { Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-rich-black/90 backdrop-blur-sm z-50 border-b border-gold/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-gold hover:text-gold-light transition-colors">
            <Sun className="w-8 h-8" />
            <span className="font-cinzel text-xl">Solar</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;