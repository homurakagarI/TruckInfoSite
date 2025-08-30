import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "TruckPro has transformed our logistics operations. Their fleet management system has improved our efficiency by 30% and reduced our maintenance costs significantly.",
    name: "John Smith",
    title: "CEO, Logistics Plus",
    initials: "JS",
  },
  {
    rating: 5,
    text: "Outstanding customer service and reliable vehicles. We've been using TruckPro for 5 years and they continue to exceed our expectations every day.",
    name: "Maria Rodriguez",
    title: "Operations Manager, FastTrack Delivery",
    initials: "MR",
  },
  {
    rating: 5,
    text: "The 24/7 support is incredible. When we had a breakdown at 2 AM, their team was there within 30 minutes. That's the kind of service that keeps our business running.",
    name: "David Wong",
    title: "Fleet Manager, Regional Transport Co.",
    initials: "DW",
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-testimonials-subtitle">
            Don't just take our word for it - hear from our satisfied customers.
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
              className="bg-card rounded-xl shadow-lg p-8"
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
