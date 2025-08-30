import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-card"
      } border-b border-border`}
      data-testid="navigation-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary" data-testid="text-logo">
                TruckPro
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="link-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="link-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("fleet")}
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="link-fleet"
              >
                Fleet
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="link-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="link-contact"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors"
                data-testid="button-get-quote"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary focus:outline-none focus:text-primary"
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
            data-testid="menu-mobile"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="link-mobile-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="link-mobile-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("fleet")}
                className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="link-mobile-fleet"
              >
                Fleet
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="link-mobile-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="link-mobile-contact"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-accent text-accent-foreground block px-3 py-2 text-base font-medium rounded-md mt-2 w-full text-left"
                data-testid="button-mobile-get-quote"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
