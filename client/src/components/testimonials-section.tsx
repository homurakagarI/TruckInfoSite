import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "TruckPro's enterprise fleet management platform has revolutionized our supply chain operations. We've achieved a 32% reduction in operational costs and 99.9% fleet uptime across our 200-vehicle operation.",
    name: "Sarah Chen",
    title: "VP of Operations, GlobalLogistics Corp",
    initials: "SC",
  },
  {
    rating: 5,
    text: "As a Fortune 500 company, we demand excellence. TruckPro has consistently delivered with their comprehensive fleet solutions, helping us maintain our industry-leading delivery performance standards.",
    name: "Michael Thompson",
    title: "Chief Supply Chain Officer, MegaCorp Industries",
    initials: "MT",
  },
  {
    rating: 5,
    text: "The predictive maintenance capabilities and enterprise-grade support have been game-changing. TruckPro's team responds within 15 minutes, and their preventive approach has eliminated unexpected breakdowns entirely.",
    name: "Jennifer Park",
    title: "Director of Fleet Operations, National Express",
    initials: "JP",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight" data-testid="text-testimonials-title">
            <span className="text-gradient">Enterprise Client</span> Success Stories
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-testimonials-subtitle">
            Trusted by Fortune 500 companies and industry leaders worldwide. See how our solutions drive measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl premium-shadow p-8 border border-border/50 hover:border-primary/20 transition-all duration-300"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-accent">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" data-testid={`star-${index}-${i}`} />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6 italic" data-testid={`text-testimonial-content-${index}`}>
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                  <span data-testid={`text-testimonial-initials-${index}`}>{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground" data-testid={`text-testimonial-name-${index}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm" data-testid={`text-testimonial-title-${index}`}>
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
