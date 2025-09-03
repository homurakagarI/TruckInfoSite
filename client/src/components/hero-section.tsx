import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
          alt="Modern commercial trucks on highway"
          className="w-full h-full object-cover"
          data-testid="img-hero-background"
        />
        <div className="absolute inset-0 hero-gradient opacity-75"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-primary-foreground mb-6 leading-tight tracking-tight"
            data-testid="text-hero-title"
          >
            Enterprise-Grade{" "}
            <span className="text-accent">Commercial Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/95 mb-10 font-medium leading-relaxed max-w-4xl mx-auto"
            data-testid="text-hero-subtitle"
          >
            Industry-leading commercial vehicle solutions and fleet management services trusted by Fortune 500 companies. 
            <span className="font-semibold text-accent">Engineered for Excellence. Built for Results.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-accent/20 backdrop-blur-sm"
              data-testid="button-hero-get-quote"
            >
              Request Enterprise Quote
            </button>
            <button
              onClick={() => scrollToSection("fleet")}
              className="border-2 border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 backdrop-blur-sm hover:shadow-xl"
              data-testid="button-hero-view-fleet"
            >
              Explore Solutions
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground animate-bounce cursor-pointer"
        onClick={() => scrollToSection("services")}
        data-testid="button-scroll-indicator"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}
